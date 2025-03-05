import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";

interface Livro {
  id: number;
  titulo: string;
  autor: string;
  genero: string;
  preco: number;
  capa: string;
}

export default function GeneroPage() {
  const { genero } = useParams();  // Obtém o gênero da URL
  const [livros, setLivros] = useState<Livro[]>([]);
  const [pesquisa, setPesquisa] = useState("");
  const navigate = useNavigate();

  // Busca todos os livros do gênero selecionado
  useEffect(() => {
    axios.get(`http://localhost:3001/livros?genero=${genero}`)
      .then(response => setLivros(response.data))
      .catch(error => console.error("Erro ao buscar livros:", error));
  }, [genero]);

  // Filtra os livros com base na pesquisa do usuário
  const livrosFiltrados = livros.filter(livro =>
    livro.titulo.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <>
      <div className={styles.container}>
        <button className={styles.voltar} onClick={() => navigate("/home")}>
          &lt; {}
        </button>

        <input
          type="text"
          placeholder="Pesquisar por título"
          className={styles.pesquisa}
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />

        <h2 className={styles.titulo}>{genero}</h2>

        <div className={styles.livrosContainer}>
          {livrosFiltrados.length > 0 ? (
            livrosFiltrados.map((livro) => (
              <div key={livro.id} className={styles.card} onClick={() => navigate(`/details/${livro.id}`)}>
                <img src={livro.capa} alt={livro.titulo} className={styles.livroCapa} />
                <div className={styles.cardContent}>
                  <p className={styles.tituloLivro}>{livro.titulo}</p>
                  <p className={styles.autorLivro}>{livro.autor}</p>
                  <span className={styles.precoLivro}>R$ {livro.preco.toFixed(2)}</span>
                </div>
              </div>
            ))
          ) : (
            <p className={styles.nenhumLivro}>Nenhum livro encontrado.</p>
          )}
        </div>
      </div>
    </>
  );
}
