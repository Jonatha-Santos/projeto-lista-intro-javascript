// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt("Digite a altura do objeto")
  const largura = prompt("Digite a largura do objeto")
  const area = altura * largura

  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const currentYear = prompt(`Digite o ano atual:`)
  const birthYear = prompt(`Digite o ano em que você nasceu:`)
  const currentAge = currentYear - birthYear

  console.log(currentAge)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return peso / (altura * altura) 
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nome = prompt(`Digite o seu nome:`)
  const idade = prompt(`Digite a sua idade:`)
  const email = prompt(`Digite o seu email:`)

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  // implemente sua lógica aqui
  cor1 = prompt(`Qual sua primeira cor favorita?`)
  cor2 = prompt(`Qual sua segunda cor favorita?`)
  cor3 = prompt(`Qual sua terceira cor favorita?`)

  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array [array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
 
  const auxiliar = array [0]
  array [0] = array [array.length - 1]

  array [array.length - 1] = auxiliar

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  
  return string1.toUpperCase() === string2.toUpperCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const currentYear = Number (prompt(`Digite o ano atual:`))
  const birthYear = Number (prompt(`Digite o ano em que você nasceu:`))
  const idYear = Number (prompt(`Digite o ano de emissão do seu RG`))

  let needsRenew = false

  const currentAge = Number (currentYear - birthYear)
  const idAge = Number (currentYear - idYear)

  //* TODA FUNÇÃO OU MÉTODO PRECISA TER PARENTESES \\ // o calculo só acontece dentro do {} se o primeiro valor for true 
  
  if (currentAge <= 20 && idAge >= 5) {                         
    needsRenew = true
    console.log(needsRenew)
  } else if (currentAge > 20 && currentAge <= 50 && idAge >= 10){
    needsRenew = true
    console.log(needsRenew)
  } else if (currentAge > 50 && idAge >= 15){
    needsRenew = true
    console.log(needsRenew)
  }

  console.log(needsRenew)
  

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  
  if (ano % 400 === 0 ){
   return true
  } else if (ano % 4 === 0){
    if (ano % 100 === 0 && ano % 400 !== 0){
      return false
    }
    return true  
  }
  return false
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  const haveYears = prompt(`Você tem mais de 18 anos?`)
  const haveHighSchool = prompt(`Você possui ensino médio completo?`)
  const haveTime = prompt(`Você possui disponibilidade exclusiva durante os horários do curso?`)

  if (haveYears === "sim" && haveHighSchool === "sim" && haveTime === "sim"){
    console.log(true)
  } else {
    console.log(false)
  }

}