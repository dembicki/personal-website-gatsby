import React from 'react'
import {Button} from 'react-bootstrap'

const LinkButton = ({ children }) => (
    <Button
            style={{
              width: `100%`,
              borderRadius: '0',
              border: '2px solid #eee',
              color:'black',
              backgroundColor:'white',
              marginTop:`15px`
            }}
          >{ children }</Button>
)
export default LinkButton