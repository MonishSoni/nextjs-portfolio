import React from 'react'
import {FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaGithub} from "react-icons/fa"
import { Link } from 'react-scroll'

const socials = [
  {
    icon: <FaFacebookF/>,
    path : ""

  },

  {
    icon: <FaTwitter/>,
    path : ""

  },

  {
    icon: <FaLinkedin/>,
    path : ""

  },

  {
    icon: <FaInstagram/>,
    path : ""

  },

  {
    icon: <FaGithub/>,
    path : ""

  },
]

const Socials = ({containerStyles, IconStyles}) => {
  return (
    <div className={containerStyles} >
      {socials.map((item,index)=>{
        return <Link href={item.path} key={index} className={IconStyles}><span>{item.icon}</span></Link>

      })}
    </div>
  )
}

export default Socials