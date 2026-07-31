import perfil from '../assets/perfil.png';

function Sobre() {
  return (
    <section id="sobre" className="flex flex-col md:flex-row w-full md:w-4/5 mx-auto overflow-hidden px-8 py-16">
      <div className="container content-sobre w-full md:w-2/3">
        <h2 className="text-primary-color mb-5 text-3xl">Sobre</h2>

        <p className="text-text-color mb-4 leading-8">
          Meu nome é <strong>Danillo</strong>, tenho 23 anos e sou graduado em
          <strong> Análise e Desenvolvimento de Sistemas</strong> e
          <strong> Gestão Financeira</strong>. Atuo como desenvolvedor Full Stack,
          criando aplicações completas, desde interfaces modernas e responsivas até o
          desenvolvimento de APIs, integrações e regras de negócio, sempre priorizando
          código limpo, escalabilidade e boas práticas de desenvolvimento.
        </p>

        <p className="text-text-color mb-4 leading-8">
          Tenho experiência no desenvolvimento de aplicações utilizando
          <strong> PHP, JavaScript, NextJS, Node.js, HTML e CSS</strong>, além da construção
          de APIs REST, integração com bancos de dados <strong>SQL</strong>, autenticação de usuários e
          automação de processos com <strong>Python</strong>. Também utilizo ferramentas
          como <strong>Docker</strong>, <strong>Postman</strong> e
          <strong> Swagger/OpenAPI</strong> para padronização, documentação, testes e
          implantação de aplicações.
        </p>
      
        <div className="flex flex-wrap gap-3 mt-8">
          {[
            "HTML5",
            "CSS3",
            "JavaScript",
            "Next.js",
            "Node.js",
            "PHP",
            "Python",
            "SQL",
            "MySQL",
            "PostgreSQL",
            "Docker",
            "Git",
            "GitHub",
            "REST API",
            "Swagger",
            "Postman",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-gray-300 text-sm font-medium transition-all duration-300 hover:border-blue-500 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,.35)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="img-sobre mt-9 p-5 w-full md:w-1/2 md:mt-0 flex justify-center">
        <a href="https://www.linkedin.com/in/danillosouza03/" target="_blank" rel="noopener noreferrer">
          <img
              src={perfil}
              alt="Foto de Perfil"
              className="rounded-full w-full max-w-[345px]
                        shadow-[0_0_25px_#3b82f6]
                        transition-all duration-500
                        hover:scale-105 hover:shadow-[0_0_40px_#3b82f6]"
            />     
        </a>
      </div>
    </section>
  );
}

export default Sobre;