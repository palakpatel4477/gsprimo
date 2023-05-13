import React from 'react'
import { NavLink } from 'react-router-dom'

const IndexSection = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <NavLink to='services'><button className="hero-button">Services</button></NavLink>
            </div>
        </section>
    )
}

export default IndexSection