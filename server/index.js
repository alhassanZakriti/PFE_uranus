const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const mysqlstore = require('express-mysql-session')
const cors = require('cors')
const session = require('express-session');
const api = require('./api/api')
const uploadFile = require('./api/uploadfile')
const fileupload = require("express-fileupload");
const contact = require("./api/contact")

const corsOptions = {
    credentials: true,
    origin: 'http://localhost:3000',
    sameSite: 'None',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    
}

const options ={
    connectionLimit: 10,
    password: '',
    user: "root",
    database: "sessionDB",
    host: process.env.DB_HOST,
    port:3306,
    createDatabaseTable: true
    
}

const sessionStore = new mysqlstore(options)

const sessionConfig = {
    name: "UranusSessionID",
    secret:"UranusSessionIDHH",
    store: sessionStore,
    cookie: {
        maxAge: 1000*60*60,
        secure: false, // for production set to true
        httpOnly :false,
    },
    resave: false,
    saveUninitialized: true
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session(sessionConfig));
app.use(cookieParser())
//login stuff
app.use('/api',api)

//interacte with users
app.use("/contact",contact)

app.use(fileupload())
app.use('/uploadfile',uploadFile)


app.get("/j",(req,res)=>{
    res.json({succes:true})
})

app.listen(3001,()=>{
    console.log("the server is runing on \port 3001");
})