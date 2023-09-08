exports.getAllTasksFromFileByIndexTasks = function (file, indexTasks) {
    let tasks = []
    for (i = 1; i < indexTasks.length; i++) {
        tasks.push(file.slice(indexTasks[i - 1], indexTasks[i]-1))
    }
    return tasks;
}