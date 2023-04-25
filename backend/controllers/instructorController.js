
import con from "../index.js";
import pkg1 from 'bcryptjs';
const { compare, genSalt, hash: _hash } = pkg1;
import { sendCustomSuccess, sendInternalServerError } from "./common.js";

// POST on instructor registration
export const signUp = async(req, res) => {
    var class_assigned = req.body.classAssigned;
    var fname = req.body.firstName;
    var lname = req.body.lastName;
    var email = req.body.email;
    const password = req.body.password;
    var details = req.body.details;

    var sql_findEmail = "SELECT * FROM instructor WHERE email = ?";
    var sql_insert = "INSERT INTO instructor (fname,lname,email,pwd,details,class_assigned) VALUES (?,?,?,?,?,?)";
    async function hashPassword(password) {
      const salt = await genSalt(10);
      const hash = await _hash(password, salt);
      return hash;
    }
  
    hashPassword(password).then((instructorPassword) => {
      con.query(sql_findEmail, [email], function (err, result) {
        if (err) {
          res.status(205).json({
            success:false,
            message: 'Internal Server Error',
          });
          console.error(err);
        }
        else {
          if (result && result[0] == null) {
            con.query(sql_insert, [fname, lname, email, instructorPassword, details, class_assigned], function (err, result) {
              if (err) {
                res.status(205).json({
                  success:false,
                  message: 'Sign up failed',
                });
                console.error(err);
              }
              else {
                res.status(200).json({
                  success: true,
                })
                console.log("Successfully created new Instructor record!");
              }
            });
          }
          else {
            console.log('SQL Error:', err);
            res.status(205).json({
              success:false,
              message: 'Email Already exists',
            });
          }
        }
      });
    });
  };
  
// POST on update for instructor details 
export const updateInstructor = ( req, res) => {
try{
    async function hashPassword(password) {
    const salt = await genSalt(10);
    const hash = await _hash(password, salt);
    return hash;
    }

    const instructor_id = req.query.instructor_id;
    var class_assigned = req.body.classAssigned;
    var fname = req.body.firstName;
    var lname = req.body.lastName;
    var email = req.body.email;
    const password = req.body.password;
    var details = req.body.details;

    const updateQuery = `UPDATE instructor SET
    fname = ?,
    lname = ?,
    email = ?,
    pwd = ?,
    details = ?,
    class_assigned = ?
    WHERE instructor_id = ?
    `;

    const getUserByIdQuery = 'SELECT * FROM instructor WHERE instructor_id = ?';
    hashPassword(password).then((instructorPassword) => {
    console.log("password: ", instructorPassword);
    con.query(updateQuery, 
        [fname, 
        lname, 
        email, 
        instructorPassword,  
        details, 
        class_assigned,
        instructor_id
    ], (err, result1) => {
        if(err){
            res.status(500).json({
                message: 'Internal Server Error'
            })
            console.error(err);
        }
        else{
            con.query(getUserByIdQuery, [instructor_id], (err, result2)=>{
                console.log(result2);
                if(result2[0]){
                    res.status(200).json({
                        success:true,
                        payload: {
                        data: result2[0],
                        }
                    });
                }
                else{
                    res.status(500).json({
                        success: false,
                        message: 'User Not Found',
                    });
                    console.error(err);
                }
            })
        }
    })
    });
} 
catch(err){
    console.error(err);
    res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    });
}
}


//GET all instructors
export const getAllInstructors = (req, res) => {
    try{
        const getInstructorByQuery = `SELECT * FROM instructor`;
        con.query(getInstructorByQuery, (err, result)=>{
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
            console.log("get all Instructors");
            console.log(result);
        }
        else {
          res.status(404).json({ errors: ['Empty records'] });
          console.log("Empty records")
        }
        });  
    }
    catch(err){
        console.error(err);
        sendInternalServerError(res);
    }
}

//GET request on instructor_id
export const getInstructor = (req, res) => {
    try{
        const instructorId = req.params.instructorId;
        const getInstructorByIdQuery = `SELECT * FROM instructor WHERE instructor_id = ?`;
        con.query(getInstructorByIdQuery, [instructorId], (err, result)=>{
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
            console.log("getInstructor with instructorId: ",instructorId);
            console.log(result);
        }
        else {
          res.status(404).json({ errors: ['Empty records'] });
          console.log("Empty records")
        }
        });  
    }
    catch(err){
        console.error(err);
        sendInternalServerError(res);
    }
}
  
//DELETE request on instructor_id
export const deleteInstructor = (req, res) => {
    try{
        const instructorId = req.params.instructorId;
        const delInstructorByIdQuery = `DELETE FROM instructor WHERE instructor_id = ?`;
        con.query(delInstructorByIdQuery, [instructorId], (err, result)=>{
        if(err){
            console.error(err);
            sendInternalServerError(res);
        }
        else{
            sendCustomSuccess(res, result[0]);
            console.log("deleteInstructor with instructorId: ",instructorId);
            console.log(result);
        }
        });  
    }
    catch(err){
        console.error(err);
        sendInternalServerError(res);
    }
}