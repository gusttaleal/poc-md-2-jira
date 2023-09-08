exports.convertCodeSyntax = function (string) {
    const regex1 = /```([a-zA-Z]+)/g;
    const regex2 = /```/g;
    const regex3 = /\n  \{code\}/g;
    const replacement1 = '{code:$1}';
    const replacement2 = '{code}';
    const replacement3 = '{code}';

    return string
        .replaceAll(regex1, replacement1)
        .replaceAll(regex2, replacement2)
        .replaceAll(regex3, replacement3);
}