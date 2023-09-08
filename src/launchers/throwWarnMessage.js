const { CONSTANTS } = require('../enums.js');

exports.throwWarnMessage = function (errorMessage) {
    console.log(CONSTANTS.ANSI_YELLOW_COLOR_ESCAPE_CODE, `Warn message: ${errorMessage}`);
}