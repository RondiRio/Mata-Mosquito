var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var nivel = window.location.search
var criaMosquitoTempo = 1500
nivel = nivel.replace("?", " ")
if (nivel === 'normal')
{
    criaMosquitoTempo = 1500
}
else if (nivel === 'dificil')
{
    criaMosquitoTempo = 1000
}
else if (nivel === 'Kratos')
{
    criaMosquitoTempo = 750
}
//verifica o tamanho da tela do jogo
function ajustaTamanhoJogo()
{
    altura = window.innerHeight
    largura = window.innerWidth
    console.log("a altura é " + largura + ' e a largura é ' + altura)
    
}

//ajusta o tamanho da tela do jogo
ajustaTamanhoJogo()
// ajusta o cronometro do jogo
var cronometro = setInterval(function()
{   
    tempo -= 1
    document.getElementById('cronometro').innerHTML = tempo
    if(tempo <= 0)
    {
        //aqui eu vou fazer, no futuro uma ideia de fases. quanto mais
        //ganha, mais rapidamente os mosquitos aparecem
        window.location.href = 'vitoria.html'
        clearInterval(cronometro)
        clearInterval(CriaMosca)
    }
    else
    {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

//configura as funcões principais do jogo
function Spawn()
{
    //remover mosquito anterior caso exista automaticamente
    if(document.getElementById('mosquito'))
    {
        document.getElementById('mosquito').remove()

        //interrompe o jogo 
        if(vidas >= 4)
        {
            window.location.href = 'fimdejogo.html'
        }
        else
        {
            document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
            vidas++
            // console.log("elemento v : " + vidas)
        }
        
        
    }
    
    

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // criar elemento html
    var mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    
    mosca.className = tamanhoAleatorio() + " " + ladoAleatorio()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosquito'
    mosca.onclick = function()
    {
        this.remove()
    }

    document.body.appendChild(mosca)
    tamanhoAleatorio()
    ladoAleatorio()
    console.log(ladoAleatorio())
}
function tamanhoAleatorio()
{
    var classe = Math.floor(Math.random() * 3)
    console.log(classe)

    switch(classe)
    {
        case 0:
            return 'mosquito1'
            break;
        case 1:
            return 'mosquito2'
            break;
        case 2:
            return 'mosquito3'
            break;
    }
}

function ladoAleatorio()
{
    var classe = Math.floor(Math.random() * 2)
    console.log(classe)
    switch(classe)
    {
        case 0:
            return 'ladoA'
            break;
        case 1:
            return 'ladoB'
            break;
    }
}
