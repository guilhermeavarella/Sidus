import { useState } from "react"
import { Outlet } from "react-router-dom"

import NavItem from "./components/NavItem.jsx"

function App() {
  const [activeTab, setActiveTab] = useState("home")

  const navItems = ["Home", "Wallet", "Services", "Support"]

  return (
    <div className="w-full h-full flex items-start justify-center p-4 pb-24">
      <section className="absolute bottom-16 flex items-center justify-center bg-white/25 backdrop-blur-sm rounded-full px-6 py-4 gap-9">
        {navItems.map((item) => (
          <NavItem key={item} label={item} isActive={activeTab === item.toLowerCase()} action={() => setActiveTab(item.toLowerCase())} />
        ))}
      </section>

      <Outlet />
    </div>
  )
}

export default App
