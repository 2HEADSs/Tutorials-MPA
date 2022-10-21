const Course = require("../models/Course");


async function getAllByDate() {
    // sort is automaticly , createdAt:1 - ascending(1,2,3....)
    return Course.find({}).sort({ createdAt: 1 }).lean()
}

async function createCourse(course) {
    return Course.create(course);
}

module.exports = {
    getAllByDate,
    createCourse
}