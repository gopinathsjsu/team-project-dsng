import con from "../index.js";

export function timeOneWeekAgo(){
    var currentDate = new Date();
    var oneWeekAgo = new Date(currentDate.getTime() - (7 * 24 * 60 * 60 * 1000));
    var dateOneWeekAgo = new Date(oneWeekAgo);
    return dateOneWeekAgo;
}

export function timeNMonthAgo(n){
    var currentDate = new Date();
    var nMonthAgo = new Date(currentDate.getFullYear(), currentDate.getMonth() - n, currentDate.getDate()).getTime();
    var dateNMonthsAgo = new Date(nMonthAgo);
    return dateNMonthsAgo;
} 

export function formatTime(time){
    var date = time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate();
    var time_val = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    var dateTime = date+' '+time_val;
    return dateTime;
}


export function getTime(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    return dateTime;
}

// Utility function to return the day of the week
export function getDayOfWeek(dateStr){
    const dateObj = new Date(dateStr);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[dateObj.getDay()];
    return dayOfWeek
}

// Utility function to get customer details from customer_id
export function getCustomerName (customer_id) {
    var customer_id = customer_id;
    var sql_findCustomer = "SELECT * FROM customer WHERE customer_id = ?";
    return new Promise((resolve, reject) => {
        con.query(sql_findCustomer, [customer_id], (err, result) => {
        if (err) {
            reject(err);
        } else if (result && result.length > 0) {
            console.log("Checking for the Customer existence", result);
            var normalObj = Object.assign({}, result[0]);
            resolve(normalObj);
        } else {
            resolve([]);
        }
        });
    });
}

export function getCheckinTime (customer_id, checkout_time) {
    var day_start_time = checkout_time.split(" ")[0] + " 00:00:00";
    var day_end_time = checkout_time.split(" ")[0] + " 23:59:59";
    var sql_findCheckin = "SELECT log_id, checkin FROM log WHERE customer_id = ? and checkin > ? and checkin < ?";
    return new Promise((resolve, reject) => {
        con.query(sql_findCheckin, [customer_id, day_start_time, day_end_time], (err, result) => {
        if (err) {
            console.log(err);
            reject(-1);
        } else if (result && result.length > 0) {
            console.log("Querying DB to get the checkin time", result);
            var normalObj = Object.assign({}, result[0]);
            resolve([normalObj["log_id"], normalObj["checkin"]]);
        } else {
            resolve([]);
        }
        });
    });
}

export function logActivities (activities, timestamp, customer_id, club_id) {
    var sql_insert = "INSERT INTO log_activity (timestamp,customer_id,club_id,activity,total_time) VALUES ?";
    var values = [];
    for (const activity in activities) {
        var value = [timestamp, customer_id, club_id, activity, activities[activity]];
        values.push(value);
    }
    return new Promise((resolve, reject) => {
        con.query(sql_insert, [values], (err, result) => {
        if (err) {
            console.log(err);
            reject(-1);
        } 
        else {
            console.log("Successfully inserted data into log_activity");
            resolve(1);
        }
        });
    });
}
