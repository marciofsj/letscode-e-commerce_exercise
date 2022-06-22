import { useState } from 'react'
import styles from './Login.module.css'

export function Login() {
    //para o login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //para o cadastro
    const [newname, setNewName] = useState ('');
    const [newemail, setNewEmail] = useState('');
    const [newpassword, setNewPassword] = useState ('');
    const [repeatpassword, setRepetNewPassword] = useState ('');
    

    const handleEnter = () => {
        console.log(email)
        console.log(password)
    }

    return (
        <div className={styles.loginPage}>
            <div>
                <form className={styles.loginSide}>
                    <h2>Login</h2>
                    <input 
                        type="email" 
                        name="E-mail" 
                        placeholder="e-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input 
                        type="password" 
                        name="Senha"
                        placeholder="senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}  
                    />
                    <a href="#">Esqueceu sua senha? Clique aqui!</a>
                    <button type="button" onClick={handleEnter}>Acessar</button>
                </form>
            </div>

            <div>
                <form className={styles.registerSide}>
                    <h2>Cadastro</h2>
                    <input 
                        type="text" 
                        name="Nome" 
                        placeholder="nome completo"
                        value={newname}
                        onChange={e => setNewName(e.target.value)}
                    />

                    <input 
                        type="email" 
                        name="E-mail" 
                        placeholder="e-mail"
                        value={newemail}
                        onChange={e => setNewEmail(e.target.value)}
                    />

                    <input 
                        type="password" 
                        name="Senha" 
                        placeholder="senha"
                        value={newpassword}
                        onChange={e => setNewPassword(e.target.value)}
                    />

                    <input 
                        type="password" 
                        name="Confirma" 
                        placeholder="confirme a senha"
                        value={repeatpassword}
                        onChange={e => setRepetNewPassword(e.target.value)}
                    />

                    
                    <div className={styles.checkBox}>
                        <input type="checkbox" name="Check" id=""/>
                        <p>Quero receber promoções por e-mail.</p>
                    </div>
                    <button type="button">Acessar</button>
                </form>
            </div>
        </div>
    )
}