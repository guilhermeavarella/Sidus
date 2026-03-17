import { Outlet } from "react-router-dom"
import isSmallScreen from "./utils/isSmallScreen"

import frame from "/images/emulator.svg"

function Emulator() {
  if (!isSmallScreen()) {
    return (
      <div className="relative w-[32rem]">
        <div className="z-0 absolute inset-0 flex items-start justify-center overflow-x-hidden pt-[5.1rem] px-[0.68rem] rounded-[5.3rem] bg-[var(--background-primary)] no-scrollbar"> {/* Tons of magic numbers because it looks better this way ;) */}
          <Outlet />
        </div>
        <img src={frame} alt="Emulator Frame" className="z-10 relative w-full pointer-events-none" />
      </div>
    );
  }
  
  return (
    <div className="w-[100dvw] h-[100dvh] flex items-start justify-center overflow-x-hidden overflow-y-scroll bg-[var(--background-primary)] no-scrollbar">
      <Outlet />
    </div>
  )
}

export default Emulator
