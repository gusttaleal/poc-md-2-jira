exports.getFirstArgumentOfTerminalInputCommand = function () {
    return process.argv.slice(2)[0];
}