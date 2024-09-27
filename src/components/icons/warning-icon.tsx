import type { SVGProps } from 'react';

function WarningIcon(svgProps: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 16 16'
      {...svgProps}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M6.285 1.975C7.06.68 8.939.68 9.715 1.975l5.993 9.997c.799 1.333-.161 3.028-1.716 3.028H2.008C.453 15-.507 13.305.292 11.972zM8 5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 5m1 6.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0'
        clipRule='evenodd'
      />
    </svg>
  );
}

export default WarningIcon;
