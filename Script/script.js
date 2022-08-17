var textoDigitado = document.querySelector('#input-texto')
const criptografia = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat'
}

const descriptografia = {
  enter: 'e',
  imes: 'i',
  ai: 'a',
  ober: 'o',
  ufat: 'u'
}

function criptografar() {
  var texto = textoDigitado.value;
  var linha = '';

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] == 'e') {
      linha += criptografia.e
    } else if (texto[i] == 'i') {
      linha += criptografia.i
    } else if (texto[i] == 'a') {
      linha += criptografia.a
    } else if (texto[i] == 'o') {
      linha += criptografia.o
    } else if (texto[i] == 'u') {
      linha += criptografia.u
    } else {
      linha += texto[i]
    }
  }
  textoDigitado.value = linha;
}

function descriptografar() {
  const descript = textoDigitado.value

 return textoDigitado.value =
    descript.replaceAll('ober', descriptografia.ober)
    .replaceAll('enter', descriptografia.enter)
    .replaceAll('imes', descriptografia.imes)
    .replaceAll('ai', descriptografia.ai)
    .replaceAll('ufat', descriptografia.ufat)
}

function copiar(){
  var caixaDeTexto = document.getElementById('input-texto')
  caixaDeTexto.select();
  caixaDeTexto.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(caixaDeTexto.value);

}
