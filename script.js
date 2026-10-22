    const motorista = {
        idade: 18,
        temCNH: true,
        temCarro: false
    }

    console.log(motorista)

    motorista.idade += 1;
    motorista.temCNH = false;
    motorista.temCarro = true;

    console.log(motorista)

    //Laço de repetição
    for(let contador = 0; contador <= 1000; contador++){
        console.log(contador)
    }

    //02 - Tabuada
    let numero = 5;

    for(let contador = 1; contador <= 10; contador++){
    console.log(`${contador} x ${numero} = ${contador * numero}` )
    }

    //while
    let contador = 1;
    let numeroWhile = 5;
    while(contador <= 10){
     console.log(contador * numeroWhile)
     contador++;
    }

    //03 - contagem Regressiva

    let pares = 20;
    let parWhile = 0;
    while(contador <= 20){
        console.log(parWhile * pares);
        contador++;
    }

    
    

