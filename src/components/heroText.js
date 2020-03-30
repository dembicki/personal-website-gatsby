import React from 'react'

const HeroText = ({text}) => (
    <h1 style={{
        position:`absolute`,
        top:`30%`,
        color:`white`,
        fontSize: `60px`
    }}>
        {text}
    </h1>
)
export default HeroText;