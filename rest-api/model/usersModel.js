const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = class Users {
    //get all users
    static async getUsers(callback){
        const data = await prisma.user.findMany();
        return(data);
    }
    //get one user
    static async getOneUser(id){
        const data = await prisma.user.findMany({
            where: {
              id: parseInt(id),
            },
          });
        return(data);
    }
    //add new user
    static async insertUser(data){
      let hash = bcrypt.hashSync(data.password, 10);
      return await prisma.user.create({
          data: {
            name: data.name,
            email: data.email,
            nickname: data.nickname,
            password: hash
          },
      })
    }
    //edit user
    static async editUser(data){
      let hash = bcrypt.hashSync(data.password, 10);
      return await prisma.user.update({
        where: {
          id: parseInt(data.id),
        },
          data: {
            name: data.name,
            email: data.email,
            nickname: data.nickname,
            password: hash
          },
      })
    }
    //delete user
    static async deleteUser(id){
      return await prisma.user.delete({
        where: {
          id: parseInt(id),
        }
      })
    }
}
