import { type HTMLAttributes, useCallback, useEffect, useState } from 'react';
import { cn } from '../../lib/utils';

interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'rainbow' | 'normal';
  changeLayout?: boolean;
  message?: string | React.ReactNode;
  height?: string;
}

export function Banner({
  id,
  variant = 'normal',
  changeLayout = true,
  message,
  height = '3rem',
  ...props
}: BannerProps): React.ReactElement {
  const [open, setOpen] = useState(true);
  const globalKey = id ? `banner-${id}` : undefined;

  useEffect(() => {
    if (globalKey) setOpen(localStorage.getItem(globalKey) !== 'true');
  }, [globalKey]);

  const onClick = useCallback(() => {
    setOpen(false);
    if (globalKey) localStorage.setItem(globalKey, 'true');
  }, [globalKey]);

  return (
    <div
      id={id}
      {...props}
      style={{ 
        height: open ? height : '0',
        position: 'relative',
        zIndex: 40,
        overflow: 'visible'
      }}
      className={cn(
        'sticky top-0 flex flex-row items-center justify-center px-4 text-center text-sm font-medium transition-all duration-300',
        variant === 'rainbow' ? 'bg-transparent' : 'bg-secondary',
        !open ? 'hidden' : '',
        props.className
      )}
    >
      {variant === 'rainbow' && <RainbowLayer />}
      {message || props.children}
    </div>
  );
}

const RainbowLayer = () => {
  return (
    <>
      <div className="absolute inset-0 rainbow-banner-gradient-1" style={{
        zIndex: -1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute'
      }} />
      <div className="absolute inset-0 rainbow-banner-gradient-2" style={{
        zIndex: -1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute'
      }} />
    </>
  );
}; 