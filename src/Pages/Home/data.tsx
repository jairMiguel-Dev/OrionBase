import InputIcon from '@mui/icons-material/Input';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import DataObjectIcon from '@mui/icons-material/DataObject';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import BugReportIcon from '@mui/icons-material/BugReport';
import FilterIcon from '@mui/icons-material/Filter';
import MapIcon from '@mui/icons-material/Map';
import FindInPageIcon from '@mui/icons-material/FindInPage';

export const lista = [
    {
        type: 'básico',
        icon: <InputIcon/>,
        termo: 'Response',
        definicao: 'Usado para responder a requisição como um chamado de API ou requisição de dados',
        maincode: 'response.json()',
        explicação: 'O Responde, é uma forma de orientar o sistema a forma esperada para receber os dados, aqui abaixo é como estivesse falando:',
        explicação2: "'Eu quero que pegue todos os dados dessa API 'users' e me retorne em forma .JSON'",
        maincode2: "useEffect(() => { fetch('API').then(response => response.json()).then(data => setUsers(data)); }, [users]);"
    },
    {
        type: 'básico',
        icon: <CloudSyncIcon/>,
        termo: 'fetch',
        definicao: 'Usado para receber como resposta os dados, como um chamado de API ou requisição de dados',
        maincode: 'fetch(url, options)',
        explicação: "Essa é uma forma de responder e apresentar os dados de uma forma legivel.",
        explicação2: "No trecho abaixo estamos falando, 'Eu quero que responda todos os dados dessa API 'users' no formato .JSON', o chamado está começando pelo Fetch:",
        maincode2: "useEffect(() => { fetch('API').then(response => response.json()).then(data => setUsers(data)); }, [users]);"
    },
    {
        type: 'básico',
        icon: <DataObjectIcon/>,
        termo: 'JSON',
        definicao: 'Um formato de dados que é formado por um objeto que contém chave e valor, toda vez que vamos ler um código assim, ele vem com essa estrutura:',
        maincode: "'user': 'value'",
        explicação: "Essa é uma forma de organizar os dados, onde cada chave é um valor, como se fosse um dicionário, onde cada palavra tem um significado.",
        explicação2: "Agora pensando no código do UseEffect, ele está recebendo uma resposta para a API, aqui esperamos que o retorno da resposta seja em formato .JSON para facilitar a leitura dos dados.",
        maincode2: "useEffect(() => { fetch('API').then(response => response.json()).then(data => setUsers(data)); }, [users]);"
    },
    {
        type: 'Médio',
        icon: <TextSnippetIcon/>,
        termo: 'stringify',
        definicao: 'Usado para converter um objeto JavaScript em uma string JSON',
        maincode: 'JSON.stringify(data)',
        explicação: "Imagine que seu Objeto é um móvel montado. Para enviar pelo correio (internet), você precisa desmontar e por na caixa. O `stringify` faz isso: 'empacota' seus dados em texto (string) para que viajem com segurança até o servidor!",
        explicação2: "É a técnica do 'Empacotamento': O JavaScript entende o Objeto, mas a rede prefere texto. O `stringify` transforma tudo numa longa frase de texto (como 'name: John') que qualquer sistema consegue ler e entender.",
        maincode2: "const data = JSON.stringify({ name: 'John', age: 30 });"
    },
    {
        type: 'Médio',
        icon: <IntegrationInstructionsIcon/>,
        termo: 'parse',
        definicao: 'Usado para converter uma string JSON em um objeto JavaScript',
        maincode: 'JSON.parse(data)',
        explicação: "Vamos pensar agora que precisamos ler os dados, mas se for processar em .JSON, ficaria uma temenda bagunça, então o Parser vem para facilitar a nossa vida!",
        explicação2: "Ele técnicamente lê a string JSON e transforma em um objeto JavaScript, assim a máquina entende e pode processar para entregar algo legivel, veja Abaixo:",
        maincode2: "const data = JSON.parse('{ name: 'John', age: 30 }');"
    },
    {
        type: 'Médio',
        icon: <ArrowForwardIcon/>,
        termo: 'then',
        definicao: 'Usado para receber a resposta da requisição',
        maincode: 'response.then(data => console.log(data))',
        explicação: "Pensando sobre aquele código do UseEffect, o then está recebendo a resposta da requisição e seguindo a lógica que criamos para recebermos os dados e transformar em um objeto JavaScript",
        explicação2: "Vamos rever o código abaixo para entender melhor:",
        maincode2: "useEffect(() => { fetch('API').then(response => response.json()).then(data => setUsers(data)); }, [users]);"
    },
    {
        type: 'Avançado',
        icon: <BugReportIcon/>,
        termo: 'catch',
        definicao: 'Usado para identificar e capturar os erros na requisição',
        maincode: 'response.catch(error => console.log(error))',
        explicação: "Toda vez que pensamos em Catch, precisamos lembrar do Try, é como se estissemos escrevendo uma condição em 'If' e 'Else', porem dentro de uma retorno de API e não para uma lógica reutilizavel!",
        explicação2: "Pensando assim, se o valor da API chegar certo, retorne isso, se não retorne assim, veja no código abaixo:",
        maincode2: "try { fetch('API').then(response => response.json()).then(data => setUsers(data)); } catch (error) { console.log(error); }"
    },
    {
        type: 'Básico',
        icon: <ArrowRightAltIcon/>,
        termo: '=>',
        definicao: 'Arrow Function é uma forma de criar uma função de forma mais curta',
        maincode: 'response.then(data => console.log(data))',
        explicação2: "Vamos pensar assim, se tivermos que criar uma função normal, teríamos que escrever 'function' e o nome da função, mas com a Arrow Function, podemos escrever apenas o nome da função e o que ela deve fazer.",
        maincode2: "response.then(data => console.log(data))"
    },
    {
        type: 'Avançado',
        icon: <ElectricBoltIcon/>,
        termo: 'async',
        definicao: 'Async é uma forma de criar uma função assíncrona, de forma que o computador não precise esperar uma ação finalizar para iniciar outra.',
        maincode: 'async function fetchData()',
        explicação: "A forma de não deixar o usuario esperar a requisição finalizar para iniciar outra.",
        explicação2: "Imagine que sua página tem mais de 10.000 requisções simutaneas, isso poderia gerar um gargalo tremendo no seu servidor, o Async ajuda a resolver isso, ele permite que o computador continue processando outras requisições enquanto uma ação finalizar para iniciar outra.",
        maincode2: "async function fetchData() { const response = await fetch('API'); const data = await response.json(); return data; }"
    },
    {
        type: 'Avançado',
        icon: <HourglassBottomIcon/>,
        termo: 'await',
        definicao: 'Await é uma forma de continuar uma função assíncrona, ele pausa o código naquela linha até a Promessa ser resolvida.',
        maincode: 'await fetchData()',
        explicação: "Aqui vamos continuar o Async para que o usuario não trave todo o servidor sempre que tentar realizar uma ação.",
        explicação2: "Podemos pensar await como uma forma de 'esperar' a requisição finalizar para iniciar outra, assim o usuario não fica preso esperando a requisição finalizar.",
        maincode2: "async function fetchData() { const response = await fetch('API'); const data = await response.json(); return data; }"    
    },
    {   
        type: 'Médio',
        icon: <HourglassBottomIcon/>,
        termo: 'toLowerCase',
        definicao: 'toLowerCase é uma forma de converter uma string em caixa alta, em texto minúsculo.',
        maincode: 'string.toLowerCase()',
        explicação:"O usuario as vezes pode cometer erros ao digitar, por isso o toLowerCase ajuda a resolver isso, ele transforma todas as letras em minúsculo, assim evitando erros.",
        maincode2: "string.toLowerCase()"
    },
    {
        type: 'Médio',
        icon: <HourglassBottomIcon/>,
        termo: 'toUpperCase',
        definicao: 'toUpperCase é uma forma de converter uma string, em texto maiúsculo.',
        maincode: 'string.toUpperCase()',
        explicação:"Pensando ao invésdo do toLowerCase, o toUpperCase ajuda a resolver isso, ele transforma todas as letras em maiúsculo, assim evitando erros.",
        maincode2: "string.toUpperCase()"
    },
    {
        type: 'Médio',
        icon: <FilterIcon/>,
        termo: ".filter()",
        definicao: "A ideia aqui é criar um novo array contendo apenas os itens que passaram em um teste (condição).",
        maincode: "array.filter(item => item > 10)",
        explicação: "É como se estivessemos criando um novo array, mas só vamos apresentar os itens que estão de acordo com a nossa condição.",
        explicação2: "Vamos pensar no código abaixo para entender melhor aqui estamos pedindo para ele criar o array e manter somente os numeros maiores que 10::",
        maincode2: "const array = [1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 16, 17]; const novoArray = array.filter(item => item > 10);"
    },
    {
        type: 'Médio',
        icon: <FindInPageIcon/>,
        termo: ".find()",
        definicao: "A ideia aqui é encontrar um item dentro de uma lista, e retornar dentro das condições exigidas.",
        maincode: "array.find(item => item === 10)",
        explicação: "Diferente do filter, o find retorna apenas o primeiro item que passa na condição retornando como solicitado pela condição.",
        explicação2: "Podemos pensar em find como uma forma de 'encontrar' um item dentro de uma lista, e retornar dentro das condições exigidas, abaixo foi aplicado uma regra para o Find buscar os dados da lista e retornar o item que passar na condição.",
        maincode2: "const array = [1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 16, 17]; const novoArray = array.find(item => item === 1);"
    },
    {
        type: 'Médio',
        icon: <MapIcon/>,
        termo: ".map()",
        definicao: "A função primordial dele é mapear um dado dentro de uma lista, e retornar dentro das condições exigidas",
        maincode: "array.map(item => item * 2)",
        explicação: "pensamos que o Map apenas mapea e retorna os dados, porém ele é muito mais poderoso que isso!",
        explicação2: "Podemos pensar em map como uma forma de 'mapear' um dado dentro de uma lista, e retornar dentro das condições exigidas, abaixo foi aplicado uma regra para o Map buscar os dados da lista e retornar multiplicando eles por 2.",
        maincode2: "const array = [1, 2, 3, 4, 5]; const novoArray = array.map(item => item * 2);"
    },
    {
    type: 'Básico',
    icon: <DataObjectIcon/>,
    termo: 'Desestruturação',
    definicao: 'Essa é uma boa pratica em JS, principalmente em React de chamar uma propriedade de um jeito organizado!',
    maincode: 'const { nome, idade } = usuario;',
    explicação: "Ao invés de digitar 'usuario.nome' e 'usuario.idade' toda hora para apresentar os dados, você 'desempacota' o objeto e chama a propriedade direto em variáveis.",
    explicação2: "Um exemplo bem prático, é a forma em que vamos apresentar os dados do usuario, vamos ver abaixo, ao invés de chamar usuario.nome e usuario.idade, vamos destruturar e chamar apenas o nome ou a idade:",
    maincode2: "const usuario= { nome, idade }"
    },
    {
    type: 'Médio',
    icon: <InputIcon/>,
    termo: 'HTTP POST',
    definicao: 'Método usado para ENVIAR dados novos para o servidor (criar algo ou adicionar algo novo).',
    maincode: 'fetch(url, { method: "POST", body: ... })',
    explicação: "A ideia aqui é sempre manter a comunicação entre clintside e serverside, para as ações aconteçam de uma forma organizada quando o usuario realizar uma ação!",
    explicação2: "Imagine assim, toda vez que o usuario se cadastra, o client-side precisa avisar apartir do metodo 'POST' que estamos enviando novos dados de cadastro de usuarios na plataforma.",
    maincode2: "fetch('/api/users', { method: 'POST', body: JSON.stringify(dados) })"
    },
    {
    type: "Médio",
    icon: <InputIcon/>,
    termo: "HTTP GET",
    definicao: "Pense sempre que da mesma forma que precisamos enviar, precisamos RECEBER dados do servidor e apresentar na tela.",
    maincode: "fetch(url, { method: 'GET', body: ... })",
    explicação: "Pensando no login de um usuario, precisamos saber se o usuario já está cadastrado ou não, e para isso precisamos enviar dados 'POST' para receber 'GET' e avisar o usuario.",
    explicação2: "Da uma olhada no código abaixo sobre como funcionaria o GET para o lógin de usuario:",
    maincode2: "fetch('/api/users', { method: 'GET', body: JSON.stringify(dados) })"
    },
    {
    type: "Médio",
    icon: <InputIcon/>,
    termo: "HTTP DELETE",
    definicao: "Aqui precisamos DELETAR um dado que não faz mais sentido e para isso esse metodo é a melhor prática.",
    maincode: "fetch(url, { method: 'DELETE', body: ... })",
    explicação: "Vamos a um exemplo, quando o usuario criar sua conta, pela LGPD caso ele queira excluir sua conta, ele poderá realizar a exclusão e é ai que o metodo entra em ação.",
    explicação2: "No código abaixo, vamos pensar que o usuario apertou e confirmou a exclusão da sua conta, agora precisamos notificar o servidor:",
    maincode2: "fetch('/api/users', { method: 'DELETE', body: JSON.stringify(dados) })"
    },
    // {
    //     icon:
    //     termo:
    //     definicao:
    //     maincode:
    //     explicação:
    //     maincode2:
    // }
]

