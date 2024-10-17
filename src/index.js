import React from 'react';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import App from './App';

// Sélectionne un élément Dom avec Id root pour afficher le rendu
const rootElement = document.getElementById('root');
// Crée un conteneur racine là ou l'appli sera rendue
const root = createRoot(rootElement);

// Rend le composant App
root.render(
  // Outil qui met en évidence les problèmes potentiels dans le dev
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// Fonction qui mesure les performances de l'appli
reportWebVitals();
