import { useState } from "react";
import "./NoticeCard.css";

function NoticeCard({ notice, onToggleFeatured, onDeleteNotice }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article className={`notice-card ${notice.featured && "featured"}`}>
      <p>{notice.category}</p>
      <h3>{notice.title}</h3>
      <p>{notice.description}</p>
      <div className="notice-meta">
        <span>Por: {notice.author}</span>
        <span>Data: {notice.date}</span>
      </div>

      <div className="notice-actions">
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Fechar detalhes" : "Exibir detalhes"}
        </button>
        <button onClick={() => onToggleFeatured(notice.id)}>
          {notice.featured ? "Remover destaque" : "Destacar"}
        </button>
        <button onClick={() => onDeleteNotice(notice.id)}>
          Excluir
        </button>
      </div>

      {showDetails && (
        <div className="notice-full-description">
          <p>{notice.fullDescription}</p>
        </div>
      )}
    </article>
);
}

export default NoticeCard;