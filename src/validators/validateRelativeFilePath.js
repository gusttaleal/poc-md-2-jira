exports.validateRelativeFilePath = function (relativeFilePath) {
    if (relativeFilePath === undefined)
        throw Error("To run the application the relative file path need to be passed as argument of start command.")
}