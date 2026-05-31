const prisma = require('../config/prisma')

//  crrate any post or reels
const createReelRepository= async (reelData)=>{
    const reel = await prisma.reel.create({
        data : reelData
    })
    return reel
}

//  show the post on UI 

const getAllReelsRepository = async()=>{
    const reels = await prisma.reel.findMany({
        orderBy:{
            created_at:'desc'
        }
    })
    return reels;
}


module.exports={
    createReelRepository,
    getAllReelsRepository
}