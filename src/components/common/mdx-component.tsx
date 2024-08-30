/* eslint-disable jsx-a11y/heading-has-content */
import type { ComponentProps } from 'react';
import * as runtime from 'react/jsx-runtime';

const useMdxComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  //* Demo of customizing the h1 component,
  //* I will handle the rest of the components in the future
  h1: (props: ComponentProps<'h1'>) => (
    <h1 style={{ scrollMarginTop: '68px' }} {...props} />
  ),
};

type MdxProps = {
  code: string;
};

function MDXContent({ code }: MdxProps) {
  const Component = useMdxComponent(code);
  return <Component components={components} />;
}

export default MDXContent;
