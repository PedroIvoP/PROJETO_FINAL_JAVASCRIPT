// ####### EXIBIÇÃO DE DIVS DO NAVBAR #######
for (let i = 1; i < document.getElementsByClassName('esconde').length; i++) {

    document.getElementsByClassName('esconde')[i].style.display = "none"
}

function exibe(id) {

    for (let i = 0; i < document.getElementsByClassName('esconde').length; i++) {

        document.getElementsByClassName('esconde')[i].style.display = "none"
    }

    document.getElementById(id).style.display = "block";

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ####### CLASS CLIENTE #######
class Cliente {

    id;
    nome;
    telefone;
    email;
    cpf;
    sexo;

    constructor(id, nome, telefone, email, cpf, sexo) {

        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.cpf = cpf;
        this.sexo = sexo;
    }

    imprime() {

        let dados = "";

        dados = "ID: " + this.id + "<br/>" +
            "Nome: " + this.nome + "<br/>" +
            "Telefone: " + this.telefone + "<br/>" +
            "Email: " + this.email + "<br/>" +
            "CPF: " + this.cpf + "<br/>" +
            "Sexo: " + this.sexo + "<br/>";

        return dados;
    }
}

// ####### OBTENDO SEXO DO CLIENTE #######
function SexoCliente() {

    if (document.getElementsByName("sexo")[0].checked) {

        return "Masculino";
    } else {

        return "Feminino";
    }
}


// ####### ARMAZENAMENTO DOS DADOS DOS CLIENTE #######
let ArrayClientes = []


// ####### GERANDO Nº DE ID DO CLIENTE #######
let contCliente = 1;
var data = new Date();
let anoAtual = data.getFullYear();
//  ^^^^^^^^ a variável "anoAtual", será usada em todos os IDs

// ####### CADASTRANDO CLIENTE #######
function SubCliente() {

    if (document.getElementById("IdNome").value === "" || document.getElementById("IdTel").value === "" || document.getElementById("IdMail").value === "" || document.getElementById("IdCpf").value === "") {

        window.alert("PREENCHA TODOS OS CAMPOS!");
    } else {

        ArrayClientes.push(new Cliente("C" + contCliente++ + "." + anoAtual, document.getElementById("IdNome").value, document.getElementById("IdTel").value, document.getElementById("IdMail").value, document.getElementById("IdCpf").value, SexoCliente()))

        window.alert("CLIENTE CADASTRADO COM SUCESSO!");
        document.clienteForm.reset()
    }


}

// ####### LIMPANDO O FORMULÁRIO DO CLIENTE #######
function LimpaFormCliente() {

    document.clienteForm.reset()
}

// ####### EXIBINDO CLIENTES CADASTRADOS #######
function ExibCliente() {

    let impressao = "";

    for (let i = 0; i < ArrayClientes.length; i++) {

        impressao += "<div class='container colab'>" +
            ArrayClientes[i].imprime() +
            "</div>"
    }

    document.getElementById("ExibeCliente").innerHTML = impressao;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ####### CLASS FUNCIONÁRIO #######
class Funcionario {

    id;
    nome;
    telefone;
    email;
    cpf;
    sexo;
    filiacaoPai;
    filiacaoMae;
    endereco;

    constructor(id, nome, telefone, email, cpf, sexo, filiacaoPai, filiacaoMae, endereco) {

        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.cpf = cpf;
        this.sexo = sexo;
        this.filiacaoPai = filiacaoPai;
        this.filiacaoMae = filiacaoMae;
        this.endereco = endereco;
    }

    imprime() {

        let dados = "";

        dados = "ID: " + this.id + "<br/>" +
            "Nome: " + this.nome + "<br/>" +
            "Telefone: " + this.telefone + "<br/>" +
            "Email: " + this.email + "<br/>" +
            "CPF: " + this.cpf + "<br/>" +
            "Sexo: " + this.sexo + "<br/>" +
            "Nome do Pai: " + this.filiacaoPai + "<br/>" +
            "Nome da Mãe: " + this.filiacaoMae + "<br/>" +
            "Endereço: " + this.endereco + "<br/>";

        return dados;
    }
}

// ####### OBTENDO SEXO DO FUNCIONÁRIO #######
function SexoFuncionario() {

    if (document.getElementsByName("sexoFunc")[0].checked) {

        return "Masculino";
    } else {

        return "Feminino";
    }
}

// ####### ARMAZENAMENTO DOS DADOS DOS FUNCIONÁRIOS #######
let ArrayFuncionarios = []

// ####### GERANDO Nº DE ID DO CLIENTE #######
let contFunc = 1;

// ####### CADASTRANDO CLIENTE #######
function SubFuncionarios() {

    if (document.getElementById("IdNomeFunc").value === "" || document.getElementById("IdTelFunc").value === "" || document.getElementById("IdMailFunc").value === "" || document.getElementById("IdCpfFunc") === "" || document.getElementById("IdFiliacaoPai").value === "" || document.getElementById("IdFiliacaoMae").value === "" || document.getElementById("IdEndereco").value === "") {

        window.alert("PREENCHA TODOS OS CAMPOS!");
    } else {

        ArrayFuncionarios.push(new Funcionario("F" + contFunc++ + "." + anoAtual, document.getElementById("IdNomeFunc").value, document.getElementById("IdTelFunc").value, document.getElementById("IdMailFunc").value, document.getElementById("IdCpfFunc").value, SexoFuncionario(), document.getElementById("IdFiliacaoPai").value, document.getElementById("IdFiliacaoMae").value, document.getElementById("IdEndereco").value))

        window.alert("FUNCIONÁRIO CADASTRADO COM SUCESSO!");
        document.funcionarioForm.reset()
    }


}

// ####### LIMPANDO O FORMULÁRIO DO FUNCIONÁRIO #######
function LimpaFormFuncionario() {

    document.funcionarioForm.reset()
}

// ####### EXIBINDO FUNCIONARIOS CADASTRADOS #######
function ExibFuncionario() {

    let impressao = "";

    for (let i = 0; i < ArrayFuncionarios.length; i++) {

        impressao += "<div class='container colab'>" +
            ArrayFuncionarios[i].imprime() +
            "</div>"
    }

    document.getElementById("ExibeFuncionario").innerHTML = impressao;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ####### CLASS LIVRO ######
class Livro {

    id;
    titulo;
    autor;
    genero;
    preco;
    qtdExemplares;
    editora;
    anoLancamento;
    idioma;

    constructor(id, titulo, autor, genero, preco, qtdExemplares, editora, anoLancamento, idioma) {

        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.preco = preco;
        this.qtdExemplares = qtdExemplares;
        this.editora = editora;
        this.anoLancamento = anoLancamento;
        this.idioma = idioma;
    }

    imprime() {

        let dados = "";

        dados = "ID: " + this.id + "<br/>" +
            "Titulo: " + this.titulo + "<br/>" +
            "Autor: " + this.autor + "<br/>" +
            "Gênero: " + this.genero + "<br/>" +
            "Preço: R$" + this.preco + "<br/>" +
            "Qtd de Exemplares: " + this.qtdExemplares + "<br/>" +
            "Editora: " + this.editora + "<br/>" +
            "Ano Lançamento: " + this.anoLancamento + "<br/>" +
            "Idioma: " + this.idioma + "<br/>";

        return dados;
    }
}

// ####### AUMENTANDO E DIMINUINDO O Nº DE AUTORES E GÊNERO #######
var contadorAutor = 1;
var contadorDivAutor = 3;

function addAutor() {

    let formulario = document.getElementById("insereDiv");

    let topicos = formulario.children;


    let novaDiv = document.createElement("div")

    novaDiv.setAttribute("class", "form-group remocaoAutor")

    novaDiv.innerHTML = '<label class="col-md-4 control-label" for="IdAutor' + contadorAutor++ + '">Autor:</label> <div class="row"> <div class="col-md-9">' + '<input id="IdAutor' + contadorAutor++ + '" name="IdAutor" type="text" placeholder="Digite Aqui" class="form-control input-md" required="">' + '</div>' + '<div class="col-md-1">' + '<span class="material-icons green" onclick="addAutor()">' + 'control_point' + '</span> </div> <div class="col-md-1">' + '<span class="material-icons red"' + 'onclick="apagarAutor()">remove_circle_outline</' + 'span></div></div></div></div>';

    formulario.insertBefore(novaDiv, topicos[contadorDivAutor++])

}

function apagarAutor() {
    let Autores = document.getElementsByClassName("remocaoAutor");

    Autores[Autores.length - 1].remove();

    contadorDivAutor--;
}


var contadorGenero = 1;
var contadorDivGenero = 3;

function addGenero() {

    var contadorDivGenero = document.getElementsByName("IdAutor").length + 3;

    let formulario = document.getElementById("insereDiv");

    let topicos = formulario.children;


    let novaDiv = document.createElement("div")

    novaDiv.setAttribute("class", "form-group remocaoGenero")

    novaDiv.innerHTML = '<label class="col-md-4 control-label" for="IdGenero' + contadorGenero++ + '">Gênero:</label> <div class="row"> <div class="col-md-9">' + '<input id="IdGenero' + contadorGenero++ + '" name="IdGenero" type="text" placeholder="Digite Aqui" class="form-control input-md" required="">' + '</div>' + '<div class="col-md-1">' + '<span class="material-icons green" onclick="addGenero()">' + 'control_point' + '</span> </div> <div class="col-md-1">' + '<span class="material-icons red"' + 'onclick="apagarGenero()">remove_circle_outline</' + 'span></div></div></div></div>';

    formulario.insertBefore(novaDiv, topicos[contadorDivGenero++])

}

function apagarGenero() {
    let Generos = document.getElementsByClassName("remocaoGenero");

    Generos[Generos.length - 1].remove();

    contadorDivGenero--;
}

// ####### ARMAZENAMENTO OS DADOS DOS LIVROS #######
let ArrayLivros = []

// ####### GERANDO Nº DE ID DO LIVRO #######
let contLivro = 1;

// ####### COLETANDO TODOS OS AUTORES E GENEROS CADASTRADOS #######
function ColetandoDados(name) {

    let armazena = "";

    for (let i = 0; i < document.getElementsByName(name).length - 1; i++) {

        armazena += document.getElementsByName(name)[i].value + ", ";
    }

    armazena += document.getElementsByName(name)[document.getElementsByName(name).length - 1].value + ".";

    return armazena;
}

// ####### CADASTRANDO LIVROS #######
function subLivros() {

    if (document.getElementById("IdTitulo").value === "" || document.getElementsByName("IdAutor")[0] === "" || document.getElementsByName("IdGenero")[0] === "" || document.getElementById("IdPreco").value === "" || document.getElementById("IdUnidade").value === "" || document.getElementById("IdEditora").value === "" || document.getElementById("IdAno").value === "" || document.getElementById("IdIdioma").value === "") {

        window.alert("PREENCHA TODOS OS CAMPOS!");
    } else {

        ArrayLivros.push(new Livro("L" + contLivro++ + "." + anoAtual, document.getElementById("IdTitulo").value, ColetandoDados("IdAutor"), ColetandoDados("IdGenero"), Number(document.getElementById("IdPreco").value), Number(document.getElementById("IdUnidade").value), document.getElementById("IdEditora").value, document.getElementById("IdAno").value, document.getElementById("IdIdioma").value))

        window.alert("LIVRO CADASTRADO COM SUCESSO!");
        document.livrosForm.reset();
    }




    // ################## REMOVER OS CAMPOS EXTRAS ADICIONADOS PELO USUÁRIO. #########################
    for (let j = document.getElementsByClassName("remocaoAutor").length - 1; j >= 0; j--) {

        document.getElementsByClassName("remocaoAutor")[j].remove();

    }

    contadorDivAutor = 3;

    for (let j = document.getElementsByClassName("remocaoGenero").length - 1; j >= 0; j--) {

        document.getElementsByClassName("remocaoGenero")[j].remove();

    }
}

// ####### LIMPANDO O FORMULÁRIO DO LIVRO #######
function LimpaFormLivro() {

    document.livrosForm.reset();
}

// ####### EXIBINDO LIVROS CADASTRADOS #######
function ExibLivro() {

    let impressao = "";

    for (let i = 0; i < ArrayLivros.length; i++) {

        if (ArrayLivros[i].qtdExemplares > 0) {

            impressao += "<div class='container colab'>" +
                ArrayLivros[i].imprime() +
                "</div>"
        }


    }

    document.getElementById("ExibeLivro").innerHTML = impressao;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ####### CLASS VENDA ######
class Venda {

    funcionario;
    cliente;
    livroUnidades;
    valorCompra;

    constructor(funcionario, cliente, livroUnidades, valorCompra) {

        this.funcionario = funcionario;
        this.cliente = cliente;
        this.livroUnidades = livroUnidades;
        this.valorCompra = valorCompra;

    }

    imprime() {

        let dados = "";

        dados = "Funcionário(Matricula): " + this.funcionario + "<br/>" +
            "Cliente(CPF): " + this.cliente + "<br/>" +
            "Livro(Unidades Vendidas): " + this.livroUnidades + "<br/>" +
            "Valor da Venda: R$" + this.valorCompra + "<br/>";

        return dados;
    }
}

// ####### AUMENTANDO E DIMINUINDO O Nº DE UNIDADES VENDIDAS #######
var contadorVenda = 1;
var contadorDivVenda = 5;

function addVenda() {

    let formulario = document.getElementById("InsereDivVenda");

    let topicos = formulario.children;


    let novaDiv = document.createElement("div")

    novaDiv.setAttribute("class", "form-group remocaoVenda")

    novaDiv.innerHTML = '<label class="col-md-4 control-label" for="IdMatLivro' + contadorVenda + '">ID do Livro:</label> <div class="row"> <div class="col-md-4">' + '<input id="IdMatLivro' + contadorVenda + '" name="IdMatLivro" type="text" placeholder="Digite Aqui" class="form-control input-md" required=""  onchange="validaLivro()">' + '</div>' + '<div class="col-md-1">' + '<span class="material-icons green" onclick="addVenda()">' + 'control_point' + '</span> </div> <div class="col-md-1">' + '<span class="material-icons red"' + 'onclick="apagarVenda()">remove_circle_outline</' + 'span></div></div></div></div>' + '<div class="form-group"> <label class="col-md-4 control-label" for="IdQuantVend">Nº de Unidades</label> <div class="col-md-3"> <input id="IdQuantVend" name="IdQuantVend" type="number" placeholder="0" class="form-control input-md" required=""> <span class="help-block">Exemplo: 2</span> </div> </div><span class="classValidaLivro"></span>';

    formulario.insertBefore(novaDiv, topicos[contadorDivVenda += 3])

    contadorVenda++
}

function apagarVenda() {
    let Livros = document.getElementsByClassName("remocaoVenda");

    Livros[Livros.length - 1].remove();

    contadorDivVenda--;
    contadorVenda--;
}

// ####### VALIDANDO OS FUNCIONARIOS #######
function imprimeValidaFunc(ondeAchou) {

    let dados = "";

    dados = "ID: " + ArrayFuncionarios[ondeAchou].id + "<br/>" +
        "Nome: " + ArrayFuncionarios[ondeAchou].nome + "<br/>";

    return dados;
}

var condicaoF;

function validaFuncionario() {
    if (document.getElementById("IdMatFunc").value != "") {
        condicaoF = true
        let achou = false;
        let ondeAchou = 0;
        let funcionario;
        for (let i = 0; i < ArrayFuncionarios.length; i++) {
            if (ArrayFuncionarios[i].id.toLowerCase().startsWith(document.getElementById("IdMatFunc").value.toLowerCase())) {
                achou = true;
                ondeAchou = i;
            }
        }
        if (achou) {
            funcionario = "<div class='container valida'>" +
                imprimeValidaFunc(ondeAchou) +
                "</div>";
        } else {
            funcionario = "<h3 class='erroValida'>Funcionário não encontrado</h3>";
            condicaoF = false;
        }

        document.getElementById("validaFuncionario").innerHTML = funcionario;
    }
}

// ####### VALIDANDO OS CLIENTES #######
function imprimeValidaClient(ondeAchou) {

    let dados = "";

    dados = "CPF: " + ArrayClientes[ondeAchou].cpf + "<br/>" +
        "Nome: " + ArrayClientes[ondeAchou].nome + "<br/>";

    return dados;
}

var condicaoC;

function validaCliente() {
    if (document.getElementById("IdCpfCli").value != "") {
        condicaoC = true;
        let achou = false;
        let ondeAchou = 0;
        let cliente;
        for (let i = 0; i < ArrayClientes.length; i++) {
            if (ArrayClientes[i].cpf.toLowerCase().startsWith(document.getElementById("IdCpfCli").value.toLowerCase())) {
                achou = true;
                ondeAchou = i;
            }
        }
        if (achou) {
            cliente = "<div class='container valida'>" +
                imprimeValidaClient(ondeAchou) +
                "</div>";
        } else {
            cliente = "<h3 class='erroValida'>Cliente não encontrado</h3>";
            condicaoC = false;
        }

        document.getElementById("validaCliente").innerHTML = cliente;
    }
}

// ####### VALIDANDO OS LIVROS #######
function imprimeValidaLivro(ondeAchou) {

    let dados = "";

    dados = "Titulo: " + ArrayLivros[ondeAchou].titulo + "<br/>" +
        "Preço: R$" + ArrayLivros[ondeAchou].preco + "<br/>" +
        "Idioma: " + ArrayLivros[ondeAchou].idioma + "<br/>" +
        "Editora: " + ArrayLivros[ondeAchou].editora + "<br/>" +
        "Qtd em Estoque: " + ArrayLivros[ondeAchou].qtdExemplares + "<br/>";

    return dados;
}

var condicaoL;

function validaLivro() {
    if (document.getElementById("IdMatLivro").value != "") {
        condicaoL = true;
        let achou = false;
        let ondeAchou = 0;
        let livro = "";
        for (let i = 0; i < ArrayLivros.length; i++) {
            if (ArrayLivros[i].id.toLowerCase().startsWith(document.getElementsByName("IdMatLivro")[document.getElementsByName("IdMatLivro").length - 1].value.toLowerCase())) {
                achou = true;
                ondeAchou = i;
            }
        }
        if (achou) {
            livro = "<div class='container valida'>" +
                imprimeValidaLivro(ondeAchou) +
                "</div>";
        } else {
            livro = "<h3 class='erroValida'>Livro não encontrado</h3>";
            condicaoL = false;
        }

        document.getElementsByClassName("classValidaLivro")[document.getElementsByClassName("classValidaLivro").length - 1].innerHTML = livro;
    }
}

// ####### COLETANDO DADOS PARA O RELATÓRIO DE VENDAS #######

function ColetaFuncionario() {

    let coleta = "";

    for (let i = 0; i < ArrayFuncionarios.length; i++) {
        if (ArrayFuncionarios[i].id.toLowerCase().startsWith(document.getElementById("IdMatFunc").value.toLowerCase())) {

            coleta += ArrayFuncionarios[i].nome + "(" + ArrayFuncionarios[i].id + ")"

        }
    }



    return coleta;
}

function ColetaCliente() {

    let coleta = "";

    for (let i = 0; i < ArrayClientes.length; i++) {
        if (ArrayClientes[i].cpf.toLowerCase().startsWith(document.getElementById("IdCpfCli").value.toLowerCase())) {

            coleta += ArrayClientes[i].nome + "(" + ArrayClientes[i].cpf + ")"

        }
    }



    return coleta;
}

function ColetaLivroUnidade() {

    let coleta = "";

    for (let j = 0; j < document.getElementsByName("IdMatLivro").length - 1; j++) {
        for (let i = 0; i < ArrayLivros.length; i++) {
            if (ArrayLivros[i].id.toLowerCase().startsWith(document.getElementsByName("IdMatLivro")[j].value.toLowerCase())) {

                coleta += ArrayLivros[i].titulo + "(" + document.getElementsByName("IdQuantVend")[j].value + "), "

            }
        }

    }

    let k = document.getElementsByName("IdMatLivro").length - 1;
    for (let i = 0; i < ArrayLivros.length; i++) {
        if (ArrayLivros[i].id.toLowerCase().startsWith(document.getElementsByName("IdMatLivro")[k].value.toLowerCase())) {

            coleta += ArrayLivros[i].titulo + "(" + document.getElementsByName("IdQuantVend")[k].value + ")."

        }
    }



    return coleta;
}

function ColetaValorTotal() {

    let coleta = 0;

    for (let j = 0; j < document.getElementsByName("IdMatLivro").length; j++) {
        for (let i = 0; i < ArrayLivros.length; i++) {
            if (ArrayLivros[i].id.toLowerCase().startsWith(document.getElementsByName("IdMatLivro")[j].value.toLowerCase())) {

                coleta += Number(ArrayLivros[i].preco * document.getElementsByName("IdQuantVend")[j].value);

            }
        }

    }

    return coleta;

}

// ####### ARMAZENAMENTO OS DADOS DAS VENDAS #######
let ArrayVendas = []

// ####### CADASTRANDO AS VENDAS #######
function subVendas() {

    var condic = true;//Verifica se todos os itens estão cadastrados


    if (document.getElementById("IdMatFunc").value === "" || document.getElementById("IdCpfCli").value === "" || document.getElementsByName("IdMatLivro")[0] === "" || document.getElementsByName("IdQuantVend")[0] === "") {

        window.alert("PREENCHA TODOS OS CAMPOS!");
    } else {

        if (condicaoF === false || condicaoC === false || condicaoL === false) {

            window.alert("TODOS OS ITENS DEVEM ESTAR CADASTRADOS!")
            condic = false;
        } else {

            // ################## VERIFICAÇÕES DE QUANTIDADE #########################

            var cadastra = true; //Verifica se existem livros suficientes para efetuar a venda
            var quantidade = true; //Verifica se a qtd digitada é maior que zero
            let i = 0;
            var estoque = ArrayLivros[i].qtdExemplares;

            for (let j = 0; j < document.getElementsByName("IdMatLivro").length; j++) {
                for (i = 0; i < ArrayLivros.length; i++) {

                    if (Number(document.getElementsByName("IdQuantVend")[j].value) <= 0) {

                        quantidade = false;
                        window.alert("VERIFIQUE A QUANTIDADE INSERIDA!");
                        break
                    } else {

                        if (ArrayLivros[i].id.toLowerCase().startsWith(document.getElementsByName("IdMatLivro")[j].value.toLowerCase())) {

                            estoque = Number(estoque - document.getElementsByName("IdQuantVend")[j].value)

                            if (estoque < 0) {
                                cadastra = false;
                            }

                        }
                    }

                }

            }

            if (condic && quantidade) {

                if (cadastra) {

                    ArrayVendas.push(new Venda(ColetaFuncionario(), ColetaCliente(), ColetaLivroUnidade(), ColetaValorTotal()));

                    window.alert("VENDA EFETUADA COM SUCESSO!");

                    // ################## ATUALIZAR A QUANTIDADE DE LIVROS NO ESTOQUE APOS A VENDA #########################
                    for (let j = 0; j < document.getElementsByName("IdMatLivro").length; j++) {
                        for (let i = 0; i < ArrayLivros.length; i++) {
                            if (ArrayLivros[i].id.toLowerCase().startsWith(document.getElementsByName("IdMatLivro")[j].value.toLowerCase())) {

                                ArrayLivros[i].qtdExemplares = Number(ArrayLivros[i].qtdExemplares - document.getElementsByName("IdQuantVend")[j].value)

                            }
                        }

                    }
                } else {

                    window.alert("Não há livros suficientes no estoque para efetuar a venda.");
                }
            }



        }


    }


    if (condic && quantidade && cadastra) {

        // ################## LIMPAR FORMULARIO #########################
        document.vendasForm.reset();

        // ################## REMOVER OS CAMPOS EXTRAS ADICIONADOS PELO USUÁRIO #########################
        for (let j = document.getElementsByClassName("remocaoVenda").length - 1; j >= 0; j--) {

            document.getElementsByClassName("remocaoVenda")[j].remove();

        }

        contadorVenda = 1;
        contadorDivVenda = 5;

        document.getElementById("validaFuncionario").innerHTML = "";
        document.getElementById("validaCliente").innerHTML = "";
        document.getElementsByClassName("classValidaLivro")[0].innerHTML = "";

    }

}

// ####### LIMPAR FORMULARIO DE VENDAS #######
function LimpaVendas() {

    document.vendasForm.reset();

    // ################## REMOVER OS CAMPOS EXTRAS ADICIONADOS PELO USUÁRIO #########################
    for (let j = document.getElementsByClassName("remocaoVenda").length - 1; j >= 0; j--) {

        document.getElementsByClassName("remocaoVenda")[j].remove();

    }

    contadorVenda = 1;
    contadorDivVenda = 5;

    document.getElementById("validaFuncionario").innerHTML = "";
    document.getElementById("validaCliente").innerHTML = "";
    document.getElementsByClassName("classValidaLivro")[0].innerHTML = "";
}

// ####### EXIBINDO RELATORIO DE VENDAS #######
function ExibVendas() {

    let impressao = "";

    for (let i = 0; i < ArrayVendas.length; i++) {

        impressao += "<div class='container colab'>" +
            ArrayVendas[i].imprime() +
            "</div>"
    }

    document.getElementById("ExibeVenda").innerHTML = impressao;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ####### ATUALIZANDO OS CADASTROS #######

var condicaoLAtual;
function validaLivroAtual() {

    if (document.getElementById("IdLivroAtual").value != "") {
        condicaoLAtual = true;
        let achou = false;
        let ondeAchou = 0;
        let livro = "";
        for (let i = 0; i < ArrayLivros.length; i++) {
            if (ArrayLivros[i].id.toLowerCase().startsWith(document.getElementById("IdLivroAtual").value.toLowerCase())) {
                achou = true;
                ondeAchou = i;
            }
        }
        if (achou) {
            livro = "<div class='container valida'>" +
                imprimeValidaLivro(ondeAchou) +
                "</div>";
        } else {
            livro = "<h3 class='erroValida'>Livro não encontrado</h3>";
            condicaoLAtual = false;
        }

        document.getElementsByClassName("classValidaLivroAtual")[0].innerHTML = livro;
    }
}

function AcaoAtual() {

    if (condicaoLAtual) {

        if (document.getElementById("exemplaresIncAdd-0").checked) {

            for (let i = 0; i < ArrayLivros.length; i++) {
                if (ArrayLivros[i].id.toLowerCase().startsWith(document.getElementById("IdLivroAtual").value.toLowerCase())) {

                    ArrayLivros[i].qtdExemplares = Number(ArrayLivros[i].qtdExemplares) + Number(document.getElementById("IdQtdAtual").value)
                    window.alert("ATUALIZAÇÃO EFETUADA COM SUCESSO!");
                }
            }

        } else {

            for (let i = 0; i < ArrayLivros.length; i++) {
                if (ArrayLivros[i].id.toLowerCase().startsWith(document.getElementById("IdLivroAtual").value.toLowerCase())) {

                    let sub = Number(ArrayLivros[i].qtdExemplares) - Number(document.getElementById("IdQtdAtual").value)

                    if (sub >= 0) {

                        ArrayLivros[i].qtdExemplares = sub;
                        window.alert("ATUALIZAÇÃO EFETUADA COM SUCESSO!");
                    } else {

                        window.alert("NÃO FOI POSSÍVEL EFETUAR A AÇÃO, A QUANTIDADE INSERIDA PARA RETIRADA É MAIOR QUE O TOTAL EM ESTOQUE");
                        break;
                    }

                }
            }

        }

    } else {

        window.alert("LIVRO NÃO CADASTRADO, NÃO FOI POSSÍVEL EFETUAR A AÇÃO.");
    }


    document.atualForm.reset();
    document.getElementsByClassName("classValidaLivroAtual")[0].innerHTML = "";

}


// ####### LIMPA FORMULARIO #######

function limpaAtual() {

    document.atualForm.reset();
    document.getElementsByClassName("classValidaLivroAtual").innerHTML = "";
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ####### BARRA DE PESQUISA ######

function Busca() {

    document.getElementById("ExibeResult").innerHTML = "";
    let recebe = "";
    let verifica = false;

    if (document.getElementById("consulta").value === "t") {

        for (let i = 0; i < ArrayLivros.length; i++) {
            if (ArrayLivros[i].titulo.toLowerCase().startsWith(document.getElementById("barraPesquisa").value.toLowerCase())) {

                recebe += "<div class='container colab'>" +
                    ArrayLivros[i].imprime() +
                    "</div>";

                verifica = true;

            }
        }


    } else {

        for (let i = 0; i < ArrayLivros.length; i++) {
            if (ArrayLivros[i].autor.toLowerCase().indexOf(document.getElementById("barraPesquisa").value.toLowerCase()) >= 0) {

                recebe += "<div class='container colab'>" +
                    ArrayLivros[i].imprime() +
                    "</div>";

                verifica = true;

            }
        }
    }

    if (verifica) {

        document.getElementById("ExibeResult").innerHTML = recebe;
    } else {

        document.getElementById("ExibeResult").innerHTML = "<div class='container colab'>" +
            "<h1> Não Cadastrado :(" +
            "</div>"
    }

    document.getElementById("barraPesquisa").value = "";


}





