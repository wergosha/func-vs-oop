function startCarProcess(containerId) {

    function render() {
        let container = document.getElementById(containerId);
        container.innerHTML = `
        <div class="car">
            <div class="info-panel">
                <label>status: </label><span data-role='status'>off</span>
            </div>
            <div class="controls">
                <input type='button' data-role='start-car' value='Start'></button>
            <hr>
                <label>Gearbox: </label><span data-role='gearbox-value'>N</span>
            </div>
        </div>`
        

    }
    function processEls(arrayOfEls, processor) {
        for (let i = 0; i < arrayOfEls.length; i++) {
            let item = arrayOfEls[i];
            processor(item);
        }
    }
    
    function devLog(message) {
        console.log(message)
    }

    render();

    let gearboxInterval;
    let startButtons = document.getElementById(containerId).querySelectorAll("[data-role='start-car']");
    let statusLabels = document.getElementById(containerId).querySelectorAll("[data-role='status']");
    let gearboxValueLabels = document.getElementById(containerId).querySelectorAll("[data-role='gearbox-value']");
    
    processEls(startButtons, function(startButton){
        startButton.addEventListener('click', carStartListener);
    });
    
    function drawStatus(status) {
        processEls(statusLabels, function(statusLabel){
            statusLabel.innerHTML = status;
        });
    }
    
    function carStartListener() {
        let randomNumber = Math.random();
    
        if (randomNumber > 0.5) carStarted();
    
        else carCantStarted();
    };
    
    function carStarted() {
        drawStatus('Машина завелась');
    
        devLog('Машина завелась')
    
        processEls(startButtons, function(startButton){
            startButton.classList.add('hide')
        });
    
        gearboxStarted();
    
        plannedCrashStarted();
        
    }
    
    function carCantStarted() {
        drawStatus('Что-то пошло не так, нажми еще раз');
        devLog('Что то пошло не так');
    }
    
    function gearboxStarted() {
        let gearboxValue = 1;
    
        processEls(gearboxValueLabels, function(gearboxValueLabel){
            gearboxValueLabel.innerHTML = gearboxValue;
        });
    
    
        function increaceGearbox() {
            if (gearboxValue < 5) {
                gearboxValue++;
                processEls(gearboxValueLabels, function(gearboxValueLabel){
                    gearboxValueLabel.innerHTML = gearboxValue;
                });
            }
        }
        gearboxInterval = setInterval(increaceGearbox, 1000)
    }
    
    function plannedCrashStarted () {
        function engineCrashed() {
            console.log('Движок накрылся')
    
            drawStatus('Движок накрылся, машина остановилась');
    
            processEls(startButtons, function(startButton){
                startButton.classList.remove('hide')
            });
    
            processEls(gearboxValueLabels, function(gearboxValueLabel){
                gearboxValueLabel.innerHTML = 'N';
            });
    
            clearInterval(gearboxInterval);
            
        }
        setTimeout(engineCrashed, 3000);
        
        devLog('Ожидаем поломки')
    }

};







