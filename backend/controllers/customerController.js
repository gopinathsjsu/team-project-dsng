
import con from "../index.js";
import pkg1 from 'bcryptjs';
const { compare, genSalt, hash: _hash } = pkg1;
import { createJWT, verifyToken } from "../services/userService.js";
import { sendCustomSuccess, sendInternalServerError } from "./common.js";

// POST on customer registration
export const signUp = async(req, res) => {
  var fname = req.body.firstName;
  var lname = req.body.lastName;
  var email = req.body.email;
  const password = req.body.password;
  var address = req.body.address;
  var age = req.body.age;
  var gender = req.body.gender;
  var phone = req.body.phone;
  var start_date = req.body.start_date;
  var end_date = req.body.end_date;

  var sql_findEmail = "SELECT * FROM customer WHERE email = ?";
  var sql_insert = "INSERT INTO customer (fname,lname,email,pwd,address,age,gender,phone,start_date,end_date) VALUES (?,?,?,?,?,?,?,?,?,?)";
  async function hashPassword(password) {
    const salt = await genSalt(10);
    const hash = await _hash(password, salt);
    return hash;
  }

  hashPassword(password).then((customerPassword) => {
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
          con.query(sql_insert, [fname, lname, email, customerPassword, address, age, gender, phone, start_date, end_date], function (err, result) {
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
              console.log("Successfully created new customer record!");
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

// POST on update for customer details 
export const updateCustomer = ( req, res) => {
  try{
    async function hashPassword(password) {
      const salt = await genSalt(10);
      const hash = await _hash(password, salt);
      return hash;
    }

    const customer_id = req.query.customer_id;
    var fname = req.body.firstName;
    var lname = req.body.lastName;
    var email = req.body.email;
    const password = req.body.password;
    var address = req.body.address;
    var age = req.body.age;
    var gender = req.body.gender;
    var phone = req.body.phone;
    var start_date = req.body.start_date;
    var end_date = req.body.end_date;

    const updateQuery = `UPDATE customer SET
      fname = ?,
      lname = ?,
      email = ?,
      pwd = ?,
      address = ?,
      age = ?,
      gender = ?,
      phone = ?,
      start_date = ?,
      end_date = ? 
      WHERE customer_id = ?
    `;

    const getUserByIdQuery = 'SELECT * FROM customer WHERE customer_id = ?';

    hashPassword(password).then((customerPassword) => {
      con.query(updateQuery, 
        [fname, 
        lname, 
        email, 
        customerPassword,  
        address, 
        age, 
        gender, 
        phone, 
        start_date,
        end_date,
        customer_id
      ], (err, result1) => {
        if(err){
          res.status(500).json({
            message: 'Internal Server Error'
          })
          console.error(err);
        }
        else{
          con.query(getUserByIdQuery, [customer_id], (err, result2)=>{
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

//GET all customers
export const getAllCustomers = (req, res) => {
  try{
    const getUserByIdQuery = `SELECT * FROM customer`;
    con.query(getUserByIdQuery, (err, result)=>{
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
        console.log("get all Customers");
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

//GET request on customer_id
export const getCustomer = (req, res) => {
  try{
    const customerId = req.params.customerId;
    const getUserByIdQuery = `SELECT * FROM customer WHERE customer_id = ?`;
    con.query(getUserByIdQuery, [customerId], (err, result)=>{
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
        console.log("getCustomer with customerId: ",customerId);
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

//DELETE request on customer_id
export const deleteCustomer = (req, res) => {
  try{
    const customerId = req.params.customerId;
    const getUserByIdQuery = `DELETE FROM customer WHERE customer_id = ?`;
    con.query(getUserByIdQuery, [customerId], (err, result)=>{
      if(err){
        console.error(err);
        sendInternalServerError(res);
      }
      else{
        sendCustomSuccess(res, result[0]);
        console.log("deleteCustomer with customerId: ",customerId);
        console.log(result);
      }
    });  
  }
  catch(err){
    console.error(err);
    sendInternalServerError(res);
  }
}