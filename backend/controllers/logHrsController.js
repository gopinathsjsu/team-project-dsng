import con from "../index.js";
import { sendCustomSuccess, sendInternalServerError } from "./common.js";
import { getDayOfWeek, getCustomerName } from "./utils.js";

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
    var sql_findClass = "SELECT * FROM log WHERE checkin = ? and customer_id = ?";
    var sql_insert = "INSERT INTO log (club_id,customer_id,checkin,fname,lname, week_day) VALUES (?,?,?,?,?,?)";

    con.query(sql_findClass, [checkin_time, customer_id], function (err, result) {
    if (err) {
        res.status(205).json({
        success:false,
        message: 'Internal Server Error',
        });
        console.error(err);
    }
    else {
        if (result && result[0] == null) {
        con.query(sql_insert, [club_id, customer_id, checkin_time, fname, lname, week_day], function (err, result) {
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
            })
            console.log("Successfully checked-in");
            }
        });
        }
        else {
        console.log('Error: Conflict with the existing log at the same time');
        res.status(500).json({
            success:false,
            message: 'Conflict with the existing log at the same time',
        });
        }
    }
    });
};

export const logCheckout = async(req, res) => {

}

export const logActivity = async(req, res) => {

}