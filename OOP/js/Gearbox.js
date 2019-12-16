function Gearbox() {
    this.gearboxValue = 'N';
    this._logger = new Logger();
}

Gearbox.prototype = {
    start: function() {
        this.gearboxValue = 1;
    
        
        let that = this;

        gearboxInterval = setInterval(function() {
            that._increaceGearbox();
        }, 1000)

    },

    _increaceGearbox: function() {
        if (this.gearboxValue < 5) {
            this.gearboxValue++; 
        }
        this._logger.log("Из корбки передач: " + this.gearboxValue)
    }

    // _plannedCrash

}