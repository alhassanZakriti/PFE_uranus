const express = require('express')
const router = express.Router()
const {v4:uuidv4} = require('uuid')

router.post("/upload", (req, res) => {
    console.log("in upload file");
    const newpath = __dirname + "/files/";
  
    const file = req.files.file;
  
    const filename = file.name;

    file.mv(`${newpath}${uuidv4()}${filename}`, (err) => {
  
      if (err) {
  
        res.status(500).send({ message: "File upload failed", code: 200 });
  
      }else{
        res.status(200).send({ message: "File Uploaded", code: 200 });

      }
  
  
    });
  
});

module.exports = router
