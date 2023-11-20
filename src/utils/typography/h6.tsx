import {TypographyTypes} from "src/utils/typography/typography.types";

const H6: React.FC<TypographyTypes> = ({ className, children }) => {
  return (
      <h6 className={`font-inter text-lg font-medium ${className}`}>
        {children}
      </h6>
  );
};

export default H6;
