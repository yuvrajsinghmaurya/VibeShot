const multer = require('multer')
const path = require('path')

const storege = multer.diskStorage({
    destination:(req , file , cd)=>{
        if(file.mimetype.startsWith('video/')){
            cd(null , 'uploads/video');
        }else{
            cd(null ,'uploads/images');
        }
    },
    filename:(req , file , cd)=>{
        const uniqueName = Date.now() + '-' + file.originalname;
        cd(null , uniqueName);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('video/') || 
        file.mimetype.startsWith('image/')) {
        cb(null, true);   // ✅ allow
    } else {
        cb(new Error('Only video and image files allowed!'), false); // ❌ reject
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 100 * 1024 * 1024 }  // 100MB max
});

module.exports = upload;