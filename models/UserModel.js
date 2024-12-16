import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const User = db.define('petugas_ronda',{
    nama: DataTypes.STRING,
    tanggal: DataTypes.STRING,
    lokasi: DataTypes.STRING
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();