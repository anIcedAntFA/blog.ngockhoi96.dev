import type { ComponentProps } from 'react';

import Code from '../common/code';

type MdxInlinedCodeProps = ComponentProps<'code'> & {
  color?: 'base' | 'primary';
};

function MdxInlinedCode(codeProps: MdxInlinedCodeProps) {
  return <Code variant="surface" size="medium" color="base" {...codeProps} />;
}

export default MdxInlinedCode;
