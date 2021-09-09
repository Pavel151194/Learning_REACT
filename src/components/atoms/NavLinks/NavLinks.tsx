import * as React from "react"
import { Link} from "react-router-dom"
import { memo } from "react"
import { IconHome, IconDiscket, IconSocials, IconMail, IconPlay, IconStatisticks, IconSettings } from "../../../assets/icons"
import "./NavLinks.css"

export const NavLinks = memo( () => (
    <ul className = "nav_links">
        <li>
            <Link to="/">
                <IconHome className = {"nav_icon"}/>
            </Link>
        </li>
        <li>
            <Link to="/films">
                <IconDiscket className = {"nav_icon"}/>
            </Link>
        </li>
        <li>
            <IconSocials className = {"nav_icon"}/>
        </li>
        <li>
            <IconMail className = {"nav_icon"}/>
        </li>
        <li>
            
                <IconPlay className = {"nav_icon"}/>
            
        </li>
        <li>
            <IconStatisticks className = {"nav_icon"}/>
        </li>
        <li>
            <IconSettings className = {"nav_icon"}/>
        </li>
    </ul>
) )