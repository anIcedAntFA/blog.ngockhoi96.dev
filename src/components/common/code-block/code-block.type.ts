import type { Language, PrismTheme } from 'prism-react-renderer';
import type { PropsWithChildren } from 'react';

export type CodeBlockProps = PropsWithChildren<
  Partial<{
    language: string;
    showLanguage: boolean;
    showCopyButton: boolean;
    showLineNumbers: boolean;
    fileName: string;
    className: string;
  }>
>;

export type childrenProps = {
  className: string;
  children: string;
};

export type CodeHighlightProps = {
  codeString: string;
  language: Language;
  theme: PrismTheme;
  metaString?: string;
  showLines?: boolean;
};

export type CopyCodeButtonProps = {
  code: string;
};
