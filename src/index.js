const { getFirstArgumentOfTerminalInputCommand } = require('./getters/getFirstArgumentOfTerminalInputCommand.js');
const { publishToJira } = require('./publishers/publishToJira.js');
const { setup } = require('./setups/setup.js');
const { updateFileWithJiraKeys } = require('./updaters/updateFileWithJiraKeys.js');
const { throwErrorMessage } = require('./launchers/throwErrorMessage.js');

function init() {
    try {
        const relativeFilePath = getFirstArgumentOfTerminalInputCommand();
        const payload = setup(relativeFilePath);
        publishToJira(payload, relativeFilePath).then((response) => updateFileWithJiraKeys(response));
    } catch (error) {
        throwErrorMessage(error.message)
    }
}
init();