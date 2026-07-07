/* style.css */

/* Variáveis CSS para as cores do SENAI */
:root {
    --senai-blue: #004a8f; /* Azul escuro */
    --senai-red: #e30022;  /* Vermelho */
    --senai-light-blue: #007bff; /* Azul mais claro para detalhes */
    --senai-gray: #f8f9fa; /* Cinza claro para fundos */
    --senai-dark-gray: #343a40; /* Cinza escuro para textos */
    --senai-white: #ffffff;
    --senai-black: #212529;
}

/* Estilos globais e reset */
body {
    font-family: 'Roboto', sans-serif; /* Fonte moderna e legível */
    margin: 0;
    padding: 0;
    background-color: var(--senai-gray);
    color: var(--senai-dark-gray);
    line-height: 1.6;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
}

/* Cabeçalho */
header {
    background-color: var(--senai-blue);
    color: var(--senai-white);
    padding: 10px 0;
    border-bottom: 5px solid var(--senai-red);
    text-align: center;
}

header .container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.logo-senai {
    height: 60px; /* Ajuste o tamanho do logo conforme necessário */
}

header h1 {
    margin: 0;
    font-size: 2.2em;
    color: var(--senai-white);
}

/* Main Content */
main {
    padding: 40px 0;
}

section {
    background-color: var(--senai-white);
    padding: 30px;
    margin-bottom: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

section h2 {
    color: var(--senai-blue);
    text-align: center;
    margin-bottom: 25px;
    font-size: 1.8em;
    border-bottom: 2px solid var(--senai-red);
    padding-bottom: 10px;
}

section h3 {
    color: var(--senai-dark-gray);
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 1.4em;
}

/* Formulário */
.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: var(--senai-dark-gray);
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="tel"],
.form-group input[type="date"],
.form-group select,
.form-group textarea {
    width: calc(100% - 22px); /* Considerando padding e border */
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 1em;
    box-sizing: border-box; /* Inclui padding e border na largura total */
}

.form-group input[type="text"]:focus,
.form-group input[type="email"]:focus,
.form-group input[type="tel"]:focus,
.form-group input[type="date"]:focus,
.form-group select:focus,
.form-group textarea:focus {
    border-color: var(--senai-light-blue);
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); /* Efeito de foco */
    outline: none;
}

.radio-group,
.checkbox-group {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
}

.radio-group label,
.checkbox-group label {
    margin-bottom: 0;
    font-weight: normal;
}

.radio-group input[type="radio"],
.checkbox-group input[type="checkbox"] {
    margin-right: 5px;
}

/* Botões */
.form-actions {
    margin-top: 30px;
    text-align: center;
}

.form-actions button {
    background-color: var(--senai-blue);
    color: var(--senai-white);
    border: none;
    padding: 12px 25px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.1em;
    margin: 0 10px;
    transition: background-color 0.3s ease;
}

.form-actions button:hover {
    background-color: #003366; /* Tom mais escuro do azul */
}

.form-actions button[type="reset"] {
    background-color: #6c757d; /* Cinza para o botão Limpar */
}

.form-actions button[type="reset"]:hover {
    background-color: #5a6268;
}

#cancelarCadastro {
    background-color: var(--senai-red);
}

#cancelarCadastro:hover {
    background-color: #b2001a;
}

/* Seção de Consulta de Alunos */
#consulta-alunos .form-group {
    display: flex;
    align-items: center;
    gap: 10px;
}

#consulta-alunos .form-group label {
    flex-shrink: 0;
}

#pesquisaAluno {
    flex-grow: 1;
}

.lista-alunos {
    margin-top: 20px;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    max-height: 300px;
    overflow-y: auto;
}

.lista-alunos ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.lista-alunos li {
    padding: 12px 15px;
    border-bottom: 1px solid #e9ecef;
    cursor: pointer;
    transition: background-color 0.2s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.lista-alunos li:last-child {
    border-bottom: none;
}

.lista-alunos li:hover {
    background-color: #e2f0ff; /* Azul claro ao passar o mouse */
}

.lista-alunos li.selected {
    background-color: var(--senai-light-blue);
    color: var(--senai-white);
}

.lista-alunos li.selected .delete-btn {
    color: var(--senai-white);
}

.delete-btn {
    background: none;
    border: none;
    color: var(--senai-red);
    cursor: pointer;
    font-size: 1.2em;
    transition: color 0.2s ease;
}

.delete-btn:hover {
    color: #b2001a;
}

.detalhes-aluno {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    background-color: #f1f7fc; /* Fundo azul claro para detalhes */
    display: none; /* Escondido por padrão, será exibido via JS */
}

.detalhes-aluno h4 {
    color: var(--senai-blue);
    margin-bottom: 15px;
    border-bottom: 1px dashed #ced4da;
    padding-bottom: 5px;
}

.detalhes-aluno p {
    margin-bottom: 8px;
}

.detalhes-aluno p strong {
    color: var(--senai-dark-gray);
}

/* Rodapé */
footer {
    background-color: var(--senai-dark-gray);
    color: var(--senai-white);
    text-align: center;
    padding: 20px 0;
    margin-top: 40px;
}

footer p {
    margin: 0;
    font-size: 0.9em;
}

/* Responsividade básica */
@media (max-width: 768px) {
    header .container {
        flex-direction: column;
        gap: 10px;
    }

    header h1 {
        font-size: 1.8em;
    }

    .form-actions button {
        width: 100%;
        margin: 10px 0;
    }

    .radio-group, .checkbox-group {
        flex-direction: column;
        align-items: flex-start;
    }
}
