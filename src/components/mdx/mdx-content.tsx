import * as runtime from 'react/jsx-runtime';

import { htmlComponents } from './mdx-components';

const useMdxComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const combineComponents = {
  ...htmlComponents,
};

type MdxProps = {
  code: string;
};

function MDXContent({ code }: MdxProps) {
  const Component = useMdxComponent(code);
  return <Component components={combineComponents} />;
}

export default MDXContent;
