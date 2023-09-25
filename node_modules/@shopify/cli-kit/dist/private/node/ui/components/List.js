import { TokenizedText } from './TokenizedText.js';
import { Box, Text } from 'ink';
import React from 'react';
const DOT = '•';
/**
 * `List` displays an unordered or ordered list with text aligned with the bullet point
 * and wrapped to the container width.
 */
const List = ({ title, items, margin = true, ordered = false, color, bullet = DOT, }) => {
    return (React.createElement(Box, { flexDirection: "column" },
        title ? (React.createElement(Text, { color: color },
            React.createElement(TokenizedText, { item: title }))) : null,
        items.map((item, index) => (React.createElement(Box, { key: index, marginLeft: margin ? 2 : 0 },
            React.createElement(Text, { color: color }, `${ordered ? `${index + 1}.` : bullet}`),
            React.createElement(Box, { flexGrow: 1, marginLeft: 1 },
                React.createElement(Text, { color: color },
                    React.createElement(TokenizedText, { item: item }))))))));
};
export { List };
//# sourceMappingURL=List.js.map