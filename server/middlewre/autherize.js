const {dbConnect} = require('../database')

const autherize = (req,res,next)=>{
    try {

        const {userName,password}=req.body;
        console.log("userName: "+userName+" password "+password);
        if((userName.length>0)&&(password.length>0)){
            console.log("in the length");
            const connection = dbConnect('myDB')
            connection.connect((err)=>{
                if(err) throw err;
                connection.query(`SELECT password FROM utilisateurs WHERE userName = '${userName}'`,(err,result,feilds)=>{
                    if(err) throw err
                    if(result[0].password==undefined){
                        res.status(400).json({succes:false,message:"the password is uncorrect"})
                    }else{
                    console.log(result[0].password);
                    if(result[0].password===password){
                        req.session.user={
                            userName:userName
                        }
                        next()
                    }else{
                        res.status(400).json({succes:false,message:"the password is uncorrect"})
                    }
                    connection.end()
                }

                })
            })
        }else{
            res.status(400).json({succes:false,message:"the data is empty"})
        }
    } catch (error) {
        throw error
    }
}

module.exports ={autherize}
