const express = require('express');
const cors  = require('cors');
const { user } = require('./api');
// const { CreateChannel } = require('./utils')



module.exports = async (app, channel) => {

    app.use(express.json());
    app.use(cors());
    app.use(express.static(__dirname + '/public'))

  
    //api
    // appEvents(app);

    // const channel = await CreateChannel()

    
    user(app, channel );
    // error handling
    
}
