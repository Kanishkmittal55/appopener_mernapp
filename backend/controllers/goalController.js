const asyncHandler = require('express-async-handler')


// @ desc - Get goals (right now it is getting all the goals but when we add user authentication it will only get a specific user goal
// @route - GET/api/goals
// @access - Private after we add authentication
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get new goals'})
})
// @ desc - Set goal (right now it is getting all the goals but when we add user authentication it will only get a specific user goal
// @route - POST /api/goals - i.e. you will need to make a POST request
// @access - Private after we add authentication
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Set goals'})
})
// @ desc - Update goal (right now it is getting all the goals but when we add user authentication it will only get a specific user goal
// @route - PUT/api/goals/:id (How can you update everything, you can make an update at a specific entry that is why /:id)
// @access - Private after we add authentication
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}`})
})
// @ desc - Delete goals (right now it is getting all the goals but when we add user authentication it will only get a specific user goal
// @route - DELETE/api/goals/:id (How can you update everything, you can make an update at a specific entry that is why /:id)
// @access - Private after we add authentication
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}`})
})


// Now to use this we use module.exports

module.exports = {
    getGoals, setGoal, updateGoal , deleteGoal
}