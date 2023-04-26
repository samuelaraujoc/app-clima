const keyy = "e6d1cd0be42b872c6499870b98ad9c28"

/* Ao pressionar a tecla Enter também vai chamar a função que conecta a API */
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      document.querySelector('.button-search').click();
    }
  });

/* Limpa o imput depois de chamar a funsão */
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      document.querySelector('.input-city').value ="";
    }
  });

/* Capturando a cidade digitada pelo usuário e armazenando da variavel City, que vai ser enviada para a
function searchCity que irá realizar uma busca na API e trazer o resultado do servidor, em seguida o convertando para Json */

function captureCity() {
    const city = document.querySelector(".input-city").value
    searchCity(city)
}

async function searchCity(city) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyy}&lang=pt_br&units=metric`).then(response => response.json())

    dadosServer(dados)
}

/* Pegando os dados buscados no Servidor e aplicando no HTML (arvore DOM) */
function dadosServer(dados) {
    document.querySelector(".class-city").innerHTML = dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "º"
    document.querySelector(".text-forecast").innerHTML = dados.weather[0].description
    document.querySelector(".humi").innerHTML = dados.main.humidity + "% Umidade"
    document.querySelector(".Iconn").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    console.log(dados)
}
