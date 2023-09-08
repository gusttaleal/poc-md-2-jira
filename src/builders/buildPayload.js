const { CONSTANTS } = require('../enums.js');

exports.buildPayload = function (parentKey, tasks) {
    let payload = []
    for (index in tasks) {
        const projectKey = parentKey.split("-")[0];

        const summary = tasks[index].slice(tasks[index].indexOf(CONSTANTS.TITLE_MARK) + CONSTANTS.TITLE_MARK.length).split("\n")[0];

        const description = tasks[index].slice(tasks[index].indexOf(CONSTANTS.CONTEXT_MARK), tasks[index].length - 1)

        const estimate = tasks[index].slice(tasks[index].indexOf(CONSTANTS.ESTIMATE_MARK)).split("\n")[1];

        const jira = tasks[index].slice(tasks[index].indexOf(CONSTANTS.JIRA_MARK)).split("\n")[1]

        const issueType = summary.toLowerCase().includes("deploy") || summary.toLowerCase().includes("teste") ? "Sub-Test" : "Sub-Imp";


        payload.push({
            jira,
            "body": {
                "fields": {
                    "project": {
                        "key": projectKey
                    },
                    "issuetype": {
                        "name": issueType
                    },
                    "summary": summary,
                    "description": description,
                    "timetracking": {
                        "originalEstimate": estimate,
                        "remainingEstimate": estimate
                    },
                    "labels": [],
                    "parent": {
                        "key": parentKey
                    }
                }
            }

        })
    }
    return payload;
}