import {TypographyTypes} from "src/utils/typography/typography.types";

const Caption: React.FC<TypographyTypes> = ({ className, children }) => {
  return (
      <p className={`text-xs font-inter leading-normal ${className}`}>
        {children}
      </p>
  );
};

export default Caption;
