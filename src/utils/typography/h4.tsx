import {TypographyTypes} from "src/utils/typography/typography.types";

const H4: React.FC<TypographyTypes> = ({ className, children }) => {
  return (
      <h4 className={`font-nunito text-2xl  ${className}`}>
        {children}
      </h4>
  );
};

export default H4;
