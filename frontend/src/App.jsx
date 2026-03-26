import { useState } from "react"
import { Outlet } from "react-router-dom"
import { isFullscreen } from "./utils/fullscreen"
import NavItem from "./components/NavItem.jsx"

function App() {
  const [activeTab, setActiveTab] = useState("home")

  const navItems = ["Home", "Wallet", "Services", "Support"]

  return (
    <div className="relative w-full h-full flex items-start justify-center p-4 pb-24">
      <section className={`fixed flex items-center justify-center bg-white/25 backdrop-blur-xs rounded-full px-6 py-4 gap-9 md:bottom-[calc((50vh-34rem)+4rem)] ${isFullscreen() ? 'bottom-16' : 'bottom-6'}`}>
        {navItems.map((item) => (
          <NavItem key={item} label={item} isActive={activeTab === item.toLowerCase()} action={() => setActiveTab(item.toLowerCase())} />
        ))}
      </section>

      <Outlet />
    </div>
  )
}

export default App
