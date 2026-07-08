document.addEventListener('DOMContentLoaded', () => {
    // 1. Referências aos elementos HTML
    const formAluno = document.getElementById('form-aluno');
    const listaAlunosCadastrados = document.getElementById('lista-alunos-cadastrados');
    const pesquisaAlunoInput = document.getElementById('pesquisaAluno');
    const detalhesAlunoDiv = document.getElementById('detalhes-aluno');
    const cancelarCadastroBtn = document.getElementById('cancelarCadastro');

    // Array para armazenar os alunos. Tentamos carregar do localStorage ou inicializamos vazio.
    let students = JSON.parse(localStorage.getItem('students')) || [];

    // Função para gerar dados aleatórios para os alunos iniciais
    function generateRandomStudent(name) {
        const courses = ['Informática', 'Eletrotécnica', 'Mecânica', 'Automação Industrial', 'Edificações'];
        const shifts = ['Manhã', 'Tarde', 'Noite'];
        const genders = ['Masculino', 'Feminino', 'Não Binário'];
        const randomDate = (start, end) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0];

        return {
            id: Date.now() + Math.floor(Math.random() * 1000), // ID único
            nomeCompleto: name,
            dataNascimento: randomDate(new Date(2000, 0, 1), new Date(2006, 11, 31)),
            cpf: Math.floor(Math.random() * 999) + '.' + Math.floor(Math.random() * 999) + '.' + Math.floor(Math.random() * 999) + '-' + Math.floor(Math.random() * 99),
            rg: Math.floor(Math.random() * 99) + '.' + Math.floor(Math.random() * 999) + '.' + Math.floor(Math.random() * 999) + '-' + Math.floor(Math.random() * 9),
            sexoGenero: genders[Math.floor(Math.random() * genders.length)],
            nacionalidade: 'Brasileira',
            email: name.toLowerCase().replace(/\s/g, '.') + '@example.com',
            telefone: '(XX) XXXX-XXXX'.replace(/X/g, () => Math.floor(Math.random() * 10)),
            celular: '(XX) 9XXXX-XXXX'.replace(/X/g, () => Math.floor(Math.random() * 10)),
            endereco: 'Rua Aleatória, ' + Math.floor(Math.random() * 1000),
            cidade: 'Cidade Fictícia',
            estado: 'UF',
            cep: Math.floor(Math.random() * 99999) + '-' + Math.floor(Math.random() * 999),
            matricula: 'SENAI' + Math.floor(Math.random() * 100000),
            curso: courses[Math.floor(Math.random() * courses.length)],
            serieAno: Math.floor(Math.random() * 3) + 1 + 'º Ano',
            turma: 'A' + Math.floor(Math.random() * 5),
            turno: shifts[Math.floor(Math.random() * shifts.length)],
            dataMatricula: randomDate(new Date(2023, 0, 1), new Date()),
            nomeResponsavel: Math.random() > 0.5 ? 'Responsável ' + name : '',
            parentesco: Math.random() > 0.5 ? 'Pai/Mãe' : '',
            telefoneResponsavel: Math.random() > 0.5 ? '(XX) XXXX-XXXX'.replace(/X/g, () => Math.floor(Math.random() * 10)) : '',
            emailResponsavel: Math.random() > 0.5 ? 'responsavel.' + name.toLowerCase().replace(/\s/g, '.') + '@example.com' : '',
            deficiencia: Math.random() > 0.8 ? 'Sim' : 'Não',
            atendimentoEspecial: Math.random() > 0.8 ? 'Necessita de apoio pedagógico' : '',
            alergias: Math.random() > 0.9 ? 'Amendoim' : '',
            observacoes: 'Aluno dedicado.',
            termosUso: true,
            autorizarImagem: Math.random() > 0.5,
        };
    }

    // Se não houver alunos no localStorage, adiciona os 5 iniciais
    if (students.length === 0) {
        const initialStudentsNames = ['Luiz André', 'André', 'Renata', 'Daiane', 'Everton'];
        students = initialStudentsNames.map(name => generateRandomStudent(name));
        saveStudents();
    }

    // 2. Salvar alunos no localStorage
    function saveStudents() {
        localStorage.setItem('students', JSON.stringify(students));
    }

    // 3. Renderizar a lista de alunos
    function renderStudentList(filter = '') {
        listaAlunosCadastrados.innerHTML = ''; // Limpa a lista antes de renderizar
        const ul = document.createElement('ul');

        const filteredStudents = students.filter(student =>
            student.nomeCompleto.toLowerCase().includes(filter.toLowerCase())
        );

        if (filteredStudents.length === 0) {
            ul.innerHTML = '<li style="text-align: center; padding: 15px;">Nenhum aluno encontrado.</li>';
        } else {
            filteredStudents.forEach(student => {
                const li = document.createElement('li');
                li.dataset.id = student.id; // Armazena o ID do aluno no elemento li
                li.innerHTML = `
                    <span>${student.nomeCompleto} (${student.matricula})</span>
                    <button class="delete-btn" title="Excluir Aluno"><i class="fas fa-trash-alt"></i></button>
                `;
                ul.appendChild(li);
            });
        }
        listaAlunosCadastrados.appendChild(ul);
        detalhesAlunoDiv.style.display = 'none'; // Esconde os detalhes ao re-renderizar a lista
    }

    // 4. Exibir detalhes do aluno
    function displayStudentDetails(studentId) {
        const student = students.find(s => s.id == studentId);
        if (!student) {
            detalhesAlunoDiv.style.display = 'none';
            return;
        }

        detalhesAlunoDiv.innerHTML = `
            <h4>Detalhes do Aluno: ${student.nomeCompleto}</h4>
            <p><strong>Matrícula:</strong> ${student.matricula}</p>
            <p><strong>Curso:</strong> ${student.curso}</p>
            <p><strong>Turno:</strong> ${student.turno}</p>
            <p><strong>Data de Nascimento:</strong> ${student.dataNascimento}</p>
            <p><strong>CPF:</strong> ${student.cpf || 'Não informado'}</p>
            <p><strong>RG:</strong> ${student.rg || 'Não informado'}</p>
            <p><strong>Sexo/Gênero:</strong> ${student.sexoGenero}</p>
            <p><strong>Nacionalidade:</strong> ${student.nacionalidade}</p>
            <p><strong>E-mail:</strong> ${student.email}</p>
            <p><strong>Celular:</strong> ${student.celular}</p>
            <p><strong>Endereço:</strong> ${student.endereco}, ${student.cidade} - ${student.estado}, CEP: ${student.cep}</p>
            <p><strong>Série/Ano:</strong> ${student.serieAno}</p>
            <p><strong>Turma:</strong> ${student.turma}</p>
            <p><strong>Data de Matrícula:</strong> ${student.dataMatricula}</p>
            ${student.nomeResponsavel ? `<p><strong>Responsável:</strong> ${student.nomeResponsavel} (${student.parentesco})</p>` : ''}
            ${student.telefoneResponsavel ? `<p><strong>Tel. Responsável:</strong> ${student.telefoneResponsavel}</p>` : ''}
            ${student.emailResponsavel ? `<p><strong>Email Responsável:</strong> ${student.emailResponsavel}</p>` : ''}
            <p><strong>Possui Deficiência:</strong> ${student.deficiencia}</p>
            ${student.atendimentoEspecial ? `<p><strong>Atendimento Especial:</strong> ${student.atendimentoEspecial}</p>` : ''}
            ${student.alergias ? `<p><strong>Alergias:</strong> ${student.alergias}</p>` : ''}
            ${student.observacoes ? `<p><strong>Observações:</strong> ${student.observacoes}</p>` : ''}
            <p><strong>Termos de Uso Aceitos:</strong> ${student.termosUso ? 'Sim' : 'Não'}</p>
            <p><strong>Autoriza Uso de Imagem:</strong> ${student.autorizarImagem ? 'Sim' : 'Não'}</p>
        `;
        detalhesAlunoDiv.style.display = 'block';

        // Remove a classe 'selected' de todos os itens e adiciona ao item clicado
        document.querySelectorAll('.lista-alunos li').forEach(item => {
            item.classList.remove('selected');
        });
        document.querySelector(`.lista-alunos li[data-id="${studentId}"]`).classList.add('selected');
    }

    // 5. Adicionar novo aluno
    formAluno.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o recarregamento da página

        const newStudent = {
            id: Date.now(), // ID único baseado no timestamp
            nomeCompleto: document.getElementById('nomeCompleto').value,
            dataNascimento: document.getElementById('dataNascimento').value,
            cpf: document.getElementById('cpf').value,
            rg: document.getElementById('rg').value,
            sexoGenero: document.getElementById('sexoGenero').value,
            nacionalidade: document.getElementById('nacionalidade').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            celular: document.getElementById('celular').value,
            endereco: document.getElementById('endereco').value,
            cidade: document.getElementById('cidade').value,
            estado: document.getElementById('estado').value,
            cep: document.getElementById('cep').value,
            matricula: document.getElementById('matricula').value,
            curso: document.getElementById('curso').value,
            serieAno: document.getElementById('serieAno').value,
            turma: document.getElementById('turma').value,
            turno: document.querySelector('input[name="turno"]:checked').value,
            dataMatricula: document.getElementById('dataMatricula').value,
            nomeResponsavel: document.getElementById('nomeResponsavel').value,
            parentesco: document.getElementById('parentesco').value,
            telefoneResponsavel: document.getElementById('telefoneResponsavel').value,
            emailResponsavel: document.getElementById('emailResponsavel').value,
            deficiencia: document.querySelector('input[name="deficiencia"]:checked').value,
            atendimentoEspecial: document.getElementById('atendimentoEspecial').value,
            alergias: document.getElementById('alergias').value,
            observacoes: document.getElementById('observacoes').value,
            termosUso: document.getElementById('termosUso').checked,
            autorizarImagem: document.getElementById('autorizarImagem').checked,
        };

        students.push(newStudent);
        saveStudents();
        renderStudentList();
        formAluno.reset(); // Limpa o formulário após o cadastro
        alert('Aluno cadastrado com sucesso!');
    });

    // 6. Pesquisar aluno
    pesquisaAlunoInput.addEventListener('input', (event) => {
        renderStudentList(event.target.value);
    });

    // 7. Excluir aluno e exibir detalhes ao clicar
    listaAlunosCadastrados.addEventListener('click', (event) => {
        const li = event.target.closest('li');
        if (!li) return; // Clicou fora de um item da lista

        const studentId = li.dataset.id;

        if (event.target.classList.contains('delete-btn') || event.target.closest('.delete-btn')) {
            // Clicou no botão de excluir
            if (confirm('Tem certeza que deseja excluir este aluno?')) {
                students = students.filter(student => student.id != studentId);
                saveStudents();
                renderStudentList(pesquisaAlunoInput.value);
                detalhesAlunoDiv.style.display = 'none'; // Esconde os detalhes após exclusão
            }
        } else {
            // Clicou no nome do aluno para ver detalhes
            displayStudentDetails(studentId);
        }
    });

    // 8. Botão Cancelar
    cancelarCadastroBtn.addEventListener('click', () => {
        formAluno.reset();
        detalhesAlunoDiv.style.display = 'none';
        // Opcional: rolar para o topo ou para a seção de consulta
        // document.getElementById('consulta-alunos').scrollIntoView({ behavior: 'smooth' });
    });

    // Renderiza a lista inicial de alunos ao carregar a página
    renderStudentList();
});
