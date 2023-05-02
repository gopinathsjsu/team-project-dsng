import con from "../index.js";
import { sendCustomSuccess, sendInternalServerError } from "./common.js";


// POST on create class Enrollment
export const createEnrollment = async(req, res) => {
    var customer_id = req.body.customerId;
    var schedule_id = req.body.scheduleId;

    var sql_findClass = "SELECT * FROM class_enrollment WHERE schedule_id = ? and customer_id = ?";
    var sql_insert = "INSERT INTO class_enrollment (schedule_id,customer_id) VALUES (?,?)";

    con.query(sql_findClass, [schedule_id, customer_id], function (err, result) {
    if (err) {
        res.status(205).json({
        success:false,
        message: 'Internal Server Error',
        });
        console.error(err);
    }
    else {
        if (result && result[0] == null) {
        con.query(sql_insert, [schedule_id, customer_id], function (err, result) {
            if (err) {
            res.status(205).json({
                success:false,
                message: 'Failed to enroll in class',
            });
            console.error(err);
            }
            else {
            res.status(200).json({
                success: true,
            })
            console.log("Successfully created new Class enrollment");
            }
        });
        }
        else {
        console.log('Error: Enrolled in this class already');
        res.status(500).json({
            success:false,
            message: 'Enrolled in this class already',
        });
        }
    }
    });
};


//DELETE request on class enrollment
export const deleteEnrollment = (req, res) => {
    try{
        const enrollment_id = req.params.enrollmentId;
        const delEnrollmentByIdQuery = `DELETE FROM class_enrollment WHERE enrollment_id = ?`;
        con.query(delEnrollmentByIdQuery, [enrollment_id], (err, result)=>{
        if(err){
            console.error(err);
            sendInternalServerError(res);
        }
        else{
            sendCustomSuccess(res, result[0]);
            console.log("delete class enrollment with enrollmentId: ",enrollment_id);
            console.log(result);
        }
        });  
    }
    catch(err){
        console.error(err);
        sendInternalServerError(res);
    }
}


//GET all class enrollment
export const getClassEnrollment = (req, res) => {
    try{
        // var query_params = []
        // const day = req.query.day;
        const customer_id = req.query.customerId;
        var getClassEnrollmentByQuery = `SELECT * FROM class_schedule 
        LEFT JOIN class_enrollment ON class_schedule.schedule_id = class_enrollment.schedule_id
        WHERE customer_id = ? ; `;
        console.log("SQL Query: ", getClassEnrollmentByQuery);
        con.query(getClassEnrollmentByQuery, customer_id, (err, result)=>{
        if(err){
            console.error(err);
            sendInternalServerError(res);
        }
        else if (result && result.length>0) {
            res.status(200).json({
            success: true,
            payload: {
                data: result, 
            },
            });
            console.log("get all class enrollment for customer", customer_id);
            console.log(result);
        }
        else {
          res.status(404).json({ errors: ['Empty class schedules'] });
          console.log("Empty class schedules")
        }
        });  
    }
    catch(err){
        console.error(err);
        sendInternalServerError(res);
    }
}

//GET class enrollment by Id
// export const getClassEnrollmentById = (req, res) => {
//     try{
//         const enrollment_id = req.params.enrollmentId;
//         const classScheduleById = `SELECT * FROM class_schedule WHERE schedule_id = ?`;
//         con.query(classScheduleById, [scheduleId], (err, result)=>{
//         if(err){
//             console.error(err);
//             sendInternalServerError(res);
//         }
//         else if (result && result.length>0) {
//             res.status(200).json({
//             success: true,
//             payload: {
//                 data: result, 
//             },
//             });
//             console.log("getClassSchedule with scheduleId: ",scheduleId);
//             console.log(result);
//         }
//         else {
//           res.status(404).json({ errors: ['Empty class schedules'] });
//           console.log("Empty class schedules")
//         }
//         });  
//     }
//     catch(err){
//         console.error(err);
//         sendInternalServerError(res);
//     }
// }
