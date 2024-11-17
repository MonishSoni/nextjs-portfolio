import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CgMenuGridR } from "react-icons/cg"
import { useMediaQuery } from 'react-responsive'
import { FiMapPin, FiPhoneCall, FiMail } from 'react-icons/fi'

const FixedMenu = () => {

    const [showMenuButton, setShowMenuButton] = useState(false);
    const [showMenu, setShowMenu] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    const isMobile = useMediaQuery({
        query: "(max-width: 640px)",
    }
    )

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const handleScroll = () => {
        setShowMenuButton(window.scrollY > 150);
    };

    useEffect(() => {
        if (isMounted) {
            handleScroll()
        }

        if (!isMobile) {
            window.addEventListener("scroll", handleScroll)
            return () => window.removeEventListener("scroll", handleScroll)
        } else {
            setShowMenuButton(true)
        }

    }, [isMobile, isMounted])


    if (!isMounted) return null;


    return (
        <div className='fixed w-full h-[400px] z-50 flex justify-center pointer-events-none bg-transparent'>

            <div>menu</div>
            {isMobile ?
                (

                    <div>
                        <button>
                            <CgMenuGridR />
                        </button>
                    </div>
                ) :
                (
                    <AnimatePresence>
                        {showMenuButton && (
                            <motion.div initial={{ y: 100, opacity: 0 }} ></motion.div>
                        )}
                    </AnimatePresence>

                )}
        </div>
    )
}

export default FixedMenu