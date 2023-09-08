exports.convertSubListSyntax = function (string) {
    return string.replaceAll("\ \ \-", "\-\-");
}