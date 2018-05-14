import mongoose from 'mongoose'
import config from '../config'

mongoose.Promise = global.Promise

const connection = mongoose.connect(config.DB_URL)

connection.then( db => {
    console.log('Successfully connected MongoDB')
    return db
}).catch( err => {
    if (err.message.code === 'ETIMEDOUT') {
        console.log('Attempting to re-establish database connection')
        mongoose.connect(config.DB_URL)
    } else {
        console.log('Error while attempting to connect to database')
    }  
})

// const connectToDb = async() => {
//     try {
//         await mongoose.connect(config.DB_URL)
//         mongoose.connect(config.DB_URL)
//     } catch(err) {
//         if (err.message.code === 'ETIMEDOUT') {
//             console.log('Attempting to re-establish database connection')
//             mongoose.connect(config.DB_URL)
//         } else {
//             console.log('Error while attempting to connect to database')
//         }  
//     }
// }

export default connection