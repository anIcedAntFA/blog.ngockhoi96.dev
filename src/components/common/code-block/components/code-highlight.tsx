/* eslint-disable react/no-array-index-key */
import cx from 'clsx';
import {
  Highlight,
  type Language,
  type PrismTheme,
} from 'prism-react-renderer';

import styles from '../code-block.module.css';

type CodeHighlightProps = {
  codeString: string;
  language: Language;
  theme: PrismTheme;
  metaString?: string;
  showLines?: boolean;
};

function CodeHighlight({
  codeString,
  language,
  theme,
  showLines,
  ...highlightProps
}: CodeHighlightProps) {
  return (
    <Highlight
      code={codeString}
      language={language}
      theme={theme}
      {...highlightProps}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={cx(className, styles.highlight)} style={style}>
          {tokens.map((line, index) => {
            const { className, ...lineProps } = getLineProps({ line });
            return (
              <div
                key={index}
                className={cx(className, styles['token-line'])}
                {...lineProps}
              >
                {showLines && (
                  <span className={styles['line-index']}>{index + 1}</span>
                )}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
}

export default CodeHighlight;
