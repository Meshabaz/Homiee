const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routing/routes')
const connection = require('./utilities/connection')
const data = require('./modals/data')

const setUpUsers = async (req,res,next)=>{
    let UserConnection = await connection.UsersConnection();
    // let isUserPre = await UserConnection.find();
    // if (isUserPre.length>0) {
    //     console.log('User connection already created!');
    //     next()
    // } else {
        let insertUsers = await UserConnection.create(data.users)
        console.log(insertUsers);
        next()
    // }
}

app.use(setUpUsers)


app.use('/',routes)


app.listen(1612,()=>console.log(`Back-end is live on port 1612`))