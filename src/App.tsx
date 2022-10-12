import { RouterElement } from "./routes";
import "./App.css";
import HomeCTA from "./components/molecules/HomeCTA";
import SettingCTA from "./components/molecules/SettingCTA";
import GithubCTA from "./components/molecules/GithubCTA";

function App() {
  return (
    <div className="p-2 sm:p4 flex flex-col justify-center items-center">
      {/* Header */}
      <header className="fixed top-0 bg-white w-full p-1 flex justify-between">
        <HomeCTA />
        <SettingCTA />
      </header>
      {/* Body */}
      <div className="my-10">
        <RouterElement />
      </div>
      {/* Footer */}
      <footer className="fixed bottom-0 bg-white w-full p-1">
        <GithubCTA />
      </footer>
    </div>
  );
}

export default App;
