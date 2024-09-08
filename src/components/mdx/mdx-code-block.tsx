import { type PropsWithChildren } from 'react';

import CodeBlock from '../common/code-block';

type MdxCodeBlockProps = PropsWithChildren<{
  showLanguage?: boolean;
  showCopyButton?: boolean;
}>;

function MdxCodeBlock({
  showLanguage,
  showCopyButton,
  children: code,
}: MdxCodeBlockProps) {
  return (
    <CodeBlock showLanguage={showLanguage} showCopyButton={showCopyButton}>
      {code}
    </CodeBlock>
  );
}

export default MdxCodeBlock;
