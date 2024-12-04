const pessoas1 = document.querySelector("#pessoas1");
const pessoas2 = document.querySelector("#pessoas2");
const pessoas3 = document.querySelector("#pessoas3");
const pessoas4 = document.querySelector("#pessoas4");
const pessoas5 = document.querySelector("#pessoas5");

fetch("./pessoas.json")
  .then(response => {
    if (!response.ok) {
      throw new Error('Não foi possível carregar o arquivo JSON');
    }
    return response.json();
  })
  .then(pessoas => {
    // Verifica se o JSON tem pelo menos 5 pessoas
    if (pessoas.length >= 5) {
      pessoas1.innerHTML = `Nome: ${pessoas[0].nome}, Idade: ${pessoas[0].idade}, CPF: ${pessoas[0].cpf}, Telefone: ${pessoas[0].telefone}`;
      pessoas2.innerHTML = `Nome: ${pessoas[1].nome}, Idade: ${pessoas[1].idade}, CPF: ${pessoas[1].cpf}, Telefone: ${pessoas[1].telefone}`;
      pessoas3.innerHTML = `Nome: ${pessoas[2].nome}, Idade: ${pessoas[2].idade}, CPF: ${pessoas[2].cpf}, Telefone: ${pessoas[2].telefone}`;
      pessoas4.innerHTML = `Nome: ${pessoas[3].nome}, Idade: ${pessoas[3].idade}, CPF: ${pessoas[3].cpf}, Telefone: ${pessoas[3].telefone}`;
      pessoas5.innerHTML = `Nome: ${pessoas[4].nome}, Idade: ${pessoas[4].idade}, CPF: ${pessoas[4].cpf}, Telefone: ${pessoas[4].telefone}`;
    } else {
      throw new Error('Não há dados suficientes no JSON');
    }
  })
  .catch(error => {
    console.error('Erro ao carregar o arquivo JSON:', error);
  });