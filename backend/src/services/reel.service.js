const {createReelRepository, getAllReelsRepository} = require('../reposistories/reel.repository')

//  create post or reels
const createReel = async (userId , reelData)=>{
    const reel = await createReelRepository({
        ...reelData,
        user_Id : userId
    });
    return reel
};

//  get all the reels
const getAllReels = async ()=>{
    return await getAllReelsRepository();

}

module.exports ={
    createReel,
    getAllReels
};