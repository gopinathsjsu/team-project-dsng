
import con from "../index.js";
import pkg1 from 'bcryptjs';
const { compare, genSalt, hash: _hash } = pkg1;
import { createJWT, verifyToken } from "../services/userService.js";

export const signIn = (req, res) => {
    // const {email, pwd} = req.body;
    const email = req.body.email;
    const pwd = req.body.password;

    console.log(req.body);
    var sql_findEmail = "SELECT * FROM customer where email = ? and pwd = ?";
    try{
      con.query(sql_findEmail, [email, pwd], (err, result) => {
        if(result[0]){
          const { userId } = result[0];
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
    }
}  