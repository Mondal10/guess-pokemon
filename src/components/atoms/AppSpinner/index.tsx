interface IProps {
  customClasses?: string;
}

function AppSpinner(props: IProps) {
  const { customClasses = "" } = props;
  const defaultClasses =
    "animate-spin h-8 w-8 border-4 rounded-full border-slate-300 border-t-red-400";

  return <div className={`${defaultClasses} ${customClasses}`}></div>;
}

export default AppSpinner;
