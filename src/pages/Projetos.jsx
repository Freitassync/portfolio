function Projetos() {
  const projetos = [
    { id: 1, nome: "Projeto 1", descricao: "Descrição do projeto 1", link: "https://github.com/Freitassync/projeto1" },
    { id: 2, nome: "Projeto 2", descricao: "Descrição do projeto 2", link: "https://github.com/Freitassync/projeto2" },
  ];

  return (
    <section>
      <div className="container">
        <h2>Meus Projetos</h2>
        <div className="project-grid">
          {projetos.map((projeto) => (
            <div key={projeto.id} className="project-card">
              <h3>{projeto.nome}</h3>
              <p>{projeto.descricao}</p>
              <a href={projeto.link}>Ver no GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projetos;