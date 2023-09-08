const fs = require('fs');
require('dotenv').config();

exports.updateFileWithJiraKeys = function ({ jiraKeys, payload, relativeFilePath }) {
    try {
        let content = fs.readFileSync(relativeFilePath, 'utf8');
        for (index in payload) {
            const targetChar = "\*\*Jira:\*\*\n\n";
            content = content.replace(targetChar, `**Jira:**\n[${jiraKeys[index]}](${process.env.JIRA_URL}${jiraKeys[index]})\n\n`);
            fs.writeFileSync(relativeFilePath, content, 'utf-8');
        }
    } catch (error) {
        throw error;
    }
}