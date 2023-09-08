const { CONSTANTS } = require('../enums.js');

exports.throwErrorMessage = function (errorMessage) {
    console.log(CONSTANTS.ANSI_RED_COLOR_ESCAPE_CODE, `Error message: ${errorMessage}`);
}