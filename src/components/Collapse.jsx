// Importation des dépendances nécessaires
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../style/collapse.scss";

// Définition du composant Collapse
export default function Collapse({ title, content }) {
  // Utilisation du Hook useState pour gérer l'état de l'affichage du contenu
  const [toggle, setToggle] = useState(false);

  // Rendu du composant
  return (
    <>
      <div className="collapse">
        {/* Affichage du titre et de l'icône qui permet de montrer/cacher le contenu */}
        <h3 className="collapse_title" onClick={() => setToggle(!toggle)}>
          {title}
          <FontAwesomeIcon
            icon={faChevronUp}
            // Rotation de l'icône en fonction de l'état de l'affichage du contenu
            className={`arrow ${toggle ? "rotateDown" : "rotateUp"}`}
          />
        </h3>
        {/* Affichage du contenu en fonction de l'état de l'affichage */}
        <div
          className={toggle ? "collapse_content" : "collapse_content_hidden"}
        >
          {/* Si le contenu est un tableau, chaque élément est affiché dans un paragraphe séparé */}
          {Array.isArray(content) ? (
            content.map((item, index) => {
              return <p key={index}>{item}</p>;
            })
          ) : (
            // Si le contenu n'est pas un tableau, il est affiché tel quel
            <p>{content}</p>
          )}
        </div>
      </div>
    </>
  );
}
