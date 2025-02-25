module.exports = {
    pattern: [
        '^(release)',
        '^(build|ci|chore|docs|fix|perf|refactor|revert|style|test|feat)(/[a-z_]+)*/([A-Z0-9]+-\\d+-)[a-z0-9_]+$'
    ].join('|'),
    errorMsg: 'Branch name is not allowed. Use name according to regex pattern. Ex. "feat/JIRATICKET-63-menu_ui"'
};
