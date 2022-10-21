const homeController = require('express').Router()

homeController.get('/', (req, res) => {
    let view;
    if (req.user) {
        //user home page
        view = 'user-home';
    } else {
        //guest home page
        view = 'guest-home';
    }

    res.render(view, {
        title: 'Home Page',
    })
})


module.exports = homeController
