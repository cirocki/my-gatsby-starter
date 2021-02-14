import React from "react"
import { Link } from "gatsby"
import { mainNavData } from "../../../data/MainNavData"
export default function MainNav() {
  return (
    <nav>
      <ul>
        {mainNavData.map(item => (
          <Link to={item.path}>{item.name}</Link>
        ))}
        <li>item1</li>
      </ul>
    </nav>
  )
}
