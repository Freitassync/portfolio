# Portfólio Pessoal - Gabriel Da Silva Freitas

Este é meu portfólio profissional desenvolvido com **React (Create React App)**, com foco em apresentar minhas habilidades como Desenvolvedor Front End e Analista de BI. O projeto é uma Single Page Application (SPA) com navegação dinâmica e layout responsivo.

---

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [React Router DOM](https://reactrouter.com/)
- [EmailJS](https://www.emailjs.com/)
- [GitHub Pages](https://pages.github.com/)
- CSS Puro

---

## 📁 Estrutura do Projeto

```

public/
├── android-chrome-*.png   # Ícones para dispositivos Android
├── apple-touch-icon.png   # Ícone para iOS
├── favicon.*              # Favicon do site
├── index.html             # HTML principal
├── manifest.json          # Manifesto PWA
└── site.webmanifest       # Manifesto web

src/
├── assets/                # Imagens do portfólio
│   ├── Mindfit.png
│   └── Portfolio.png
├── components/            # Componentes reutilizáveis
│   ├── Footer.jsx
│   └── Navbar.jsx
├── pages/                 # Páginas principais
│   ├── Contato.jsx
│   ├── Home.jsx
│   ├── Projetos.jsx
│   └── Sobre.jsx
├── App.jsx                # Definição de rotas da SPA
├── index.css              # Estilos globais com CSS puro
└── index.js               # Ponto de entrada da aplicação

````

---

## 🧭 Funcionalidades

- 🌐 Navegação entre páginas com React Router (SPA)
- 📬 Formulário de contato com envio via EmailJS
- 📱 Layout responsivo com CSS puro
- 🚀 Deploy gratuito via GitHub Pages

---

## 🛠️ Instalação e Execução Local

1. Clone o repositório:

```bash
git clone https://github.com/Freitassync/seu-repositorio.git
cd seu-repositorio
````

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor local:

```bash
npm start
```

---

## 📦 Deploy no GitHub Pages

1. Instale o pacote:

```bash
npm install --save gh-pages
```

2. Configure o `package.json`:

```json
"homepage": "https://freitassync.github.io/seu-repositorio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Realize o deploy:

```bash
npm run deploy
```

---

## 🌐 Acesse o projeto online

[🔗 Clique aqui para acessar via GitHub Pages](https://freitassync.github.io/portfolio)

---

## ✨ Autor

**Gabriel Da Silva Freitas**
[LinkedIn](https://www.linkedin.com/in/freitasbtw) • [GitHub](https://github.com/Freitassync)

---

## 📄 Licença

Este projeto está sob a licença MIT.
