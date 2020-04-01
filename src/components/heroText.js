import React from 'react'

const HeroText = ({text}) => (
    <h1 style={{
        position:`absolute`,
        top:`30%`,
        color:`white`,
        fontSize: `70px`
    }}>
        Let's make some <br /> beutiful <span style={{fontSize: `68px`}}>things</span> <br />together.
    </h1>
)
export default HeroText;