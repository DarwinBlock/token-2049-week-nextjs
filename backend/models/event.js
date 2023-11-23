import mysql from "mysql2";

const connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    port: 25060,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
});

export const connectDB = () => {
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if (err) 
                reject(err.message);
            else
                resolve();
        });
    })
}

export const queryDB = (queryStr) => {
    return new Promise((resolve, reject) => {
        connection.query(queryStr, (err, res) => {
            if (err) 
                reject(err);
            resolve(res);
        })
    })
}

export const disconnectDB = () => {
    connection.end();
}