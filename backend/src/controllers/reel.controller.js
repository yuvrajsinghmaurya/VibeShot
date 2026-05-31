const {
    createReel: createReelService,
    getAllReels: getAllReelsService
} = require('../services/reel.service');


const createReel = async (req , res )=>{
    try{
        const userId = req.user.userId;
        const reel = await createReelService(
            userId,
            req.body
        )
        res.status(201).json({
            success : true,
            message:'reel uploaded successfully',
            data : reel
            

        });
        
    }catch(error){
        res.status(500).json({
            success : false, 
            message : error.message
        })
    }
}


// now get all reels
const getAllReels= async(req , res )=>{
    try{
        const reels = await getAllReelsService();
        res.status(200).json({
            success:true,
            data:reels
        });
    }catch(error){
                res.status(500).json({
            success: false,
            message: error.message
        });

    }
}

module.exports={
    createReel,
    getAllReels
}