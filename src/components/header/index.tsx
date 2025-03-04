import styles from './styles.module.css';

export default function Header() {
    return (
        <header> 
            <div className={styles.logo}>
                <img src="./src/assets/logo.png"/>
            </div>

            <div className={styles.icones}>
                <div className={styles.icone1}>
                    <img src="../src/assets/icon_pessoal.png" alt="pessoal" />
                </div>
                <div className={styles.icone2}>
                    <img src="../src/assets/icon_carrinho.png" alt="carrinho" />
                </div>
            </div>
        </header>
    );
}





// import { Link } from "react-router-dom";
{/* <nav>
                <Link to="/">login</Link>
                <Link to="/home"> home  </Link>
                <Link to="/genres"> generos </Link>
                <Link to="/details">detalhes </Link>
            </nav> */}