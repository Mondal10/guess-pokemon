import { RouterElement } from "./routes";
import "./App.css";
import HomeCTA from "./components/molecules/HomeCTA";
import SettingCTA from "./components/molecules/SettingCTA";

function App() {
  return (
    <div className="p-2 sm:p4 flex flex-col justify-center items-center">
      <section className="flex w-full justify-between">
        <HomeCTA />
        <SettingCTA />
      </section>
      <RouterElement />
    </div>
  );
}

export default App;
