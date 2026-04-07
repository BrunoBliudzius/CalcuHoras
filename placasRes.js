window.onload = function () {
  const lista = JSON.parse(localStorage.getItem("placas")) || [];

  const tabela = document.getElementById("tabelaPlacas");

  let soma = 0;

  lista.forEach((item) => {
    const linha = document.createElement("tr");

    soma += 1;

    linha.innerHTML = `
      <td>${item.horas}</td>
      <td>${item.placa}</td>
    `;

    tabela.appendChild(linha);
  });

  const saldo = document.getElementById("saldo");
  saldo.innerHTML = `Placas: ${soma}`;
};

function adicionar() {
  const placaInput = document.getElementById("placa");

  const placa = placaInput.value.trim();
  const horas = new Date().toLocaleString("pt-br"); // data formatada

  if (!placa) {
    alert("Preencha o campo corretamente");
    return;
  }

  const tabela = document.getElementById("tabelaPlacas");

  const linha = document.createElement("tr");
  linha.innerHTML = `
      <td>${horas}</td>
      <td>${placa}</td>
    `;

  tabela.appendChild(linha);

  const lista = JSON.parse(localStorage.getItem("placas")) || [];

  lista.push({ placa, horas });

  localStorage.setItem("placas", JSON.stringify(lista));

  placaInput.value = "";

  window.location.reload();
}

function ResetarMes() {
  localStorage.removeItem("placas"); // mais seguro que clear()
  window.location.reload();
}