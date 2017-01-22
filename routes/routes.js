var Localexpress = require( 'express' );
var router = Localexpress.Router();
var controller = require('../controllers/controller');
var logger = require('../common/logger');
var fs = require("fs");
router.get( '/', controller.returnHome );

var multer = require("multer"); 
var upload = multer({ dest: 'uploads/' });

router.post('/get-file-size',upload.single('file'),function(req,res){
    fs.unlink(req.file.path,function(err){
        if(err){
            res.status( 501 );
            res.json({status: "Server error while removing file."})
            res.end();
            return;
        } else {
            logger.Debug("File deleted.");
        }
    });
    res.json({fileSize: req.file.size})
});

router.get( '/test', controller.testRoute );

// Any unknown route will return a 404 (TODO: render 404 dedicated page)
router.get( '*' , function( req, res ) {
  res.status( 404 );
  res.end();
});

module.exports = router;
