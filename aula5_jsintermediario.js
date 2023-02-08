{ // Exercício aula 12
  // a
  let CPFLista = [];
  for (i = 0; i < 5; i++) {
    CPFLista[i] = prompt(`Digite o ${i + 1}º CPF: `);
  }

  // b
  function verifyCPF(cpfs) { // Verifica quais cpfs são validos e armazena em outra lista se sao validos ou nao
      let listaCpfs = [];
      for (let cpf of cpfs) {
          if (!isNaN(cpf) && cpf.length == 11) {
              listaCpfs.push(' O CPF Digitado é valido!')
          } else {
              listaCpfs.push('O CPF Digitado é invalido!')
          }
      }
      return listaCpfs;
  }

  // c
  function formataCPF(...cpfs) { // Formata os cpfs, e os atribuem numa lista
      let cpfFormatado = [];
      for (let cpf of cpfs) {
          cpfFormatado.push(`${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`);
      }
      return cpfFormatado;
  }

  // d
  function exibeCPF() { // Exibe os cpfs formatados, informa se é válido e a quantidade
      let posicao = 0;
      let cpfsValidos = 0;
      for (let cpf of verifyCPF(CPFLista)) {
          if (cpf == 'O CPF Digitado é valido!') {
              alert(`${posicao + 1}º CPF: ${formataCPF(...CPFLista)[posicao]}, ${cpf}`);
              cpfsValidos++;
          } else {
              alert(`${posicao + 1}º CPF: ${cpf}`);
          };
          posicao++;
      };
      alert(`A quantidade de CPFs válidos são: ${cpfsValidos}`);
  }

  exibeCPF();
}