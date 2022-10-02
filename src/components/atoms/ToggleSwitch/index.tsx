import "./toggleswitch.styles.css";

interface IProps {
  on: boolean;
  toggle: () => void;
  customClass?: string;
}

function ToggleSwitch(props: IProps) {
  const { on, toggle, customClass } = props;

  const btnClassName = [
    "toggle-btn",
    on ? "toggle-btn-on" : "toggle-btn-off",
    customClass,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label>
      <input
        className="toggle-input"
        type="checkbox"
        checked={on}
        onChange={toggle}
      />
      <span className={btnClassName} />
    </label>
  );
}

export default ToggleSwitch;
