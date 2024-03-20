import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;

        connection.on(`connected`, () => {

        })
        connection.on(`error`, (err) => {
            console.log(
                `Mongo db connection error. Please make sure Mongo is running` + err
            );
            process.exit();
        })
    } catch (error) {
        console.log(`something went wrong`)
        console.log(error)
    }
}