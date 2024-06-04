import type { TooltipProps } from '@chakra-ui/tooltip';
import { Tooltip } from '@chakra-ui/tooltip';

function CustomTooltip({ children, ...tooltipProps }: TooltipProps) {
  return (
    <Tooltip
      borderRadius={4}
      padding="2px 8px"
      color="black"
      bg="#36d399"
      fontSize="small"
      {...tooltipProps}
    >
      {children}
    </Tooltip>
  );
}

export default CustomTooltip;
