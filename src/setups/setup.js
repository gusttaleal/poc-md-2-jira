const fs = require('fs');

const { buildPayload } = require('../builders/buildPayload.js');
const { convertMDSyntaxToJiraSyntaxFromTasks } = require('../converters/convertMDSyntaxToJiraSyntaxFromTasks.js');
const { findAllIndexTasksFromFile } = require('../finders/findAllIndexTasksFromFile.js');
const { getAllTasksFromFileByIndexTasks } = require('../getters/getAllTasksFromFileByIndexTasks.js');
const { getFileNameFromRelativeFilePath } = require('../getters/getFileNameFromRelativeFilePath.js');
const { validateRelativeFilePath } = require('../validators/validateRelativeFilePath.js');

exports.setup = function (relativeFilePath) {
    try {
        validateRelativeFilePath(relativeFilePath);

        var file = fs.readFileSync(relativeFilePath, 'utf8');
        const indexTasks = findAllIndexTasksFromFile(file);

        let tasks = [];
        tasks = getAllTasksFromFileByIndexTasks(file, indexTasks);
        tasks = convertMDSyntaxToJiraSyntaxFromTasks(tasks);

        const parentKey = getFileNameFromRelativeFilePath(relativeFilePath);
        return buildPayload(parentKey, tasks);

    } catch (error) {
        throw error;
    }
}