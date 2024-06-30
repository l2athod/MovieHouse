import { ReactNode } from 'react'
import Nav from './Navigation'

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Nav />
            <main>{children}</main>
        </>
    )
}

export default Layout
