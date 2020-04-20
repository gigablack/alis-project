import React from 'react'
import { Card, Elevation, Button } from '@blueprintjs/core'
import { container } from './CardLogin.module.scss'

const CardLogin = () => {
    return (
        <Card elevation={Elevation.TWO} interactive={true} className={container}>
            <img src="/alis-logo.png" alt="logo"/>
            <h1>ChildCare</h1>
            <Button large={true} intent="primary" rightIcon="log-in">Login</Button>
        </Card>
    )
}

export default CardLogin