import { type PropsWithChildren } from 'react';

import CodeBlock from '../common/code-block';

export type MdxCodeBlockProps = PropsWithChildren<{
  showLanguage?: boolean;
  showCopyButton?: boolean;
}>;

function MdxCodeBlock({
  children: code,
  ...codeBlockProps
}: MdxCodeBlockProps) {
  return (
    <CodeBlock showLanguage showCopyButton {...codeBlockProps}>
      {code}
    </CodeBlock>
  );
}

export default MdxCodeBlock;
