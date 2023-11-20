import React from 'react';
import {TypographyTypes} from "src/utils/typography/typography.types";

const H1: React.FC<TypographyTypes> = ({className, children}) => {
  return (
      <h1 className={`font-nunito text-5xl  ${className}`}>
        {children}
      </h1>
  );
};

export default H1;
