//THIS FILE STAYS BASICALLY THE SAME
import mongoose from 'mongoose'

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connection.on('error', err => {
    console.error('[DATABASE ERROR]:', err)
})

export default class DbContext {
    static async connect() {
        try {
            let dbName = process.env.DBNAME;
            let connectionString = process.env.CONNECTION_STRING + dbName + "?retryWrites=true&w=majority";
            let status = await mongoose.connect(connectionString) //TODO Make sure you set this in .env
            console.log("CONNECTED")
            return status
        } catch (e) {
            console.error(e)
        }
    }
}