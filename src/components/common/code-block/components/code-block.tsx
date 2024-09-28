'use client';

import cx from 'clsx';
import { useTheme } from 'next-themes';
import { themes as prismThemes } from 'prism-react-renderer';
import { isValidElement } from 'react';

import { themes } from '@/configs/themes';

import { Tag, TagLabel } from '../../tag';
import { getLanguageFromClassName } from '../code-block.helper';
import styles from '../code-block.module.css';
import type { childrenProps, CodeBlockProps } from '../code-block.type';

import CodeHighlight from './code-highlight';
import CopyCodeButton from './copy-code-button';

function CodeBlock({
  language: langProp,
  showLanguage = false,
  showCopyButton = false,
  showLineNumbers = false,
  className: classWrapper,
  children,
}: CodeBlockProps) {
  const { resolvedTheme } = useTheme();

  if (!isValidElement(children)) return null;

  const { className, children: content }: childrenProps = children.props;

  const language = getLanguageFromClassName(className);
  const rawCode = content.trim();
  const codeTheme =
    resolvedTheme === themes.DARK ? prismThemes.dracula : prismThemes.vsLight;

  const hasBtnOrLang = showCopyButton || showLanguage;

  return (
    <div className={cx(styles.wrapper, classWrapper)}>
      <CodeHighlight
        codeString={rawCode}
        language={langProp || language}
        theme={codeTheme}
        showLines={showLineNumbers}
      />

      {hasBtnOrLang && (
        <div className={styles['btn-and-lang']}>
          {showCopyButton && <CopyCodeButton code={rawCode} />}
          {showLanguage && (
            <Tag variant='text'>
              <TagLabel>{language}</TagLabel>
            </Tag>
          )}
        </div>
      )}
    </div>
  );
}

export default CodeBlock;
