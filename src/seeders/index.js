const mongoose = require('mongoose')
require('dotenv').config()

const LOCALHOST = process.env.HOST;
const DB_PORT = process.env.PORT;
const DATABASE = process.env.DATABASE;

const seed = require('./rolesSeeder')
if(process.env.ENVIRONMENT == 'development')
{
    mongoose.connect(`mongodb://${LOCALHOST}:${DB_PORT}/${DATABASE}`);
}
else{
    console.log(process.env.MONGODB_CLOUD_CON)
    mongoose.connect(process.env.MONGODB_CLOUD_CON);
}
// mongoose.connect(`mongodb://${LOCALHOST}:${DB_PORT}/${DATABASE}`);
const db = mongoose.connection;
db.on('error',(e)=>{
    console.error(e)
})

db.once('open', async ()=>{
    console.log('Connected to DB successfully')
    console.log('Seeding Started')
    await seed()
    console.log('Data seeded')
    db.close()
})