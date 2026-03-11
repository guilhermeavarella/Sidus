import { useNavigate } from "react-router-dom"

function NavItem({ label, isActive, action}) {
    const navigate = useNavigate();

    return (
        <button 
        onClick={() => {
            navigate(`/app/${label.toLowerCase()}`)
            {action()}}
        } 
        className="hover:cursor-pointer"
        >
            <img src={isActive ? `/icons/${label.toLowerCase()}-active.svg` : `/icons/${label.toLowerCase()}.svg`} alt={`${label}`} className="w-8 h-8" />
        </button>
    )
}

export default NavItem