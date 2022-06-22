import styles from './Footer.module.css'
import logo from '../assets/logo.png'
import pay from '../assets/pay.png'
import { FacebookLogo, InstagramLogo, LinkedinLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react'

export function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.info}>
                <div >
                    <img src={logo}/>
                </div>
                    
                <div className={styles.general}>
                    <h3>INFORMAÇÕES GERAIS</h3>
                    <ul>
                       <li><a href="#">Sobre nós</a></li>
                       <li><a href="#">Imprensa</a></li>
                       <li><a href="#">Atendimento</a></li>
                       <li><a href="#">Central de Report</a></li>
                       <li><a href="#">Loja e Prazo</a></li>
                       <li><a href="#">Política de Troca e Devoluções</a></li>
                       <li><a href="#">Trabalhe conosco</a></li>
                       <li><a href="#">Termos e condições</a></li>
                       <li><a href="#">Política de privacidade</a></li>
                    </ul>
                </div>

                <div className={styles.ourProduct}>
                    <h3>NOSSOS PRODUTOS</h3>
                    <ul>
                        <li><a href="#">Acessórios</a></li>
                        <li><a href="#">Board Games</a></li>
                        <li><a href="#">Card Games</a></li>
                        <li><a href="#">RPG</a></li>
                    </ul>
                </div>

                <div className={styles.pay}>
                    <h3>PAGAMENTO</h3>
                    <img src={pay}/>
                </div>
                   
                <div>
                    <h3>SIGA-NOS</h3>
                    <div className={styles.midia}>
                        <span className={styles.facebook}><FacebookLogo size={40}/></span>
                        <span className={styles.instagram}><InstagramLogo size={40}/></span>
                        <span className={styles.linkedin}><LinkedinLogo size={40}/></span>
                        <span className={styles.twitter}><TwitterLogo size={40}/></span>
                        <span className={styles.youtube}><YoutubeLogo size={40}/></span>
                    </div> 
                </div>
            </div>

            <div className={styles.addres}>
                <p>O Mago Board Games Comércio de Brinquedos, Livros e Serviços LTDA EPP. CNPJ XX.XXX.XXX/XXX-XX</p>
                <p>Rua dos Barbudos, XXX - Madeireira - Machadada, MM. CEP XXXXX-XXX</p>
            </div>
        </div>
    )
}

//color="#3B5998" color="#DD2A7B" color="#0E76A8" color="#00ACEE" color="#FF0000"
