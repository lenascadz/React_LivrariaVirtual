
import styles from './styles.module.css';


export default function Login() {
    return (
        <> 
                
            <main>
                <div className={styles.capa}>
                    <div className={styles.foto}>
                        <img src="./src/assets/capa_login.png" alt="logo" /> 
                    </div> 
                    <div className={styles.infos}>
                        <div className={styles.logo}>
                            <img src="./src/assets/logo.png"/>
                        </div>
                        <div className={styles.saudacao}> 
                            <h2> Bem vindo (a)! </h2> 
                            <h1> Entre na sua conta </h1>           
                        </div>

                        <form className={styles.form}>
                            <p>E-mail</p>
                            <input 
                                type='Email'
                                className={styles.input}
                                placeholder='Digite aqui seu email' 
                            />
                            
                            <p>Senha</p>
                            <input 
                                type='Senha'
                                className={styles.input}
                                placeholder='Digite aqui sua senha' 
                            />
                            <div className={styles.botoes}>
                                <button className='botao1' >Entrar </button>
                                <button className='botao2'>Entrar </button>
                            </div>
                        </form>

                        

                        
                    </div>
                </div>
            </main>
        </>
    )
}