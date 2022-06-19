import { ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'

export function Card() {
    return(
        <div className={styles.card}>
            <img src="https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v7111309492270397745/products/DOB001.jpg&outputFormat=JPEG&quality=0.8&alphaChannelColor=ffffff"/>
            <h2 className={styles.cardInfos}>Dobble</h2>
            <h3 className={styles.cardInfos}>R$ 69,99</h3>
            <div className={styles.cardButtons}>

                <Link to='/cart'>     
                    <ShoppingCart size={30}/>
                </Link>

                <Link to='/product' className={styles.buttonContent}>
                    <strong>Saiba Mais</strong>
                </Link>
            </div>
        </div>
            
    )
}