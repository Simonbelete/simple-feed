import mongoose from 'mongoose'

export default async (): Promise<any> => {
    const dburl: string = process.env.DATABASE_URL || '';
    const connection = await mongoose.connect(dburl, {useNewUrlParser: true, useUnifiedTopology: true});
    return connection.connection.db;
}