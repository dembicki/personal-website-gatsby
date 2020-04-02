import React from "react"
import { Button } from "react-bootstrap"

const HeroText = ({ text }) => (
  <>
    <h1
      style={{
        position: `absolute`,
        top: `30%`,
        color: `black`,
        fontSize: `70px`,
      }}
    >
      Let's make some <br /> beutiful{" "}
      <span style={{ fontSize: `68px` }}>things</span> <br />
      together.
    </h1>
    <Button className="mx-auto" style={{ width: `250px`,
    position: `absolute`,
    top: `65%`,
    fontSize:`1.4rem`
    }}>
      Interested? <span className="ml-3"></span>&darr;
    </Button>
  </>
)
export default HeroText
