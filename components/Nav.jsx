"use client"
import React from 'react'
import { Link as ScrollLink } from "react-scroll"

const links = [
    {
        name: "home"
    },

    {
        name: "about"
    },

    {
        name: "journey"
    },

    {
        name: "work"
    },

    {
        name: "contact"
    },
]

const Nav = ({ containerStyles, linkStyles, listStyles, spy }) => {
    return (
        <nav className={containerStyles}>
            <ul className={listStyles}>
                {links.map((link, index) => {
                    return <ScrollLink key={index}
                        spy={spy}
                        activeClass='active'
                        to={link.name}
                        smooth
                        className={linkStyles}>
                        {link.name}</ScrollLink>
                })}
            </ul>
        </nav>
    )
}

export default Nav