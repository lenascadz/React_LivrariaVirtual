import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header>
            <h2> header </h2>
            <hr />
            <nav>
                <Link to="/">login</Link>
                <Link to="/home"> home  </Link>
                <Link to="/genres"> generos </Link>
                <Link to="/details">detalhes </Link>
            </nav>
        </header>
    )
}