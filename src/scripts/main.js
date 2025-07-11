document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(e){
        e.preventDefault()
        let maxNum = document.getElementById('max-num').value
        let resultado = document.getElementById('valor-resultado')
        let divResultado = document.querySelector('.resultado')
        

        maxNum = parseInt(maxNum)

        let numeroAleatorio = Math.random() * maxNum
        numeroAleatorio = Math.floor(numeroAleatorio + 1)

        resultado.innerText = numeroAleatorio
        divResultado.style.display = 'block'
    })
})