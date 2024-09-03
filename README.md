### Word Hierarchy Builder

🚀 **Word Hierarchy Builder** é um projeto NextJS que permite aos usuários criar, editar e gerenciar hierarquias de palavras de forma interativa e visual. Este projeto utiliza TypeScript e Tailwind CSS para estilização.

## 📋 Índice

- Instalação
- Uso
- [Principais Funcionalidades](#principais-funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- Licença

## 🛠️ Instalação

Para começar a usar o projeto, siga os passos abaixo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/jaumsw/word-hierarchy.git
   cd word-hierarchy
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

## 💻 Uso

Após iniciar o servidor de desenvolvimento, você pode acessar o aplicativo no seu navegador em [`http://localhost:3000`]

## 🌟 Principais Funcionalidades

- **Adicionar Nó Filho:** Adicione um novo nó filho a qualquer nó existente na hierarquia.
- **Adicionar Nó Irmão:** Adicione um novo nó irmão ao lado de qualquer nó existente.
- **Remover Nó:** Remova qualquer nó da hierarquia.
- **Editar Nome do Nó:** Edite o nome de qualquer nó na hierarquia.
- **Fazer Download da  Hierarquia:** Salve a hierarquia atual em um arquivo JSON.

## 📂 Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
word-hierarchy/
├── public/
├── src/
│   ├── app/
│   │   └──global.css
│   │   └──page.tsx
│   ├── components/
│   │   └── WordHierarchy.tsx
│   ├── controllers/
│   │   └── WordHierarchyController.ts
│   ├── model/
│   │   └── WordNode.ts
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

Feito com ❤️ por [João Pedro](https://github.com/jaumsw)
