import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import styles from './Menu.module.css'

export function Menu() {
    return (
        <div className={styles.menu}>
            <span><Link to='/'>Home</Link></span>
            <span> <Link to='/login'>Meu Cadastro</Link></span>
            <span><Link to='/cart'>Meus Pedidos</Link></span>
            <Link to='/cart'><ShoppingCart size={20}/></Link>
        </div>
    )
}   