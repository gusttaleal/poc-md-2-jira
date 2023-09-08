exports.findAllIndexTasksFromFile = function (file) {
    const targetTitleMark = "## ";
    const regex = new RegExp(targetTitleMark, "g");
    const indexTasks = [];
    let match;
    while ((match = regex.exec(file)) !== null) {
        indexTasks.push(match.index);
    }
    indexTasks.push(file.length);
    return indexTasks;
}