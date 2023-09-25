import { FunctionComponent } from 'react';
export interface GitDiffProps {
    gitDiff: {
        baselineContent: string;
        updatedContent: string;
    };
}
/**
 * `GitDiff` displays a git diff between two strings.
 * @example
 *   \@\@ -1,2 +1,2 \@\@
 * - deleted line
 *   unchanged line
 * + added line
 */
declare const GitDiff: FunctionComponent<GitDiffProps>;
export { GitDiff };
