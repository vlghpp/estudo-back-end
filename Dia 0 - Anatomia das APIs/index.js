async function teste(){
    let exemplo = await fetch('https://api.adviceslip.com/advice')
    .then(resultado => resultado.json())
    .then(mostarResultado =>{
        console.log(mostarResultado);
    })
}
//Se chamar o teste() em um navegador HTML você verá que no console ele faz a requisição pra API passada no fetch e retorna a mesma em json com um GET em um concelho aleatorio
//O que aparece no JSON pelo log é o Request Body e ao mesmo tempo o Request Header, já para identificar o Request Line basta olhar a ROTA, o /advice é o URI e o método é o GET