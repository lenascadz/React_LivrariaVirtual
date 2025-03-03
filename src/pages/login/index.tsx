
import styles from './styles.module.css';


export default function Login() {
    return (
        <> 
                
            <main>
                <div className={styles.capa}>
                    <div className={styles.foto}>
                        <img src="./src/assets/capa_login.png" alt="" /> 
                    </div> 
                    <div className={styles.infos}>
                        <div className={styles.logo}>
                            <img src="./src/assets/logo.png"/>
                        </div>
                        <div className={styles.saudacao}> 
                            <h2> Bem vindo (a)! </h2> 
                            <h1> Entre na sua conta </h1>           
                        </div>
                        <div className={styles.form}>
                            <h2>E-mail</h2>
                            <textarea placeholder="Digite aqui seu e-mail:"/>
                            <h2>Senha</h2>
                            <textarea placeholder="Digite aqui sua senha:"/>
                            <button> entrar </button> 

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}