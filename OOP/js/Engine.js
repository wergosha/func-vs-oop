function Engine() {
    console.log('Engine created')
    
}

Engine.prototype.start = function(){
    let randomNumber = Math.random();

    if (randomNumber > 0.5) return true;
    else return false;
}

    

