const form = document.querySelector("#doces-form");

//o try catch e utilizado para sinalizar uma mensagem de erro
form.addEventListener("submit", async (ev) => {
  try {
    ev.preventDefault();
    const { elements } = ev.target;

    const data = {
      nome: elements.nome.value,
      tipo: elements.tipo.value,
      descrição: elements.descricao.value,
      quantidade: elements.quantidade.value,
      fabricação: elements.fabricacao.value,
      validade: elements.validade.value,
    };
    //função que realiza funções http como no insomnia
    const response = await fetch(
      "https://27ad-2804-1b1-fd02-9a9b-5832-2ee0-57bb-4dbe.ngrok-free.app/doces",
      {
        method: "POST",
        //essa função transforma objetos javascript em json
        body: JSON.stringify(data),
      }
    );

    if (response.status >= 400) {
      throw new Error(await response.text());
    }

    alert("Produto salvo! Muito obrigada :)");
  } catch (error) {
    alert(`Ocorreu um erro ao tentar enviar o formulário${error.message}`);
  }
});
