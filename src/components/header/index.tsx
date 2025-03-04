import { Link } from "react-router-dom";

export default function Header() {
    return(
        <div>
            {/* <div className={styles.cabecalho}> 
                <h1>teste</h1>
            </div> */}
            <hr />
            <nav>
                <Link to="/">login</Link>
                <Link to="/home"> home  </Link>
                <Link to="/genres"> generos </Link>
                <Link to="/details">detalhes </Link>
            </nav>
        </div>
    )
}