const mongoose= require ("mongoose")
const dotenv = require ("dotenv")
dotenv.config()


const connection = mongoose.connect(process.env.MONGO_URL)

const isConnected = () => {
    return mongoose.connection.readyState === 1;
  }

module.exports={connection,isConnected}