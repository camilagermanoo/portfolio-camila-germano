import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary"> Mim</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Desenvolvedora Front-End & Analista de Sistemas
            </h3>

            <p className="text-muted-foreground">
             Sou estudante de Análise e Desenvolvimento de Sistemas (IESB – 2023 a 2025),
             com experiência como Analista de Sistemas Júnior no Tribunal de Contas da União.
            </p>

            <p className="text-muted-foreground">
              Durante minha atuação, desenvolvi aplicações utilizando ReactJS e TypeScript, 
              além de ter contato com Kotlin e aplicação de metodologias ágeis como Scrum, Extreme Programming e Kanban.
            </p>

            <p className="text-muted-foreground">
              Tenho como foco compreender as necessidades do usuário e do negócio para criar soluções eficientes,
               organizadas e escaláveis, sempre buscando evoluir tecnicamente e entregar interfaces modernas e funcionais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Entrar em contato
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Desenvolvimento de aplicações web responsivas utilizando ReactJS, TypeScript e 
                    tecnologias modernas do ecossistema front-end.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Criação de interfaces intuitivas e funcionais, com foco na experiência do usuário e 
                    nas necessidades do negócio.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Metodologias Ágeis</h4>
                  <p className="text-muted-foreground">
                    Atuação em equipes ágeis utilizando Scrum, Kanban e Extreme Programming para desenvolvimento e entrega contínua de soluções.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};