require('dotenv').config();
const axios = require('axios');

const { throwWarnMessage } = require('../launchers/throwWarnMessage.js');

exports.publishToJira = async function (payload, relativeFilePath) {
    try {
        let jiraKeys = []
        for (let data of payload) {
            if (data.jira != '') {
                const regex = /\[([^\]]*)\|([^)]*)\]/g;
                const replacement = '$1';
                const key = data.jira.replaceAll(regex, replacement);
                throwWarnMessage(`Task '${key}' already created on Jira`);
                continue;
            }

            const body = data.body;
            const url = process.env.URL;
            const headers = {
                'authorization': process.env.AUTHORIZATION,
                'app_token': process.env.APP_TOKEN,
                'content-type': 'application/json'
            };

            const response = await axios.post(url, body, { headers });
            jiraKeys.push(response.data.key);
        }
        return { jiraKeys, payload, relativeFilePath };

    } catch (error) {
        throw error;
    }
}