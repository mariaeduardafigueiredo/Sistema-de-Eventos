const eventos = [
    {
      id: 1,
      titulo: "Feira de Artesanato",
      descricao: "Produtos artesanais locais, comida e música.",
      data: "05-06-2025",
      local: "Praça Central",
      preco: 10
    },
    {
      id: 2,
      titulo: "Festival de Música Popular",
      descricao: "Bandas regionais ao vivo durante todo o dia.",
      data: "10-06-2025",
      local: "Parque das Águas",
      preco: 10
    },
    // {
    //     id: 3,
    //     titulo: "Festival de Música Popular",
    //     descricao: "Bandas regionais ao vivo durante todo o dia.",
    //     data: "20-06-2025",
    //     local: "Parque das Águas",
    //     preco: 10
    //   },
{
      id: 4,
      titulo: "Mostra de Cinema Nacional",
      descricao: "Curtas e longas-metragens brasileiros independentes.",
      data: "12-07-2025",
      local: "Cine Cultura Floripa",
      preco: 8
    },
    {
      id: 5,
      titulo: "Encontro Literário",
      descricao: "Autores locais, lançamentos de livros e bate-papos.",
      data: "18-07-2025",
      local: "Biblioteca Pública",
      preco: 0
    },
    {
      id: 6,
      titulo: "Festival Gastronômico",
      descricao: "Comidas típicas da região com chefs convidados.",
      data: "25-07-2025",
      local: "Centro de Convenções",
      preco: 15
    },
    {
      id: 7,
      titulo: "Festival de Poesia e Música",
      descricao: "Apresentações artísticas abertas ao público.",
      data: "03-08-2025",
      local: "Espaço Cultural Livre",
      preco: 0
    },
    {
        id: 8,
        titulo: "Encontro de Culturas Indígenas",
        descricao: "Vivências, palestras e feira de produtos artesanais.",
        data: "10-08-2025",
        local: "Parque Ecológico",
        preco: 0
      },
      {
        id: 9,
        titulo: "Noite de Dança Contemporânea",
        descricao: "Espetáculo com coreografias de artistas locais.",
        data: "12-08-2025",
        local: "Centro de Dança Municipal",
        preco: 12
      },
      {
        id: 10,
        titulo: "Exposição de Pintura ao Ar Livre",
        descricao: "Artistas pintando ao vivo e exposição coletiva.",
        data: "15-08-2025",
        local: "Parque da Luz",
        preco: 10
      },
      {
        id: 11,
        titulo: "Oficina de Fotografia Criativa",
        descricao: "Aulas práticas e dicas com fotógrafos renomados.",
        data: "20-08-2025",
        local: "Espaço Oficina Criativa",
        preco: 20
      },
      {
        id: 12,
        titulo: "Festival de Cultura Folclórica",
        descricao: "Dança, culinária e tradições de várias regiões do Brasil.",
        data: "25-08-2025",
        local: "Praça das Nações",
        preco: 5
      },
      {
        id: 13,
        titulo: "Mostra de Arte Urbana",
        descricao: "Grafite ao vivo, batalhas de rap e DJs convidados.",
        data: "01-09-2025",
        local: "Galpão das Artes",
        preco: 10
      },
      {
        id: 14,
        titulo: "Semana do Livro Infantil",
        descricao: "Contação de histórias, oficinas e venda de livros.",
        data: "05-09-2025",
        local: "Biblioteca Infantil",
        preco: 15
      },
      {
        id: 15,
        titulo: "Encontro de Culturas Indígenas",
        descricao: "Vivências, palestras e feira de produtos artesanais.",
        data: "10-09-2025",
        local: "Parque Ecológico",
        preco: 10
      },
      {
        id: 16,
        titulo: "Feira de Tecnologia Criativa",
        descricao: "Arte digital, música eletrônica e instalações interativas.",
        data: "15-09-2025",
        local: "Centro de Inovação Cultural",
        preco: 18

      },
      {
      id: 17,
        titulo: "Dança contemporânea",
        descricao: "Espetáculos de dança com companhias locais e nacionais.",
        data: "25-09-2025",
        local: "Teatro Municipal",
        preco: 20
    }
  ];
  
  
  const container = document.getElementById("eventos");
const busca = document.getElementById("busca");

function renderizarEventos(lista) {
  container.innerHTML = "";
  lista.forEach(e => {
    const div = document.createElement("div");
    div.className = "evento";
    div.innerHTML = `
      <h2>${e.titulo}</h2>
      <p>${e.descricao}</p>
      <p><strong>Data:</strong> ${e.data}</p>
      <p><strong>Local:</strong> ${e.local}</p>
      <p><strong>Preço:</strong> ${e.preco > 0 ? 'R$ ' + e.preco.toFixed(2) : 'Gratuito'}</p>
      <button onclick="comprar(${e.id})">${e.preco > 0 ? 'Comprar Ingresso' : 'Comprar Ingresso'}</button>
    `;
    container.appendChild(div);
  });
}

function comprar(id) {
  const evento = eventos.find(e => e.id === id);
  alert(`Você escolheu: ${evento.titulo}\nPreço: ${evento.preco > 0 ? 'R$ ' + evento.preco.toFixed(2) : 'Gratuito'}`);
}

busca.addEventListener("input", () => {
  const termo = busca.value.toLowerCase();
  const filtrados = eventos.filter(e => e.titulo.toLowerCase().includes(termo) || e.descricao.toLowerCase().includes(termo));
  renderizarEventos(filtrados);
});

renderizarEventos(eventos);

// const container = document.getElementById("eventos-container");
// const listaCarrinho = document.getElementById("lista-carrinho");
// const contador = document.getElementById("contador-carrinho");
// const totalSpan = document.getElementById("total");

// let carrinho = [];

// eventos.forEach(evento => {
//   const div = document.createElement("div");
//   div.className = "evento";
//   div.innerHTML = `
//     <h2>${evento.titulo}</h2>
//     <p><strong>Preço:</strong> ${evento.preco > 0 ? 'R$ ' + evento.preco.toFixed(2) : 'Gratuito'}</p>
//     <button onclick="adicionarAoCarrinho(${evento.id})">Comprar Ingresso</button>
//   `;
//   container.appendChild(div);
// });

// function adicionarAoCarrinho(id) {
//   const evento = eventos.find(e => e.id === id);
//   carrinho.push(evento);
//   atualizarCarrinho();
// }

// function atualizarCarrinho() {
//   listaCarrinho.innerHTML = "";
//   let total = 0;
//   carrinho.forEach(item => {
//     total += item.preco;
//     const li = document.createElement("li");
//     li.textContent = `${item.titulo} - ${item.preco > 0 ? 'R$ ' + item.preco.toFixed(2) : 'Gratuito'}`;
//     listaCarrinho.appendChild(li);
//   });
//   contador.textContent = carrinho.length;
//   totalSpan.textContent = total.toFixed(2);
// }

// function mostrarCarrinho() {
//   document.getElementById("carrinho").style.display = "block";
// }

// function fecharCarrinho() {
//   document.getElementById("carrinho").style.display = "none";
// }

// function finalizarCompra() {
//   alert("Compra finalizada com sucesso!");
//   carrinho = [];
//   atualizarCarrinho();
//   fecharCarrinho();
// }