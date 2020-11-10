function consulta(){
    // aqui iremos consumir a API da viacep
    // recupera o valor digitando pelo usuario
    let film = document.getElementById("film").value;
    // precisamos fazer uma requisição ao servidor
    let req = new XMLHttpRequest();
    // precisamos definir o local da API
    let url = `https://www.omdbapi.com/?apikey=58bdcfc9&t=${film}`;
    // vamos usar o método GET para fazer a requisição
    req.open("GET", url, true); // true porque será uma solicitação aassíncrona
    // vamos enviar a requisição
    req.send();
    // vamos trabalhar com a resposta do servidor
    req.onload = () => {
        // recuperar o resultado
        let resultado = req.responseText;
        // transformar em JSON
        resultado = JSON.parse(resultado);
        //console.log(resultado);
        // vamos jogar o resultado no formulário

        if(resultado.Response == "False"){
            swal("Ops!", "Não encontrei este filme!", "error");
            return
        }

        let conteudo = document.getElementById('conteudo');
        conteudo.style.backgroundColor = "#242323";


        // Poster
        let poster = document.createElement('img');
        poster.id = 'poster';
        poster.src = resultado.Poster;
        let divPoster = document.getElementById('div-poster');
        divPoster.innerHTML = '';
        divPoster.appendChild(poster);

        // Título
        let tituloNome = document.createElement('h2');
        tituloNome.innerText = "Título";
        let titulo = document.createElement('p');
        titulo.id = "titulo";
        titulo.innerHTML = resultado.Title;
        let divTitulo = document.getElementById('div-titulo');
        divTitulo.innerHTML = '';
        divTitulo.appendChild(tituloNome);
        divTitulo.appendChild(titulo);

        //Ano 
        let anoNome = document.createElement('h2');
        anoNome.innerText = "Ano de Lançamento";
        let ano = document.createElement('p');
        ano.id = "ano";
        ano.innerHTML = resultado.Year;
        let divAno = document.getElementById('div-ano');
        divAno.innerHTML = '';
        divAno.appendChild(anoNome);
        divAno.appendChild(ano);

        // Duração
        let duracaoNome = document.createElement('h2');
        duracaoNome.innerText = "Duração";
        let duracao = document.createElement('p');
        duracao.id = "duracao";
        duracao.innerHTML = resultado.Runtime;
        let divDuracao = document.getElementById('div-duracao');
        divDuracao.innerHTML = '';
        divDuracao.appendChild(duracaoNome);
        divDuracao.appendChild(duracao);

        // Diretor
        let diretorNome = document.createElement('h2');
        diretorNome.innerText = "Direção";
        let diretor = document.createElement('p');
        diretor.id = "diretor";
        diretor.innerHTML = resultado.Director;
        let divDiretor = document.getElementById('div-diretor');
        divDiretor.innerHTML = '';
        divDiretor.appendChild(diretorNome);
        divDiretor.appendChild(diretor);

        // Elenco
        let atoresNome = document.createElement('h2');
        atoresNome.innerText = "Elenco";
        let atores = document.createElement('p');
        atores.id = "atores";
        atores.innerHTML = resultado.Actors;
        let divAtores = document.getElementById('div-atores');
        divAtores.innerHTML = '';
        divAtores.appendChild(atoresNome);
        divAtores.appendChild(atores);

        // Enredo
        let eredoNome = document.createElement('h2');
        eredoNome.innerText = "Enredo";
        let enredo = document.createElement('p');
        enredo.id = "enredo";
        enredo.innerHTML = resultado.Plot;
        let divEnredo = document.getElementById('div-enredo');
        divEnredo.innerHTML = '';
        divEnredo.appendChild(eredoNome);
        divEnredo.appendChild(enredo);
        
    }
}