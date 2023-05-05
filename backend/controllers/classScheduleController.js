import con from "../index.js";
import { sendCustomSuccess, sendInternalServerError } from "./common.js";

// POST on create class schedule
export const createSchedule = async(req, res) => {
    var club_id = req.body.clubId;
    var class_name = req.body.className;
    var class_day = req.body.classDay;
    var instructor_id = req.body.instructorId;
    var start_time = req.body.startTime;
    var end_time = req.body.endTime;

    var sql_findClass = "SELECT * FROM class_schedule WHERE start_time = ?";
    var sql_insert = "INSERT INTO class_schedule (club_id,class_name,class_day,instructor_id,start_time,end_time) VALUES (?,?,?,?,?,?)";

    con.query(sql_findClass, [start_time], function (err, result) {
    if (err) {
        res.status(205).json({
        success:false,
        message: 'Internal Server Error',
        });
        console.error(err);
    }
    else {
        if (result && result[0] == null) {
        con.query(sql_insert, [club_id, class_name, class_day, instructor_id, start_time, end_time], function (err, result) {
            if (err) {
            res.status(205).json({
                success:false,
                message: 'Failed to add class',
            });
            console.error(err);
            }
            else {
            res.status(200).json({
                success: true,
            })
            console.log("Successfully created new Class schedule to timetable");
            }
        });
        }
        else {
        console.log('Error: Conflict with the existing class at the same time');
        res.status(500).json({
            success:false,
            message: 'Conflict with the existing class at the same time',
        });
        }
    }
    });
};

// POST on update class schedule
export const updateSchedule = async(req, res) => {
    const schedule_id = req.query.schedule_id;
    var club_id = req.body.clubId;
    var class_name = req.body.className;
    var class_day = req.body.classDay;
    var instructor_id = req.body.instructorId;
    var start_time = req.body.startTime;
    var end_time = req.body.endTime;

    var sql_findClass = "SELECT * FROM class_schedule WHERE start_time = ? AND schedule_id != ?";
    var update_Query = `UPDATE  class_schedule SET
    club_id = ?,
    class_name = ?,
    class_day = ?,
    instructor_id = ?,
    start_time = ?,
    end_time = ? 
    WHERE schedule_id = ?`;
  
    con.query(sql_findClass, [start_time, schedule_id], function (err, result) {
    if (err) {
        res.status(205).json({
        success:false,
        message: 'Internal Server Error',
        });
        console.error(err);
    }
    else {
        if (result && result[0] == null) {
        con.query(update_Query, [club_id, class_name, class_day, instructor_id, start_time, end_time, schedule_id], function (err, result) {
            if (err) {
            res.status(205).json({
                success:false,
                message: 'Failed to add class',
            });
            console.error(err);
            }
            else {
            res.status(200).json({
                success: true,
            })
            console.log("Successfully created new Class schedule to timetable");
            console.log(result);
            }
        });
        }
        else {
        console.log('Error: Conflict with the existing class at the same time');
        res.status(500).json({
            success:false,
            message: 'Conflict with the existing class at the same time',
        });
        }
    }
    });
};

//DELETE request on class Schedule
export const deleteSchedule = (req, res) => {
    try{
        const scheduleId = req.params.scheduleId;
        const delScheduleByIdQuery = `DELETE FROM class_schedule WHERE schedule_id = ?`;
        con.query(delScheduleByIdQuery, [scheduleId], (err, result)=>{
        if(err){
            console.error(err);
            sendInternalServerError(res);
        }
        else{
            sendCustomSuccess(res, result[0]);
            console.log("delete class schedule with scheduleId: ",scheduleId);
            console.log(result);
        }
        });  
    }
    catch(err){
        console.error(err);
        sendInternalServerError(res);
    }
}


//GET all class schedules
export const getClassSchedule = (req, res) => {
    try{
        var query_params = []
        const day = req.query.day;
        const instructorId = req.query.instructorId;
        var getClassScheduleByQuery = `SELECT * FROM class_schedule `;
        if (day && instructorId) {
            query_params.push(day, instructorId);
            getClassScheduleByQuery += `WHERE class_day = ? and instructor_id = ?`;
        }
        else if (day) {
            query_params.push(day);
            getClassScheduleByQuery += `WHERE class_day = ?`;
        }
        else if (instructorId) {
            query_params.push(instructorId);
            getClassScheduleByQuery += `WHERE instructor_id = ?`;
        }
        console.log("SQL Query: ", getClassScheduleByQuery);
        con.query(getClassScheduleByQuery, query_params, (err, result)=>{
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
            console.log("get all class schedules");
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

//GET class schedules by scheduleId
export const getClassSceduleById = (req, res) => {
    try{
        const scheduleId = req.params.scheduleId;
        const classScheduleById = `SELECT * FROM class_schedule WHERE schedule_id = ?`;
        con.query(classScheduleById, [scheduleId], (err, result)=>{
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
            console.log("getClassSchedule with scheduleId: ",scheduleId);
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
