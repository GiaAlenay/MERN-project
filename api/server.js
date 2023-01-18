//responsable de inicializar el servidor
require('dotenv').config()
const app=require('./app')
const connectDb=require('./db/mongodb')
const {appCon,db}=require('./config')


async function initApp(appconfig,dbConfig){
    try {
        connectDb(dbConfig)
        app.listen(appconfig.port, ()=>console.log(`Listen on ${appconfig.port}`))
        
    } catch (error) {
        console.log(error)
        process.exit(0)
    }
}
initApp(appCon,db)