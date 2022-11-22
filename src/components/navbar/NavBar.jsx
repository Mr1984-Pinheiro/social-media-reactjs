import { 
  DarkModeOutlined, 
  EmailOutlined, 
  GridViewOutlined,
   HomeOutlined, 
   NotificationsOutlined, 
   PersonOutlined, 
   SearchOutlined 
  } from "@mui/icons-material"
import { Link } from "react-router-dom"
import "./navBar.scss"


 const NavBar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none"}} >
        <span>pinheirosocial</span>
        </Link>
        <HomeOutlined />
        <DarkModeOutlined />
        <GridViewOutlined />
        <div className="search">
            <SearchOutlined />
            <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
          <PersonOutlined />
          <EmailOutlined />
          <NotificationsOutlined />
          <div className="user">
            <img src="https://i.pinimg.com/736x/43/22/a6/4322a648a967bf028b29bd799861b305.jpg" alt="profile picture" />
            <span>John Maxcell</span>
          </div>
      </div>
    </div>
  )
}

export default NavBar