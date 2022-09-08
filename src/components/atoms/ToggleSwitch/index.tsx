import "./toggleswitch.styles.css";

interface IProps {
  on: boolean;
  toggle: () => void;
  classes?: string;
}

const nope = () => {};

function ToggleSwitch(props: IProps) {
  const { on, toggle, classes } = props;

  const btnClassName = [
    "toggle-btn",
    on ? "toggle-btn-on" : "toggle-btn-off",
    classes,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label>
      <input
        className="toggle-input"
        type="checkbox"
        checked={on}
        onClick={toggle}
        onChange={nope}
      />
      <span className={btnClassName} />
    </label>
  );
}

export default ToggleSwitch;
