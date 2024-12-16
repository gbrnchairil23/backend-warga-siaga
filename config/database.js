import {Sequelize} from "sequelize";

const db = new Sequelize('backend_warga_siaga','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;



/*

// db.js
import mysql from 'mysql2';


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '', 
    database: 'backend_warga_siaga' 
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to the database.');
});

export default db;

*/

/* import mysql from 'mysql2/promise'

const database = mysql.createPool( {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'backend_warga_siaga',
    waitForConnections: true,
    connectionLimit: 10,
    connectTimeout: 10000,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
  } )

  database
  .getConnection()
      .then(() => console.log(`Connected to the database`))
      .catch((err) => console.error(`Connection to database FAILED! ${err}`));

export default database
*/