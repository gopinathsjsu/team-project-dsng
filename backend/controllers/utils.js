import con from "../index.js";

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

