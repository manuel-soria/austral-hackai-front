import P from "src/utils/typography/p";
import Caption from "src/utils/typography/caption";

interface LabelProps {
  value: string;
  placeholder?: string;
  setValue: (value: string) => void;
  label?: string;
  caption?: string;
  error?: boolean;
  disabled?: boolean;
}

const Label = (props: LabelProps) => {
  const {value, placeholder, setValue, label, caption, error, disabled} = props;
  const textColor = error ? "text-error-500" : disabled ? "text-gray-500" : "text-black";
  const borderColor = error ? "border-error-500" : disabled ? "border-gray-300" : "border-gray-500";
  return (
      <div>
        {label && <P className={"text-base pb-2 "+textColor}>{label}</P>}
        <div className={"flex p-3 items-center self-stretch rounded-xl border-2 border-solid "+borderColor}>
          <input placeholder={placeholder} onChange={e => setValue(e.target.value)}
                 className={"text-base w-full focus:outline-none disabled:bg-white "+textColor} value={value} disabled={disabled}/>
        </div>
        {caption && <Caption className={"pt-1 "+textColor}>{caption}</Caption>}
      </div>
  );
};

export default Label;
