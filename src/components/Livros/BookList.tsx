import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

interface Livro {
  id: number;
  titulo: string;
  autor: string;
  genero: string;
  preco: number;
  capa: string;
}

export default function BooksList() {
  const [livros, setLivros] = useState<Livro[]>([]);
  const navigate = useNavigate();

  
  useEffect(() => {
    axios.get("http://localhost:3001/livros")  // buscar no JSON Server
      .then(response => {
        setLivros(response.data);
      })
      .catch(error => console.error("Erro ao buscar livros:", error));
  }, []);

  // organizando por gênero e exibe os primeiros 4 
  const livrosPorGenero = livros.reduce((acc, livro) => {
    acc[livro.genero] = acc[livro.genero] || [];
    if (acc[livro.genero].length < 4) {
      acc[livro.genero].push(livro);
    }
    return acc;
  }, {} as Record<string, Livro[]>);

  return (

    <div className={styles.container}>
      {Object.entries(livrosPorGenero).map(([genero, livros]) => (
        <div key={genero} className={styles.generoSection}>
          <div className={styles.generoHeader}>
            <h2>{genero}</h2>
            <button className={styles.verMais} onClick={() => navigate(`/genero/${genero}`)}>Ver mais</button>
          </div>

          <div className={styles.livrosContainer}>
            {livros.map((livro) => (
              <div key={livro.id} className={styles.card} onClick={() => navigate(`/livro/${livro.id}`)}>
                <img src={livro.capa} alt={livro.titulo} className={styles.livroCapa} />
                <div className={styles.cardContent}>
                  <p className={styles.tituloLivro}>{livro.titulo}</p>
                  <p className={styles.autorLivro}>{livro.autor}</p>
                  <span className={styles.precoLivro}>R$ {livro.preco.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}
