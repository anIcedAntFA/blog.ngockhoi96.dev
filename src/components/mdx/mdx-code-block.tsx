import { type PropsWithChildren } from 'react';

import CodeBlock from '../common/code-block';

import styles from './mdx.module.css';

export type MdxCodeBlockProps = PropsWithChildren<{
  showLanguage?: boolean;
  showCopyButton?: boolean;
  showLineNumbers?: boolean;
  className?: string;
}>;

function MdxCodeBlock({
  children: code,
  ...codeBlockProps
}: MdxCodeBlockProps) {
  return (
    <CodeBlock
      showLanguage
      showCopyButton
      className={styles['code-block']}
      {...codeBlockProps}
    >
      {code}
    </CodeBlock>
  );
}

export default MdxCodeBlock;
