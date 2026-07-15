import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NoticeList from "./components/NoticeList";

function App() {
  const [notices, setNotices] = useState([
    {
      id: 1,
      title: "Secitex Macau 2026",
      category: "Evento",
      description: "Inscrições abertas para oficinas e palestras.",
      fullDescription: "A SECITEX é a Semana de Ciência e Tecnologia do IFRN, um evento que acontece anualmente em todos os campi. Durante cinco dias, a comunidade acadêmica participa de palestras com pesquisadores convidados, minicursos práticos, oficinas interativas, apresentações de projetos de pesquisa, feira de ciências, competições de robótica e desafios tecnológicos. O evento é gratuito, aberto ao público e oferece certificados de participação.",
      date: "01/07/2026",
      featured: true,
    },
    {
      id: 2,
      title: "Manutenção do Lab. de Informática 2",
      category: "Aviso",
      description: "Indisponível na sexta 03/07/2026",
      fullDescription: "O Laboratório de Informática 2 passará por manutenção preventiva e corretiva a partir da próxima segunda-feira, dia 20 de julho. Os serviços incluem atualização do sistema operacional, instalação de novos softwares educacionais, verificação e substituição de peças defeituosas, limpeza interna dos computadores, testes de desempenho e organização geral do espaço. O laboratório ficará indisponível para uso durante todo o período, com previsão de reabertura na sexta-feira, dia 24 de julho. Pedimos desculpas pelos transtornos e agradecemos a compreensão de todos. A manutenção é essencial para garantir o bom funcionamento dos equipamentos e oferecer uma melhor experiência de aprendizado para os alunos.",
      author: "CTI/MC",
      date: "01/07/2026",
      featured: false,
    },
  ]);

  function handleToggleFeatured(id) {
    setNotices((notices) =>
      notices.map(
        (notice) =>
          notice.id === id ? { ...notice, featured: !notice.featured } : notice,
      ),
    );
  }

  return (
    <>
      <Header
        title={"Programação para Internet"}
        subtitle={"Curso Técnico Integrado em Informática"}
      />
      <NoticeList notices={notices} onToggleFeatured={handleToggleFeatured} />
    </>
  );
}

export default App;