var express = require('express');
var router = express.Router();
var uniqid = require('uniqid');
var fs = require('fs');

var request = require('sync-request');

var cloudinary = require('cloudinary').v2;
cloudinary.config({ 
  cloud_name: '', 
  api_key: '', 
  api_secret: '' 
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', async function(req, res, next) {
  
  var pictureName = './tmp/'+uniqid()+'.jpg';
  

  var resultCopy = await req.files.avatar.mv(pictureName);
  if(!resultCopy) {
    var resultCloudinary = await cloudinary.uploader.upload(pictureName);
    
    var options = {
      json: {
        apiKey: "",
        image: resultCloudinary.url,
      },
    };

    var resultDetectionRaw = await request('POST', 'https://lacapsule-faceapi.herokuapp.com/api/detect', options); 
   
    var resultDetection = await resultDetectionRaw.body;
    resultDetection = await JSON.parse(resultDetection);

    res.json({resultCloudinary, resultDetection});
  } else {
    res.json({error: resultCopy});
  }

  fs.unlinkSync(pictureName);
  
});



module.exports = router;
