var buttonNovoEvento = document.getElementById('buttonNovoEvento');
var buttonCancelar = document.getElementById('buttonCancelar');
var novoEvento = document.getElementById('novoEvento');
var formNovoEvento = document.getElementById('formNovoEvento');
var inputNomeEvento = document.getElementById('nomeEvento');
var inputDataEvento = document.getElementById('dataEvento');
var divMensagemErro = document.getElementById('mensagemErro');

function mostrarNovoEvento() {
    novoEvento.classList.remove('d-none');
}

function ocultarNovoEvento() {
    
    novoEvento.classList.add('d-none');
}

function novoEventoValido(nomeEvento, dataEvento) {
    var validacaoOk = true;
    var erro = '';
    if (nomeEvento.trim().length === 0) {
        erro = 'O nome do evento é obrigatório!';
        inputNomeEvento.classList.add('is-invalid');
        validacaoOk = false;
    } else {
        inputNomeEvento.classList.remove('is-invalid');
    }
    var timestampEvento = Date.parse(dataEvento);
    var timestampAtual = (new Date()).getTime();
    if (isNaN(timestampEvento) || timestampEvento < timestampAtual) {
        if (erro.length > 0) {
            erro += '<br>'
        }
        erro += 'A data do evento é obrigatória e deve estar no futuro!';
        inputDataEvento.classList.add('is-invalid');
        validacaoOk = false;
    } else {
        inputDataEvento.classList.remove('is-invalid');
    }

    if (!validacaoOk) {
        divMensagemErro.innerHTML = erro;
        divMensagemErro.classList.remove('d-none');
    } else {
        divMensagemErro.classList.add('d-none');
        let tbody_content_tarefas = document.getElementById('tbody_content_tarefas')
        let d = new Date(dataEvento)

        let dia  = d.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (d.getMonth()+1).toString(),
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = d.getFullYear();
        let data_c = diaF+"/"+mesF+"/"+anoF;

        if(tbody_content_tarefas.children[0].textContent.trim() === 'Nenhum evento'){
            tbody_content_tarefas.innerHTML = '<td>' + data_c + '</td><td>' + nomeEvento + '</td><td></td>'
        } else{
            tbody_content_tarefas.innerHTML += '<td>' + data_c + '</td><td>' + nomeEvento + '</td><td></td>'
        }
    }

    return validacaoOk;
}

function salvarNovoEvento(event) {
    event.preventDefault();
    var nomeEvento = inputNomeEvento.value;
    var dataEvento = inputDataEvento.value;
    novoEventoValido(nomeEvento, dataEvento)
}

buttonNovoEvento.addEventListener('click', mostrarNovoEvento);
buttonCancelar.addEventListener('click', ocultarNovoEvento);
formNovoEvento.addEventListener('submit', salvarNovoEvento);