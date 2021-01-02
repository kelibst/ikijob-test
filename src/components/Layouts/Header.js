import React from 'react'
import MobileNav from '../../container/MobileNav'
import NavBar from '../../container/NavBar'
import Hero from './Hero'


const Header = (props) => {
    const header= props.match.isExact && props.match.path ? ('homepage-header') : ('homepage-header-min')
    return (
        <div className={header}>
            <NavBar />
            <MobileNav/>
            { props.match.isExact && props.match.path === "/" && <Hero />}
        </div>
    )
}

export default Header