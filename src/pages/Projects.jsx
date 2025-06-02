function Projects() {
  return (
    <section className="p-10">
      <h2 className="text-3xl mb-4">Projetos</h2>
      <p>
       1 - Portfólio em React + Vite + TailwindCSS
      </p>
      <h3 className="text-xl mt-4 mb-2">Tecnologias utilizadas no projeto</h3>
      <ul className="list-disc pl-5 mb-4">
        <li>React</li>
        <li>Vite</li>
        <li>Tailwind CSS</li>
        <li>Codespaces (GitHub)</li>
        <li>Docker (para ambiente Codespaces)</li>
        <li>Deploy automatizado com Vercel</li>
      </ul>
      <p>
        Github: 
        <a 
          href="https://github.com/daviamarall/react-portfolio" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline"
        >
          react-portfolio
        </a>
      </p>
    </section>
  );
}

export default Projects;