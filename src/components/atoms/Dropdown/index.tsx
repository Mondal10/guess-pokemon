import { TChangeSelectElement } from "@/shared/types";
interface IDropdownProp {
  dropDownOptions: {
    name: string;
    value: string;
    id: number;
  }[];
  onChangeHandler: (e: TChangeSelectElement) => void;
  label: string;
  selectedValue?: string;
}

function Dropdown(props: IDropdownProp) {
  const { dropDownOptions, onChangeHandler, label, selectedValue } = props;
  return (
    <label>
      {label}:
      <select
        className="ml-2 border border-black rounded-md"
        value={selectedValue}
        onChange={onChangeHandler}
      >
        {dropDownOptions.map((data) => (
          <option key={data.id} value={data.value}>
            {data.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Dropdown;
