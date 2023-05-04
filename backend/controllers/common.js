import con from "../index.js";
import { createJWT, verifyToken } from "../services/userService.js";

export const sendInternalServerError = (res) => {
    console.log(res)
    res.status(500).json({
        success: false,
        message: 'Internal Server Error',
    });
}

export const sendCustomError = (res, statusCode, message) =>{
    res.status(statusCode).json({
        success: false,
        message,
    });
} 

export const sendCustomSuccess = (res, payload) =>{
    res.status(200).json({
        success: true,
        payload,
    });
} 

// POST on customer/admin/instructor sign in
export const signIn = (req, res) => {
    // console.log(req);
    const persona = req.query.persona;
    const email = req.body.email;
    const pwd = req.body.password;

    console.log(req.body);
    // var sql_findEmail = "SELECT * FROM customer where email = ? and pwd = ?";
    var sql_findEmail = "SELECT * FROM " + persona + " where email = ?";
    try{
      con.query(sql_findEmail, [email, pwd], (err, result) => {
        if(result && result.length>0){
          const accessToken = createJWT(email, result[0].userId, 3600);
          const tokenVerified = verifyToken(accessToken);
          if(tokenVerified){
            res.status(200).json({
              success:true,
              payload: {
                data: result, 
                token: accessToken,
              },
            })
            console.log("Login success");
          }
          else{
            res.status(401).json({
              success: false,
              message: ['Unauthorized User']
            });
          }
        }
        else {
          res.status(404).json({ errors: ['Could not find entity'] });
        }
      });
    }
    catch(err){
      res.status(500).json({
        success: false,
        message: err,
      })
      console.error(err);
    }
}


// GET on token validation
export const checkTokenValidation = (req, res) => {
    const { token } = req.params;
    const tokenVerified = verifyToken(token);
      if(tokenVerified){
        res.status(200).json({
              success: true,
              payload:{
                token,
              }
          });
      }
      else{
        res.status(401).json({
          success: false,
          message: 'Unauthorized User'
        });
      }
  }
