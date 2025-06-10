
import React from 'react';
import FeatureCard from './FeatureCard';

const CourseFeatures = () => {
  const features = [
    {
      icon: <img src="/icons/graduation-cap.svg" alt="Titulação" className="w-8 h-8" />,
      title: "Titulação",
      description: "Nível de Pós-graduação. Aqui você sai especialista!"
    },
    {
      icon: <img src="/icons/certificate.svg" alt="Curso aprovado pelo MEC" className="w-8 h-8" />,
      title: "Curso aprovado pelo MEC",
      description: "Sua Pós é registrada no MEC em conformidade com a Resolução CNE/CES nº 01/2018."
    },
    {
      icon: <img src="/icons/payment.svg" alt="Múltiplas opções de pagamento" className="w-8 h-8" />,
      title: "Múltiplas opções de pagamento",
      description: "Pode pagar no pix, cartão de crédito, crédito recorrente ou boleto."
    },
    {
      icon: <img src="/icons/clock.svg" alt="Carga horária" className="w-8 h-8" />,
      title: "Carga horária de 600h",
      description: "A gestão do tempo é sua. Você terá de 8 a 12 meses para concluir o curso"
    },
    {
      icon: <img src="/icons/book.svg" alt="Metodologia ativa" className="w-8 h-8" />,
      title: "Metodologia ativa, sem TCC",
      description: "Disciplinas com trilhas de aprendizagem interativas e suporte especializado durante seus estudos. Não temos TCC!"
    },
    {
      icon: <img src="/icons/micro-certificate.svg" alt="Microcertificados" className="w-8 h-8" />,
      title: "10 microcertificados",
      description: "Receberá um certificado de atualização por disciplina concluída para potencializar o seu perfil."
    },
    {
      icon: <img src="/icons/book.svg" alt="Material didático" className="w-8 h-8" />,
      title: "Material didático",
      description: "A gestão do tempo é sua. Você terá de 8 a 12 meses para concluir o curso."
    },
    {
      icon: <img src="/icons/platform.svg" alt="Multiplataforma" className="w-8 h-8" />,
      title: "Multiplataforma e APP exclusivo",
      description: "Conteúdo 100% digital disponível 24hrs por dia na plataforma educacional. Acesse por site ou APP por computador, tablet ou celular."
    },
    {
      icon: <img src="/icons/student-card.svg" alt="Carteirinha de Estudante" className="w-8 h-8" />,
      title: "Carteirinha de Estudante",
      description: "Receberá carteirinha estudantil gratuitamente após a matrícula"
    },
    {
      icon: <img src="/icons/practice.svg" alt="Teoria na prática" className="w-8 h-8" />,
      title: "Teoria na prática",
      description: "Aulas superdinâmicas com videoaulas, mapas mentais e muito mais."
    },
    {
      icon: <img src="/icons/certificate.svg" alt="Certificado de Conclusão" className="w-8 h-8" />,
      title: "Certificado de Conclusão",
      description: "Receberá o certificado da pós-graduação em até 40 dias"
    },
    {
      icon: <img src="/icons/digital-secretary.svg" alt="Secretaria digital" className="w-8 h-8" />,
      title: "Secretaria digital",
      description: "Gestão acadêmica, financeira e pedagógica 100% online."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher nosso MBA?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra todos os benefícios e diferenciais que fazem deste curso a melhor escolha para sua carreira
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseFeatures;
