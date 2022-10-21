const { getAllByDate, getReacent } = require('../services/courseService');

const homeController = require('express').Router()

homeController.get('/', async (req, res) => {
    let view;
    let courses = []
    if (req.user) {
        //user home page
        view = 'user-home';
        courses = await getAllByDate()
    } else {
        //guest home page
        view = 'guest-home';
        courses = await getReacent()
    }

    res.render(view, {
        title: 'Home Page',
        courses
    })
})


module.exports = homeController
