import styles from './Login.module.css'

export function Login() {
    return (
        <div className={styles.loginPage}>
            <div>
                <form className={styles.loginSide}>
                    <h2  >Login</h2>
                    <input type="email" name="E-mail" id="" placeholder="e-mail"/>
                    <input type="password" name="Senha" id="" placeholder="senha"  />
                    <a href="#">Esqueceu sua senha? Clique aqui!</a>
                    <button>Acessar</button>
                </form>
            </div>

            <div>
                <form className={styles.registerSide}>
                    <h2>Cadastro</h2>
                    <input type="text" name="Nome" id="" placeholder="nome completo"/>
                    <input type="email" name="E-mail" id="" placeholder="e-mail"/>
                    <input type="password" name="Senha" id="" placeholder="senha"  />
                    <input type="password" name="Confirma" id="" placeholder="confirme a senha"  />
                    
                    <div className={styles.checkBox}>
                        <input type="checkbox" name="Check" id=""/>
                        <p>Quero receber promoções por e-mail.</p>
                    </div>
                    <button>Acessar</button>
                </form>
            </div>
        </div>
    )
}