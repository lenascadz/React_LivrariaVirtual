import styles from './styles.module.css';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className={styles.logo}>
                <Link to='/home'>
                    <img src="/src/assets/logo.png" alt="logo"/>
                </Link>

            </div>

            <div className={styles.icones}>
                <div className={styles.icone1}>
                    <Link to='/'>
                    <img src="../src/assets/icon_pessoal.png" alt="pessoal" />
                    </Link>
                </div>
                <div className={styles.icone2}>
                    <img src="../src/assets/icon_carrinho.png" alt="carrinho" />
                </div>
            </div>
        </header>
    );
}







{/* <nav>
                <Link to="/">login</Link>
                <Link to="/home"> home  </Link>
                <Link to="/genres"> generos </Link>
                <Link to="/details">detalhes </Link>
            </nav> */}