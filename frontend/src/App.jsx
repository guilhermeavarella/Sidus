import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="w-full h-full flex items-start justify-center p-4 pb-24">
      <Outlet />
    </div>
  )
}

export default App
