exports.getFileNameFromRelativeFilePath = function (relativeFilePath) {
    return relativeFilePath.split("/")[relativeFilePath.split("/").length - 1].split(".")[0]
}