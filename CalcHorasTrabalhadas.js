const cargaMes = 180; // padrão

window.onload = function () {
  const lista = JSON.parse(localStorage.getItem("horas")) || [];

  const tabela = document.getElementById("tabelaHoras");

  let soma = 0;

  // criar a tabela e add cada elemento do localStorage
  lista.forEach((item) => {
    const linha = document.createElement("tr");

    soma += item.horas;

    linha.innerHTML = `
      <td>${item.data}</td>
      <td>${item.horas}h</td>
    `;

    tabela.appendChild(linha);
  });

  // verifica horas trabalhadas e compara com a carga mensal
  const saldo = document.getElementById("saldo");
  saldo.innerHTML = `Trabalhou: ${soma} Horas`;

  let comparacao = cargaMes - soma;
  const h5Compara = document.getElementById("h5Compara");

  if (comparacao < 0) {
    h5Compara.innerHTML = `Horas Extras: ${Math.abs(comparacao)} horas`;
  } else {
    h5Compara.innerHTML = `Faltam: ${Math.abs(comparacao)} horas`;
  }
};

function adicionar() {
  const dataInput = document.getElementById("data");
  const horasInput = document.getElementById("horas");

  const data = dataInput.value;
  const horas = parseFloat(horasInput.value);

  if (!data || isNaN(horas)) {
    alert("Preencha os campos corretamente");
    return;
  }

  const tabela = document.getElementById("tabelaHoras");

  const linha = document.createElement("tr");
  linha.innerHTML = `
      <td>${data}</td>
      <td>${horas}h</td>
    `;

  tabela.appendChild(linha);

  const lista = JSON.parse(localStorage.getItem("horas")) || [];

  // adiciona novo registro
  lista.push({ data, horas });

  // salva novamente
  localStorage.setItem("horas", JSON.stringify(lista));

  dataInput.value = "";
  horasInput.value = "";
  window.location.reload();
}

function ResetarMes() {
  localStorage.clear();
  window.location.reload();
}
