module.exports = (sequelize,DataTypes)=>{
    const ProductExtraInfo = sequelize.define('productExtraInfo',{
        color:{
            type: DataTypes.STRING
        },
        inStock:{
            type: DataTypes.BOOLEAN
        }
        
    })
    return ProductExtraInfo
}