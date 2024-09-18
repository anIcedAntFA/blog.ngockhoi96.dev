import { visit } from 'unist-util-visit';

import type { Todo } from '@/types/common';

function rehypeHighlight() {
  return (tree: Todo) => {
    visit(tree, 'text', (node, index, parent) => {
      const value = node.value;
      const regex = /==(.+)==/g;
      const matches = [...value.matchAll(regex)];

      if (matches.length > 0) {
        const children = [];
        let lastIndex = 0;

        matches.forEach((match) => {
          const [fullMatch, text] = match;
          const index = match.index;

          if (index > lastIndex) {
            children.push({
              type: 'text',
              value: value.slice(lastIndex, index),
            });
          }

          children.push({
            type: 'element',
            tagName: 'mark',
            children: [{ type: 'text', value: text }],
          });

          lastIndex = index + fullMatch.length;
        });

        if (lastIndex < value.length) {
          children.push({
            type: 'text',
            value: value.slice(lastIndex),
          });
        }

        parent.children.splice(index, 1, ...children);
      }
    });
  };
}

export default rehypeHighlight;
