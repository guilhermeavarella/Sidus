import { Outlet } from "react-router-dom";
import isSmallScreen from "./utils/isSmallScreen";

function App() {
  if (!isSmallScreen()) {
    return (
      <div className="relative w-[24rem]">
        <img src="/images/emulator.svg" alt="Emulator Frame" className="w-full pointer-events-none" />
        <div className="-z-1 absolute inset-0 flex items-start justify-center overflow-x-hidden pt-[3.82rem] px-[0.51rem] rounded-[4rem] bg-[var(--background-primary)]"> {/* Tons of magic numbers because it looks better this way ;) */}
          <Outlet />
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full h-full flex items-start justify-center overflow-x-hidden">
      <Outlet />
    </div>
  )
}

export default App
