//delaying the count

function countNumbers(){
        for(let i = 1; i <= 5; i++ ){
            setTimeout(() => {
                console.log(i)
            }, 1000 * i)
        }
    
}

countNumbers();