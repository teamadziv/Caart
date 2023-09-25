import { unstyled, shouldDisplayColors } from '../../../../../public/node/output.js';
import { Text } from 'ink';
import React from 'react';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const gitDiff = require('git-diff');
/**
 * `GitDiff` displays a git diff between two strings.
 * @example
 *   \@\@ -1,2 +1,2 \@\@
 * - deleted line
 *   unchanged line
 * + added line
 */
const GitDiff = ({ gitDiff: { baselineContent, updatedContent } }) => {
    const rawDiffContents = gitDiff(baselineContent, updatedContent, {
        color: shouldDisplayColors(),
        // Show minimal context to accommodate small terminals.
        flags: '--unified=1 --inter-hunk-context=1',
        noHeaders: true,
    });
    if (!rawDiffContents) {
        return React.createElement(Text, null, "No changes.");
    }
    const diffContents = rawDiffContents
        .split('\n')
        .map((line, index) => {
        const unstyledLine = unstyled(line);
        if (unstyledLine === '\\ No newline at end of file') {
            return undefined;
        }
        else if (unstyledLine.match(/^@@/)) {
            const addNewline = index !== 0;
            return line.replace('@@', `${addNewline ? '\n' : ''}  @@`);
        }
        else {
            return line.replace(/([+\- ])/, (match) => {
                return `${match} `;
            });
        }
    })
        .filter((line) => line !== undefined)
        .join('\n')
        .trimEnd();
    return React.createElement(Text, null, diffContents);
};
export { GitDiff };
//# sourceMappingURL=GitDiff.js.map