// script.js
async function cadastrarPessoa() { 
    //Código da função cadastrar pessoa
await loadPyodide({ indexURL : 'pyodide/' }); 
await pyodide.loadPackage('requests'); 
const nome = document.getElementById('nome').value; 
const sobrenome = document.getElementById('sobrenome').value;
const email = document.getElementById('email').value;
const telefone = document.getElementById('telefone').value;
const idade = document.getElementById('idade').value;
const tipopessoa = document.getElementById('tipopessoa').value;
const numcadastro = document.getElementById('numcadastro').value; 
const response = await pyodide.runPythonAsync(`
        import requests url = 'http://localhost:5000/cadastro' 
        data = {'nome': '${nome}','sobrenome': '${sobrenome}','email':'${telefone}','idade': '${tipocadastro}' , 'idade': '${idade}'} 
        response = requests.post(url, data=data) response.text`);
       alert(response); } 

// validações

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeInput = document.getElementById('nome');
    const sobrenomeInput = document.getElementById('sobrenome');
    const emailInput = document.getElementById('email');
    const telefoneInput = document.getElementById('telefone');
    const idadeInput = document.getElementById('idade');
    const tipopessoaInput = document.getElementById('tipopessoa');
    const numcadastroInput = document.getElementById('numcadastro');
    const resultadoDiv = document.getElementById('resultado');

    if (nomeInput.value.trim() === '') {
        nomeInput.classList.add('is-invalid');
        return;
    } else {
        nomeInput.classList.remove('is-invalid');
    }

    if (sobrenomeInput.value.trim() === '') {
        sobrenomeInput.classList.add('is-invalid');
        return;
    } else {
        sobrenomeInput.classList.remove('is-invalid');
    }

    if (emailInput.value.trim() === '') {
        emailInput.classList.add('is-invalid');
        return;
    } else {
        emailInput.classList.remove('is-invalid');
    }

    if (!telefoneInput.value.match(/^\d{2} \d{4,5}-\d{4}$/)) {
        telefoneInput.classList.add('is-invalid');
        return;
    } else {
        telefoneInput.classList.remove('is-invalid');
    }

    if (idadeInput.value < 0 || idadeInput.value > 99) {
        idadeInput.classList.add('is-invalid');
        return;
    } else {
        idadeInput.classList.remove('is-invalid');
    }

    if (tipopessoaInput.value === '') {
        tipopessoaInput.classList.add('is-invalid');
        return;
    } else {
        tipopessoaInput.classList.remove('is-invalid');
    }

    if (!numcadastroInput.value.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/)) {
        numcadastroInput.classList.add('is-invalid');
        return;
    } else {
        numcadastroInput.classList.remove('is-invalid');
    }

    // Aqui você pode adicionar o código para enviar os dados do formulário para o backend e processar o resultado.
    // Por exemplo:
    resultadoDiv.innerHTML = `Cadastro realizado com sucesso para ${nomeInput.value} ${sobrenomeInput.value}!`;
    resultadoDiv.classList.add('text-success');
    setTimeout(() => {
        resultadoDiv.innerHTML = '';
        resultadoDiv.classList.remove('text-success');
    }, 3000);
});