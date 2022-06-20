export function Login() {
    return (
        
        <div>
            <form>
                <h1>Login</h1>
                <input type="email" name="E-mail" id="" placeholder="e-mail"/>
                <input type="password" name="Senha" id="" placeholder="senha"  />
                <a href="#">Esqueceu sua senha? Clique aqui!</a>
                <button>Acessar</button>
            </form>

            <form>
                <h1>Cadastro</h1>
                <input type="text" name="Nome" id="" placeholder="nome completo"/>
                <input type="email" name="E-mail" id="" placeholder="e-mail"/>
                <input type="password" name="Senha" id="" placeholder="senha"  />
                <input type="password" name="Confirma" id="" placeholder="confirme a senha"  />
                
                <div>
                    <input type="checkbox" name="Check" id="" />
                    <p>Quero receber atualizações e promoções por e-mail.</p>
                </div>
                <button>Acessar</button>
            </form>

        </div>
    )
}