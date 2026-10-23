const { sendErrorResponse, sendResponse } = require('../utils/response')

const getUser = (req, res, next) => {
    try {
        const user = req.params.id
        if (user > 10) {
            let error = new Error('user not found')
            error.statusCode = 404

            throw error;
        }

        return sendResponse(res, user, 200)
    } catch (err) {
        return sendErrorResponse(res, err)

    }

}

const createUser = (req, res, next) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            let error = new Error('name and email are required')
            error.statusCode = 400;

            throw error;
        }

        const user = { id: 1, name, email }

        return sendResponse(res, user, 201)

    } catch (err) {
        return sendErrorResponse(res, err)
    }

}


module.exports = {
    getUser,
    createUser,
}

