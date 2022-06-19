import styles from './Header.module.css'

import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <header className={styles.header}>
            <Link to='/'>
                <img src={logo}/>
                <h1>O Mago Board Games</h1>
            </Link>
        </header>
    )
}