import { cn } from '@/lib/cn';

export const DragDropIcon = ({
  className,
  ...props
}: React.ComponentProps<'svg'>) => {
  return (


<svg width="24" height="24" viewBox="0 0 24 24"   fill="currentColor"
      className={cn('h-8 w-8', className)}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
<g clip-path="url(#clip0_3_346)">
<path d="M18 15V18H6V15H4V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V15H18ZM17 11L15.59 9.59L13 12.17V4H11V12.17L8.41 9.59L7 11L12 16L17 11Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_3_346">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

  );
};
