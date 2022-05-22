module.exports = (sequelize,DataTypes)=>{
    const Review = sequelize.define('review',{
        
        price:{
            type:DataTypes.INTEGER
        },
        description:{
            type:DataTypes.TEXT
        }
        
    })
    return Review
}