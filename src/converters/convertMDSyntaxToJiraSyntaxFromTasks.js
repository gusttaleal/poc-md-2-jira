const { convertBoldSyntax } = require('./convertBoldSyntax.js');
const { convertCodeSyntax } = require('./convertCodeSyntax.js');
const { convertLinkSyntax } = require('./convertLinkSyntax.js');
const { convertSubListSyntax } = require('./convertSubListSyntax.js');
const { convertSecondSubListSyntax } = require('./convertSecondSubListSyntax.js');

exports.convertMDSyntaxToJiraSyntaxFromTasks = function (tasks) {
    let convertedTasks = []
    for (let task of tasks) {
        task = convertBoldSyntax(task);
        task = convertSubListSyntax(task);
        task = convertSecondSubListSyntax(task);        
        task = convertLinkSyntax(task);
        task = convertCodeSyntax(task);
        convertedTasks.push(task);
    }
    return convertedTasks;
}
