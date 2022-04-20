const dino = document.querySelector('.dino')

function handleKeyUp(event){
    if(event.keyCode ===32){
        jump()
    }
}

function jump(){
    let position = 0
    let upInterval = setInterval(()=>{
        if(position >=150){
            clearInterval(upInterval)
            //Descendo
            let downInterval = setInterval(()=>{

                if(position<=0){
                    clearInterval(downInterval)
                } else{
                position -=20
                dino.style.bottom = position + 'px';
                }
            })
        }else{
        //Subindo
        position +=20

        dino.style.botton = position + 'px';
    }
    }, 15)
}

document.addEventListener('keyup',handleKeyUp)