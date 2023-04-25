const keyy = "e6d1cd0be42b872c6499870b98ad9c28"

function captureCity() {
    const city = document.querySelector(".input-city").value
    searchCity(city)
}

/* Pegando a cidade digitada pelo usuário e armazenando da variavel City, que vai ser enviada para a
function searchCity que irá realizar uma busca na API e trazer o resultado do servidor, em seguida o convertando para Json */
async function searchCity(city) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyy}&lang=pt_br&units=metric`).then(response => response.json())

    dadosServer(dados)
}

/* Pegando os dados buscados no ervidor e aplicando no HTML (arvore DOM) */
function dadosServer(dados) {
    document.querySelector(".class-city").innerHTML = dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "º"
    document.querySelector(".text-forecast").innerHTML = dados.weather[0].description
    document.querySelector(".humi").innerHTML = dados.main.humidity + "% Umidade"
    document.querySelector(".Iconn").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    console.log(dados)
}
