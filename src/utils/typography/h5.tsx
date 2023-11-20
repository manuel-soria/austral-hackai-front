import {TypographyTypes} from "src/utils/typography/typography.types";


const H5: React.FC<TypographyTypes> = ({ className, children }) => {
  return (
      <h5 className={`font-inter text-xl font-medium ${className}`}>
        {children}
      </h5>
  );
};

export default H5;
