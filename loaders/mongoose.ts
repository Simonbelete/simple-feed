import mongoose from 'mongoose'

export default async (): Promise<any> => {
    const dburl: string = process.env.DATABASE_URL || '';
    try{
        const connection = await mongoose.connect(dburl, {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            //serverSelectionTimeoutMS: 100, // How many seconds wait after failer
            //user: "simple_feed_user",
            //pass: "simple_feed_user_password"
        });
        console.log('Connection state ' + mongoose.connection.readyState);
        return connection.connection.db;
    } catch(error){
        console.log(error);
        // Close Server
        //process.exit();
    }
}