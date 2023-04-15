const dbModal = require('../modals/modal');

const services = {}

services.getUsers = async()=>{
    let getUsersInModal = await dbModal.getUsers();
    return getUsersInModal
}

module.exports = services