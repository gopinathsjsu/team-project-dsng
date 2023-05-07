import con from "../index.js";
import { sendCustomSuccess, sendInternalServerError } from "./common.js";
import { getTime, timeOneWeekAgo, timeNMonthAgo, formatTime, logActivities, getDayOfWeek, getCustomerName, getCheckinTime } from "./utils.js";

// POST on logCheckin
export const logCheckin = async(req, res) => {
    var club_id = req.body.clubId;
    var checkin_time = req.body.checkin;
    var customer_id = req.query.customerId;
    var week_day = getDayOfWeek(checkin_time);

    const customer_details = await getCustomerName(customer_id);
    console.log("Displaying customer details: ", customer_details);
    if (!customer_details) {
        console.log('Error: Customer not found');
        res.status(404).json({
            success:false,
            message: 'Error: Customer not found',
        });
        return 1;
    }
    var fname = customer_details.fname;
    var lname = customer_details.lname;
    const curr_time = getTime();
    var checkin_date_start = checkin_time.split(" ")[0] + " 00:00:00";
    var checkin_date_end = checkin_time.split(" ")[0] + " 23:59:59";
    var sql_findClass = "SELECT * FROM log WHERE checkin > ? and checkin < ? and customer_id = ? and checkout IS NULL";
    var sql_insert = "INSERT INTO log (timestamp,club_id,customer_id,checkin,fname,lname, week_day) VALUES (?,?,?,?,?,?,?)";

    con.query(sql_findClass, [checkin_date_start, checkin_date_end, customer_id], function (err, result) {
    if (err) {
        res.status(205).json({
        success:false,
        message: 'Internal Server Error',
        });
        console.error(err);
    }
    else {
        if (result && result[0] == null) {
        con.query(sql_insert, [curr_time, club_id, customer_id, checkin_time, fname, lname, week_day], function (err, result) {
            if (err) {
            res.status(205).json({
                success:false,
                message: 'Failed to log checkin',
            });
            console.error(err);
            }
            else {
            res.status(200).json({
                success: true,
                message: "Customer successfully checked-in",
            })
            console.log("Successfully checked-in");
            }
        });
        }
        else {
        console.log('Bad request: Customer already signedin for this day');
        res.status(400).json({
            success:false,
            message: 'Customer already signedin for this day. So, Checkout.',
        });
        }
    }
    });
};

export const logCheckout = async(req, res) => {
    // implement a logic to add log checkout during logout
    var club_id = req.body.clubId;
    var checkout_time = req.body.checkout;
    var customer_id = req.query.customerId;
    var activities = req.body.activities;

    // get checkin time existing from the DB;
    const resp = await getCheckinTime(customer_id, checkout_time);
    const log_id = resp[0];
    const checkin_time = resp[1];
    console.log("checkin time from sql query ", checkin_time);
    const checkout_obj = new Date(checkout_time);
    const checkin_obj = new Date(checkin_time);
    var total_time = (checkout_obj.getTime() - checkin_obj.getTime())/3600000;
    total_time = Math.round(total_time * 10) / 10
    console.log("Total time spent in gym: ", total_time, "hrs");
    if(total_time == -1) {
        console.log('Bad request: customer trying to checkout without checkin');
        res.status(400).json({
            success:false,
            message: 'Customer trying to checkout without checkin',
        });
        return 1;
    }
    
    // Now, log all the activities as listed during checkout
    const response = await logActivities(activities, checkin_obj, customer_id, club_id);
    if (response == 1) {
        console.log("Activity logged successfully!!");
    }
    else {
        console.error('Error in inserting records into log_activity');
        res.status(500).json({
            success: false,
            message: 'Error in inserting records into log_activity',
        });
        return 1;
    }

    // log checkout now
    var sql_insert = "UPDATE log SET checkout = ?, total_time = ? WHERE log_id = ?";
    con.query(sql_insert, [checkout_time, total_time, log_id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                success:false,
                message: 'Conflict with the existing class at the same time',
            });
        } 
        else {
            console.log("Successfully handled checkout and logging it");
            res.status(200).json({
                success: true,
                message: "Checkout successfully",
            })
        }
    });

};

// POST on log activities
export const logActivity = async(req, res) => {
    var club_id = req.body.clubId;
    var timestamp = req.body.timestamp;
    var customer_id = req.query.customerId;
    var activities = req.body.activities;

    const response = await logActivities(activities, timestamp, customer_id, club_id);
    if (response == 1) {
        console.log("Activity logged successfully!!");
        res.status(200).json({
            success: true,
            message: 'Succefully logged activities',
        })
    }
    else {
        console.error('Error in inserting records into log_activity');
        res.status(500).json({
            success: false,
            message: 'Error in inserting records into log_activity',
        });
        return 1;
    }
}

// GET activity logs; filter on customerId and time period week/month/90days
export const getActivityLog = async(req, res) => {
    var customer_id = req.query.customerId;
    var time_period = req.query.timePeriod || "month";
    // var curr_time = getTime();

    switch(time_period){
        case "week":
            time_period = formatTime(timeOneWeekAgo());
            break;
        case "month":
            time_period = formatTime(timeNMonthAgo(1));
            break;
        case "90days":
            time_period = formatTime(timeNMonthAgo(3));
            break;
        default:
            res.status(404).json({ errors: ['Incorrect timePeriod. Choose week/month/90days'] });
            console.log("Incorrect timePeriod. Choose week/month/90days");
            return 1;
    }
    var getActivityLogQuery = `SELECT SUM(total_time) AS totlaTime, activity FROM log_activity \
    WHERE customer_id = ? AND timestamp > ? GROUP BY activity` ;
    
    console.log("customerId: ", customer_id);
    con.query(getActivityLogQuery, [customer_id, time_period], (err, result)=>{
        if(err){
            console.error(err);
            sendInternalServerError(res);
        }
        else if (result && result.length>0) {
            res.status(200).json({
                success: true,
                payload: result
            });
            console.log("get all activity logs for customer: ", result);
        }
        else {
          res.status(404).json({ errors: ['Empty logs for activity'] });
          console.log("Empty logs for activity")
        }
    });
}

