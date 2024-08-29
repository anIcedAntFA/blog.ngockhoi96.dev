import * as runtime from 'react/jsx-runtime';

const useMdxComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {};

type MdxProps = {
  code: string;
};

function MDXContent({ code }: MdxProps) {
  const Component = useMdxComponent(code);
  return <Component components={components} />;
}

export default MDXContent;
