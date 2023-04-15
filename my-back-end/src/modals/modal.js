const dbConnections = require('../utilities/connection')


const modal = {}

modal.getUsers = async()=>{
    let userModal = await dbConnections.UsersConnection();
    let users = await userModal.find();
    return users
}

module.exports = modal