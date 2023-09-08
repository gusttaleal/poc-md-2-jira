require('dotenv').config();
const axios = require('axios');

exports.getFromJira = async function (jiraKey) {
    try {
        const url = `${process.env.URL}/${jiraKey}`;
        const headers = {
            'authorization': process.env.AUTHORIZATION,
            'app_token': process.env.APP_TOKEN,
            'content-type': 'application/json'
        };

        await axios.get(url, { headers });
    } catch (error) {
        throwErrorMessage(error.message)
    }
}