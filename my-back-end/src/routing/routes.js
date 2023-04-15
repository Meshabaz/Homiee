const express = require('express')
const routes = express.Router()
const services = require('../services/service')

routes.get("/users", async (req, res, next) => {

  let users = await services.getUsers()
  res.send({message:users});
});

module.exports = routes