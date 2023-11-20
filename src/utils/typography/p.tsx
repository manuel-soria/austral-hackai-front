import React, { ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

const P: React.FC<Props> = ({ className, children }) => {
  return (
      <p className={`font-inter leading-normal ${className}`}>
        {children}
      </p>
  );
};

export default P;
