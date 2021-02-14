window.onload = function(){
    const stage = document.getElementById('stage');
    const context = stage.getContext("2d");
    document.addEventListener("keydown",keyPush);

    
    setInterval(game, 60);
    const velocidade = 1;
    var velocidadeX = velocidadeY = 0;
    var pontoX =  10;
    var pontoY = 15;
    var tamanhoPeca = 20;
    var quantidadePeca = 20;
    var pontoRedx = pontoRedy=15;

    var rastroCobra = [];
    caldaCobra = 5;


    function game(){
        pontoX  += velocidadeX;
        pontoY += velocidadeY;
        if(pontoX <0 ){
            pontoX = quantidadePeca -1;
        }   
        if(pontoX > quantidadePeca-1){
            pontoX = 0
        }
        if(pontoY < 0){
            pontoY = quantidadePeca-1;
        }
        if(pontoY > quantidadePeca-1){
            pontoY = 0;
        }

        context.fillStyle = "black";
        context.fillRect(0,0, stage.width, stage.height);

        context.fillStyle = "red";
        context.fillRect(pontoRedx * tamanhoPeca, pontoRedy * tamanhoPeca, tamanhoPeca,tamanhoPeca);

        context.fillStyle = "blue";
        for(var i =0; i < rastroCobra.length; i++){
            context.fillRect(rastroCobra[i].x*tamanhoPeca, rastroCobra[i].y*tamanhoPeca, tamanhoPeca,tamanhoPeca);


            
            if(rastroCobra[i].x == pontoX && rastroCobra[i].y == pontoY){
                velocidadeX = velocidadeY=0;
                caldaCobra = 5;

            }

        }

        rastroCobra.push({
            x:pontoX,
            y:pontoY
        })
        while (rastroCobra.length > caldaCobra){
            rastroCobra.shift();
        }

        if(pontoRedx==pontoX && pontoRedy==pontoY){
            caldaCobra++;
           document.getElementById('content-total').innerHTML = `Total: ${Number(caldaCobra) - 5}`;
           
            pontoRedx = Math.floor(Math.random()*quantidadePeca);
            pontoRedy = Math.floor(Math.random()*quantidadePeca);

        }
    
    }


function keyPush(event){
    switch (event.keyCode){
        case 37:
            velocidadeX = -velocidade;
            velocidadeY =0
            break;
        case 38:
            velocidadeX = 0;
            velocidadeY = -velocidade
            break;
        case 39:
            velocidadeX = velocidade;
            velocidadeY =0
            break;
        case 40:
            velocidadeX = 0;
            velocidadeY = velocidade
            break;  
        default:
            
            break;
    }
}


}
