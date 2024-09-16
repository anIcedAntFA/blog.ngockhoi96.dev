'use client';

import { useTheme } from 'next-themes';
import { themes as prismThemes } from 'prism-react-renderer';
import type { PropsWithChildren } from 'react';
import { isValidElement } from 'react';

import { themes } from '@/configs/themes';

import { Tag, TagLabel } from '../../tag';
import styles from '../code-block.module.css';

import CodeHighlight from './code-highlight';
import CopyCodeButton from './copy-code-button';

type CodeBlockProps = PropsWithChildren<
  Partial<{
    language: string;
    showLanguage: boolean;
    showCopyButton: boolean;
    showLineNumbers: boolean;
  }>
>;

function CodeBlock({
  language: langProp,
  showLanguage = false,
  showCopyButton = false,
  showLineNumbers = false,
  children,
  ...props
}: CodeBlockProps) {
  const { resolvedTheme } = useTheme();

  if (!isValidElement(children)) return null;

  const { className, children: content } = children.props;

  const language = className.replace(/language-/, '');
  const rawCode = content.trim();

  const hasBtnOrLang = showCopyButton || showLanguage;

  return (
    <div className={styles.wrapper} {...props}>
      <CodeHighlight
        codeString={rawCode}
        language={langProp || language}
        theme={
          resolvedTheme === themes.DARK
            ? prismThemes.dracula
            : {
                ...prismThemes.github,
                plain: {
                  ...prismThemes.github.plain,
                  backgroundColor: '#edf2f7',
                },
              }
        }
        showLines={showLineNumbers}
      />
      {hasBtnOrLang && (
        <div className={styles['btn-and-lang']}>
          {showCopyButton && <CopyCodeButton code={rawCode} />}
          {showLanguage && (
            <Tag variant="text">
              <TagLabel>{language}</TagLabel>
            </Tag>
          )}
        </div>
      )}
    </div>
  );
}

export default CodeBlock;
