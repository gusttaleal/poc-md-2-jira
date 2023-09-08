module.exports.CONSTANTS = {
    ANSI_RED_COLOR_ESCAPE_CODE: '\x1b[31m%s\x1b[0m',
    ANSI_YELLOW_COLOR_ESCAPE_CODE: '\x1b[33m%s\x1b[0m',
    TITLE_MARK: "## ",
    JIRA_MARK: '\*Jira:\*',
    CONTEXT_MARK: '\*Context:\*',
    ESTIMATE_MARK: '\*Estimate:\*',
};

module.exports.TASK_LABELS = {
    CONTROLLER: "controller",
    CONSUMER: "consumer",
    USE_CASE: "use case",
    ACTION: "action",
    REPOSITORY: "repository",
    PRODUCER: "producer",
};