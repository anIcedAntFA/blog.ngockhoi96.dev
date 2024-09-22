/* eslint-disable react/no-array-index-key */
import cx from 'clsx';
import { Highlight } from 'prism-react-renderer';

import styles from '../code-block.module.css';
import type { CodeHighlightProps } from '../code-block.type';

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
        <pre className={cx(className, styles.pre)} style={style}>
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
                {line.map((token, index) => (
                  <span key={index} {...getTokenProps({ token })} />
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
