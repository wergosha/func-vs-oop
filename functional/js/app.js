(function(){
    let garage = document.getElementById('garage');


    for (let i = 0; i < 5; i++) {
        let div = document.createElement('div');
        let id = 'car' + i;
        div.id = id;
        garage.appendChild(div);
        startCarProcess(id)  
    }
})();






