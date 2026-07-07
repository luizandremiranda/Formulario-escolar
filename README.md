# 🎓 Sistema de Cadastro de Alunos - SENAI

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-blue)
![HTML5](https://img.shields.io/badge/HTML5-orange)
![CSS3](https://img.shields.io/badge/CSS3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow)

## 📌 Sobre o Projeto

O **Sistema de Cadastro de Alunos SENAI** é uma aplicação web desenvolvida com **HTML, CSS e JavaScript**, com o objetivo de simular um sistema de gerenciamento escolar.

O projeto permite realizar o cadastro completo de alunos, consultar informações cadastradas, pesquisar alunos pelo nome, visualizar detalhes e excluir registros.

Os dados são armazenados diretamente no navegador utilizando **LocalStorage**, permitindo que as informações permaneçam salvas mesmo após fechar a página.

Este projeto foi desenvolvido como prática de aprendizado em **Desenvolvimento Front-End**, aplicando conceitos fundamentais utilizados no mercado de tecnologia.

---

# 🚀 Funcionalidades

## 👨‍🎓 Cadastro de Alunos

O sistema possui um formulário completo dividido em categorias:

- Dados pessoais
- Informações de contato
- Endereço
- Dados escolares
- Informações do responsável
- Necessidades especiais
- Observações adicionais

---

## 🔎 Consulta de Alunos

O usuário pode:

- Visualizar alunos cadastrados
- Pesquisar alunos pelo nome
- Selecionar um aluno da lista
- Visualizar todas as informações cadastradas
- Excluir registros

---

## 💾 Armazenamento de Dados

O projeto utiliza:

### LocalStorage

Os dados cadastrados são armazenados no navegador:

```javascript
localStorage.setItem()
localStorage.getItem()
