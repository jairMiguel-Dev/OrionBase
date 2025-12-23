import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { type TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
  },
});

const NoMaxWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 'none',
  },
});

export default function VariableWidth({text, informação}: {text: string, informação: string }) {
  return (
    <div>
      <Tooltip title={text}>
        <Button sx={{ m: 1 }}>{informação}</Button>
      </Tooltip>
      <CustomWidthTooltip title={text}>
        <Button sx={{ m: 1 }}>{informação}</Button>
      </CustomWidthTooltip>
      <NoMaxWidthTooltip title={text}>
        <Button sx={{ m: 1 }}>{informação}</Button>
      </NoMaxWidthTooltip>
    </div>
  );
}
