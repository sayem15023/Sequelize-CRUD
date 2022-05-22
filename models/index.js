const dbConfig = require('../config/dbConfig.js');
const {Sequelize,DataTypes, Model} = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER, 
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);
sequelize.authenticate()
.then(()=>{
  console.log('connected')

})
.catch(err =>{
  console.log('error'+ err)
})
const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.products = require('./productModel')(sequelize,DataTypes)
db.reviews = require('./reviewModel')(sequelize,DataTypes)
db.productXtraInfos = require('./productXtraInfoModel')(sequelize,DataTypes)
db.sequelize.sync({force: false})
.then(()=>{ 
  console.log('yes re-sync')
})
module.exports = db