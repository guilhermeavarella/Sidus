import { Outlet } from "react-router-dom";
import isSmallScreen from "./utils/isSmallScreen";

function App() {
  if (!isSmallScreen()) {
    return (
      <div className="relative w-[32rem]">
        <img src="/images/emulator.svg" alt="Emulator Frame" className="w-full pointer-events-none" />
        <div className="-z-1 absolute inset-0 flex items-start justify-center overflow-x-hidden pt-[5.1rem] px-[0.68rem] rounded-[5.3rem] bg-[var(--background-primary)]"> {/* Tons of magic numbers because it looks better this way ;) */}
          <Outlet />
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-[100dvw] h-[100dvh] flex items-start justify-center overflow-x-hidden overflow-y-scroll">
      <Outlet />
    </div>
  )
}

export default App
