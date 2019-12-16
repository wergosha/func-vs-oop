function Car(containerId) {  

    // Car logic / Bussiness Logic Layer
    that = this;
    this._engine = new Engine();
    this._gearbox = new Gearbox();
    this._view = new CarView();
    
    this._view.addEventListener('start', function(){
        that.start(); 
    });
    
    //Utility logic
    this._logger = new Logger();
    this._view.render(containerId);
}

Car.prototype = {

    // interface
    start: function() {

        let startResult = this._engine.start();
        if (startResult) {
            this._view.drawStatus('Машина завелась!');
            this._view.onCarStarted();
            debugger;
            this._view.gearboxRender();
            this._gearbox.start();
            
            
        } else {
            this._view.drawStatus('Машина не завелась, попробуй еще раз!');
        } 
    },

    // private methods
    _carStart: function() {
        this._logger.log('Машина завелась')
        
        
    },


    _carCantStart: function() {
        this._logger.log('Машина не завелась ')
        this._view.drawStatus('Машина не завелась, попробуй еще раз!')
        
        
    } 
};