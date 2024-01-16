//Capturando os elementos

let titulo = document.getElementById('titulo');
let link = document.querySelector('a');
let listaNaoOrdenada = document.querySelector('ul');
let listaOrdenada = document.querySelector('ol');

//Adicionando conteúdo textual utilizando innerText

titulo.innerText = 'Proz Talento Cloud';
link.innerText = 'Clique aqui para Proz Educação';

//Adicionando itens à lista não ordenada utilizando innerHTML

listaNaoOrdenada.innerHTML = `
    <li> Google </li>
    <li> AWS </li>
    <li> Meta </li>
`
//Adicionando itens com links na lista ordenada utilizando innerHTML

listaOrdenada.innerHTML = `
    <li><a href="https:www.google.com">Google</a></li>
    <li><a href="https:aws.amazon.com">Amazon Web Services</a></li>
    <li><a href="https://about.meta.com/">Meta</a></li>
`