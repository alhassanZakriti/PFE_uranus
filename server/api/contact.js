const express = require('express')
const router = express.Router()
const {restrict} = require('../middlewre/restrict')
const {dbConnect} = require('../database')
const {getIdByUserName,getInfoByIDs} = require('../_helpers/getters')
const { json } = require('express')


router.get("/searchcontact",restrict,(req,res)=>{
    try {
        console.log(req.query);
        let serched=req.query.serached;
        const connection=dbConnect('myDB')
        connection.connect((err)=>{
            if(err) throw err
            connection.query(`SELECT userID, userName FROM utilisateurs WHERE userName LIKE '${serched}%'`,(err,result)=>{
                if(err) throw err
                res.status(200).json({
                    succes:true,
                    result:result
                })
            })
        })
    } catch (error) {
        
    }
})



router.post("/addcontact",restrict,(req,res)=>{
    let contact1UserName=req.session.user.userName;
    let {contact2UserName}=req.body;
    console.log(contact2UserName);
    try {
        const connection = dbConnect('myDB')
        connection.connect((err)=>{
            if(err) throw err
            getIdByUserName(connection,contact1UserName).then((userID1)=>{
                getIdByUserName(connection,contact2UserName).then((userID2)=>{
                    connection.query(`INSERT INTO contacts (contact1UserID ,contact2UserID) VALUES 
                        ('${userID1}', '${userID2}')`,(err,result)=>{
                            if(err) throw err
                            res.status(200).json({succes : true})
                        })
                }).catch(()=>{
                    res.status(400).json({succes : false,message:"userID not found"})
                })
            }).catch(()=>{
                res.status(400).json({succes : false,message:"userID not found"})
            })
        })
    } catch (error) {
        
    }
})



router.get("/allcontacts",restrict,(req,res)=>{
    let userName = req.session.user.userName
    const connection = dbConnect('myDB')
    connection.connect((err)=>{
        if(err) throw err
        getIdByUserName(connection,userName).then((userID)=>{
            connection.query(`SELECT * FROM contacts WHERE contact1UserID = '${userID}' OR contact2UserID = '${userID}'`,(err,result)=>{
                if(err) throw err
                console.log(result);
                getInfoByIDs(connection,userID,result,(newResult)=>{
                    console.log(newResult);
                    res.status(200).json({
                        succes:true,
                        result:newResult
                    })
                    connection.end()
                })
                
            })
        })
        
    })
})

const getContactIdByIDs = (connection,user1ID,user2ID,callback)=>{
    connection.query(`SELECT contactID FROM contacts WHERE (contact1UserID = '${user1ID}' AND contact2UserID = '${user2ID}') OR 
    (contact2UserID = '${user1ID}' AND contact1UserID = '${user2ID}')`,(err,result)=>{
        if(err) throw err
        callback(result[0].contactID)
    })
}

router.post("/sendmessage",restrict,(req,res)=>{
    let {to,message}=req.body
    let userName = req.session.user.userName
    let date = Date('YYYY-MM-DD HH:mm:ss')
    const connection = dbConnect('myDB')
    if((!to)||(!message)){
        return res.status(400).json({
            succes:false,
            message:"There's no content"
        })
    }
    connection.connect((err)=>{
        if(err) throw err
        getIdByUserName(connection,to).then((usedr1ID)=>{
            getIdByUserName(connection,userName).then((user2ID)=>{
                getContactIdByIDs(connection,usedr1ID,user2ID,(contactid)=>{
                    console.log(contactid);
                    connection.query(`INSERT INTO messages (contactID ,message ,senderID ,timeSent) VALUES
                    ('${contactid}','${message}' ,'${user2ID}', '${'2020-11-11 11:11:11'}')`,(err,resp)=>{
                        if(err) throw err
                        res.status(200).json({succes:true})
                        connection.end()
                    })
                })
            }).catch((err)=>{
                console.log(err);
            })
        }).catch((err)=>{
            console.log(err);
        })
    })
})

const checkSender = (userID,resultList,callback)=>{

    let i=0,j=0;
    let iterator=resultList[i]
    let newArray=[]
    while(iterator!=undefined){
        if(iterator.senderID==userID){
            newArray.push({
                messageID: iterator.messageID,
                contactID: iterator.contactID,
                message: iterator.message,
                sender:true,
                timeSent:iterator.timeSent
            })
            i++;
        }
        if(iterator.senderID!=userID){
            newArray.push({
                messageID: iterator.messageID,
                contactID: iterator.contactID,
                message: iterator.message,
                sender:false,
                timeSent:iterator.timeSent
            })
            i++;
        }
        iterator=resultList[i]
    }
    callback(newArray)

}

router.post("/getallmessages",restrict,(req,res)=>{
    let {withUser}=req.body
    const connection = dbConnect('myDB')
    let userName = req.session.user.userName
    console.log(userName);
    console.log(withUser);
    if(!(withUser&&userName)){
        return res.status(400).json({
            succes:false,
            message:"There's no content"
        })
    }

    connection.connect((err)=>{
        if(err) throw err
        getIdByUserName(connection,withUser).then((usedr1ID)=>{
            getIdByUserName(connection,userName).then((user2ID)=>{
                getContactIdByIDs(connection,usedr1ID,user2ID,(contactid)=>{
                    console.log(contactid);
                    connection.query(`SELECT * FROM messages WHERE contactID = '${contactid}'`,(err,result)=>{
                        console.log(result);
                        checkSender(user2ID,result,(resp)=>{
                            res.status(200).json({
                                succes:true,
                                result:resp
                            })
                        })
                        
                    })
                })
            }).catch((err)=>{
                console.log(err);
            })
        }).catch((err)=>{
            console.log(err);
        })
    })

})

module.exports = router
