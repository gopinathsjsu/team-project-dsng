
import con from "../index.js";
import pkg1 from 'bcryptjs';
const { compare, genSalt, hash: _hash } = pkg1;
import { createJWT, verifyToken } from "../services/userService.js";
import { sendCustomSuccess, sendInternalServerError } from "./common.js";

// POST on admin registration
export const signUp = async(req, res) => {
    var club_id = req.body.clubId;
    var fname = req.body.firstName;
    var lname = req.body.lastName;
    var email = req.body.email;
    const password = req.body.password;
    var address = req.body.address;
    var age = req.body.age;
    var gender = req.body.gender;
    var phone = req.body.phone;
  
    var sql_findEmail = "SELECT * FROM administrator WHERE email = ?";
    var sql_insert = "INSERT INTO administrator (club_id,fname,lname,email,pwd,address,age,gender,phone) VALUES (?,?,?,?,?,?,?,?,?)";
    async function hashPassword(password) {
      const salt = await genSalt(10);
      const hash = await _hash(password, salt);
      return hash;
    }
  
    hashPassword(password).then((adminPassword) => {
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
            con.query(sql_insert, [club_id, fname, lname, email, adminPassword, address, age, gender, phone], function (err, result) {
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
                console.log("Successfully created new Admin record!");
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
  
// POST on update for admin details 
export const updateAdmin = ( req, res) => {
try{
    async function hashPassword(password) {
    const salt = await genSalt(10);
    const hash = await _hash(password, salt);
    return hash;
    }

    const admin_id = req.query.admin_id;
    var club_id = req.body.clubId;
    var fname = req.body.firstName;
    var lname = req.body.lastName;
    var email = req.body.email;
    const password = req.body.password;
    var address = req.body.address;
    var age = req.body.age;
    var gender = req.body.gender;
    var phone = req.body.phone;

    const updateQuery = `UPDATE administrator SET
    club_id = ?,
    fname = ?,
    lname = ?,
    email = ?,
    pwd = ?,
    address = ?,
    age = ?,
    gender = ?,
    phone = ?
    WHERE admin_id = ?
    `;

    const getUserByIdQuery = 'SELECT * FROM administrator WHERE admin_id = ?';
    console.log("Before query");

    hashPassword(password).then((adminPassword) => {
    console.log("password: ", adminPassword);
    con.query(updateQuery, 
        [club_id,
        fname, 
        lname, 
        email, 
        adminPassword,  
        address, 
        age, 
        gender, 
        phone,
        admin_id
    ], (err, result1) => {
        if(err){
        res.status(500).json({
            message: 'Internal Server Error'
        })
        console.error(err);
        }
        else{
        con.query(getUserByIdQuery, [admin_id], (err, result2)=>{
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


//GET all admins
export const getAllAdmins = (req, res) => {
    try{
        const getAdminByQuery = `SELECT * FROM administrator`;
        con.query(getAdminByQuery, (err, result)=>{
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
            console.log("get all Admins");
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
  
//GET request on admin_id
export const getAdmin = (req, res) => {
    try{
        const adminId = req.params.adminId;
        const getAdminByIdQuery = `SELECT * FROM administrator WHERE admin_id = ?`;
        con.query(getAdminByIdQuery, [adminId], (err, result)=>{
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
            console.log("getAdmin with adminId: ",adminId);
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
  
//DELETE request on admin_id
export const deleteAdmin = (req, res) => {
    try{
        const adminId = req.params.adminId;
        const delAdminByIdQuery = `DELETE FROM administrator WHERE admin_id = ?`;
        con.query(delAdminByIdQuery, [adminId], (err, result)=>{
        if(err){
            console.error(err);
            sendInternalServerError(res);
        }
        else{
            sendCustomSuccess(res, result[0]);
            console.log("deleteAdmin with adminId: ",adminId);
            console.log(result);
        }
        });  
    }
    catch(err){
        console.error(err);
        sendInternalServerError(res);
    }
}