import { Outlet } from "react-router-dom";
import isSmallScreen from "./utils/isSmallScreen";

function App() {
  if (!isSmallScreen()) {
    return (
      <div className="relative w-[30rem]">
        <img src="/images/emulator.svg" alt="Emulator Frame" className="w-full pointer-events-none" />
        <div className="absolute inset-0 flex items-start justify-center overflow-x-hidden pt-[4.787rem] pb-[3.025rem] px-[0.638rem]"> {/* Tons of magic numbers because it looks better this way ;) */}
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
