exports.convertLinkSyntax = function (string) {
    const regex = /\[([^\]]*)]\(([^)]*)\)/g;
    const replacement = '[$1|$2]';
    return string.replaceAll(regex, replacement);
}