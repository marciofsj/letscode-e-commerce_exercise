import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import styles from './ProductContent.module.css'
import { ProductIcons } from './ProductIcons'

export function ProductContent() {
    return (
        <div className={styles.productContent}>
            <img src="https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v7111309492270397745/products/DOB001.jpg&outputFormat=JPEG&quality=0.8&alphaChannelColor=ffffff" alt="produto" />

            <div className={styles.productDetails}>
                <h2>Dobble</h2>
                <ProductIcons/>
                <p>Encontre e grite o símbolo que se repete entre duas cartas! Mas corra, pois só quem falar primeiro pontua!</p>
                <h3>R$ 69,99</h3>

                <div className={styles.cartbuttom}> 
                    <Link to='/cart'>     
                        
                        <strong><ShoppingCart size={30} weight="bold"/> Comprar Agora</strong>
                    </Link>
                </div>
            </div>
        </div>
    )
}