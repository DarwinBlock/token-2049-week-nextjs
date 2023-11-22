import mysql from "mysql2";

const connection = mysql.createConnection({
    host     : 'mysql-token-week-do-user-4462607-0.c.db.ondigitalocean.com',
    port: 25060,
    user     : 'doadmin',
    password : 'AVNS_gJRf_fT6gI9uLpr1kkC',
    database : 'defaultdb'
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