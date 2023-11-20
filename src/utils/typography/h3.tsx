import {TypographyTypes} from "src/utils/typography/typography.types";

const H3: React.FC<TypographyTypes> = ({ className, children }) => {
  return (
      <h3 className={`font-nunito text-3xl  ${className}`}>
        {children}
      </h3>
  );
};

export default H3;
