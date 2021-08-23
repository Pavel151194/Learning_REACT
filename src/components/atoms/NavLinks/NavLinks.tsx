import * as React from "react"
import { memo } from "react"
import { IconHome, IconDiscket, IconSocials, IconMail, IconPlay, IconStatisticks, IconSettings } from "../../../assets/icons"
import "./NavLinks.css"

export const NavLinks = memo( () => (
    <ul className = "nav_links">
        <li><IconHome/></li>
        <li><IconDiscket/></li>
        <li><IconSocials/></li>
        <li><IconMail/></li>
        <li><IconPlay/></li>
        <li><IconStatisticks/></li>
        <li><IconSettings/></li>
    </ul>
) )