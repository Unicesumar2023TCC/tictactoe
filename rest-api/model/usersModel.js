const db = require('../database/dbConect');

module.exports = class Users {
    //get all users
    static getUsers(callback){
        return db.query('SELECT * from users', callback);
    }
    //get one user
    static getOneUser(id, callback){
        return db.query('SELECT * from users where id = ?', [id], callback);
    }
    //add new user
    static insertUser(data, callback){
        return db.query('INSERT INTO users (name, email, nickname, password) VALUES (?, ?, ?, ?)', [data.name, data.email, data.nickname, data.password], callback);
    }
    //edit user
    static editUser(data, callback){
        return db.query('UPDATE users SET name = ?, email = ?, nickname = ?, password = ? WHERE id = ?', [data.name, data.email, data.nickname, data.password, data.id], callback);
    }
    //delete user
    static deleteUser(id, callback){
        return db.query('UPDATE user SET stats = 'DISABLED' where id = ?', [id], callback);
    }
}
