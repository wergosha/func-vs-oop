function CarView(){
    this._carStartedListeners = [];
    this._gearbox = new Gearbox();
};

CarView.prototype = {
    render: function(containerId) {
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
            </div>`;

        this._startButtons = document.getElementById(containerId).querySelectorAll("[data-role='start-car']");
        this._statusLabels = document.getElementById(containerId).querySelectorAll("[data-role='status']");
        this._gearboxValueLabels = document.getElementById(containerId).querySelectorAll("[data-role='gearbox-value']");

        var that = this; // привязываем контекст this (CarView) к переменной that

        this._processEls(this._startButtons, function(startButton){
            startButton.addEventListener('click', function(ev) {
                that._carStartListener(ev); // используем that, чтобы контекст привязался к CarView
            });
        });
    },

    addEventListener: function(eventName, listener){
        if (eventName == 'start')
        this._carStartedListeners.push(listener);
    },

    onCarStarted: function() {
        this._processEls(this._startButtons, function(item){
            item.disabled = true;
        });
        

    },

    drawStatus: function(status) {
        this._processEls(this._statusLabels, function(statusLabel){
            statusLabel.innerHTML = status;
        });
    },


    _processEls: function(arrayOfEls, processor) {
        for (let i = 0; i < arrayOfEls.length; i++) {
            let item = arrayOfEls[i];
            processor.apply(this, [item]);
        }
    },

    _carStartListener: function(ev) {
        for (let i = 0; i < this._carStartedListeners.length; i++) {
            const listener = this._carStartedListeners[i];
            listener();            
        }
    },
    
    gearboxRender: function() {
        this._processEls(this._gearboxValueLabels, function(gearboxValueLabel){
            gearboxValueLabel.innerHTML = this._gearbox.gearboxValue;
        }); 
    }
};