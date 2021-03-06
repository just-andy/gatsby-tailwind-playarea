import React, { useState } from "react"
import { Link } from "gatsby"

import Navigation from "./modules/Navigation"

const Header = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <div className="container mx-auto py-4 shadow-md md:shadow-none">
      <div className="md:flex md:justify-between">
        <div className="flex  justify-between ">
          <Link to="/">
            <span className="text-3xl font-bold md:py-4">Just Salons</span>
          </Link>
          <button
            type="button"
            className="btn btn-primary my-1 md:hidden "
            onClick={toggleNav}
          >
            {(isOpen === true) ? "Close" : "Menu"}
          </button>
        </div>

        <div
          className={isOpen ? `block md:block h-auto ease-in-out 	transition duration-500` : `hidden sm:h-0  md:block `}
        >
          <Navigation />
        </div>
      </div>
    </div>
  )
}

export default Header
