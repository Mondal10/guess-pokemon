import { RADIO_TYPE } from "@/shared/enums";
import { TChangeInputElement } from "@/shared/types";

interface IProps {
  options: { id: string; value: string; label: string }[];
  onChangeHandler: (e: TChangeInputElement) => void;
  radioType: RADIO_TYPE;
  selectedValues: string[];
  wrapperStyle?: string;
}

function RadioButton(props: IProps) {
  const {
    options,
    onChangeHandler,
    radioType,
    selectedValues,
    wrapperStyle = "",
  } = props;

  return (
    <div className={wrapperStyle}>
      {options.map((option) => (
        <div className="p-2" key={option.id}>
          <label className="cursor-pointer">
            <input
              className="cursor-pointer"
              name={`${radioType}-group`}
              id={option.id}
              value={option.value}
              type={radioType}
              checked={selectedValues.includes(option.value)}
              onChange={onChangeHandler}
            />
            <span className="ml-2">{option.label}</span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default RadioButton;
