import React from 'react';

interface Props {
  display: boolean;
  children: React.ReactNode;
}

function Display({ display, children }: Props) {
  if (display) {
    return <>{children}</>;
  }
  return <></>;
}

export default Display;
