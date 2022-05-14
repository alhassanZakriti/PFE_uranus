const express = require('express')
const router = express.Router()
const {dbConnect} = require('../database')
const {userNameIsUnique} = require('../_helpers/isUnique')
const {autherize} = require('../middlewre/autherize')
const {restrict} = require('../middlewre/restrict')


router.post('/signin',(req,res)=>{
    try {
        console.log("sign in section\n")
        const {firstName,lastName,userName,role,password} = req.body
        console.log("request is hapening ");
        console.log(req.session)
        console.log("thes");
        if(firstName.length==0||lastName.leangth==0||userName.leangth==0||password.leangth==0){
            res.status(400).json({succese : false})
            return
        }else{
            const connection = dbConnect('myDB')
            connection.connect((err)=>{
                if(err) throw err;
                userNameIsUnique(connection,userName).then(()=>{
                    connection.query(`INSERT INTO utilisateurs (firstName, lastName, userName,student, password) VALUES 
                    ('${firstName}', '${lastName}', '${userName}', '${(role==true)?(1):(0)}', '${password}')`,(err,result,feilds)=>{
                    if(err) throw err
                    res.status(200).json({succes : true})
                    connection.end()
                    
                })
                }).catch(()=>{
                    res.status(400).json({succes:true,message:"The userName is not unique"})
                    connection.end()

                })
                
            })
        }
    } catch (error) {
        console.log(error)
    }
    
})


router.post("/login",autherize,(req,res)=>{
    res.status(200).json({succes:true})
})

router.post("/checklogin",restrict,(req,res)=>{
    res.status(200).json({
        succes:true,
        userName:req.session.user.userName
    })
})


module.exports = router