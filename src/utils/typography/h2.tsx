import {TypographyTypes} from "src/utils/typography/typography.types";

const H2: React.FC<TypographyTypes> = ({ className, children }) => {
  return (
      <h2 className={`font-nunito text-4xl  ${className}`}>
        {children}
      </h2>
  );
};

export default H2;
