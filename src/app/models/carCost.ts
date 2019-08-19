export class CarModel {
    constructor(
        private _type: string,
        private _scale: string,
        private _fuelPrice: number,
        private _distance: number,
        private _travelLabel: string,
        private _cars: any[]
    ) {

    } 

    addCar(name: string, fuelConsumption: number) {
        var x = 1;
        if (this._type === 'A'){
            x = fuelConsumption / 100;
        } else {
            x = fuelConsumption / 100;
        }
        this._cars.push({
            _name: name,
            _fuelConsumption: fuelConsumption,
            _times: x
        });
    }

    deleteCar(car) {
        let index = this._cars.indexOf(car);
        if(index > -1) {
            this._cars.splice(index, 1);
        }
    }

    calculateData(model: any) {

        if (model._scale === 'A' && model._type === 'A' ) {
            this._travelLabel = 'Travel distance year(miles):';
            this._distance = Number(model._distance);
        }
        else if(model._scale === 'A' && model._type === 'B') {
            this._travelLabel = 'Travel distance year(kilometres):';
            this._distance = Number(model._distance);
        }
        else if (model._scale === 'B' && model._type === 'A') {
            this._travelLabel = 'Travel distance month(miles):';
            this._distance = Number(model._distance) * 12;
        }
        else if (model._scale === 'B' && model._type === 'B') {
            this._travelLabel = 'Travel distance month(kilometres):';
            this._distance = Number(model._distance) * 12;
        }
        else if (model._scale === 'C' && model._type === 'A') {
            this._travelLabel = 'Travel distance week(miles):';
            this._distance = Number(model._distance) * 52;
        }
        else if (model._scale === 'C' && model._type === 'B') {
            this._travelLabel = 'Travel distance week(kilometres):';
            this._distance = Number(model._distance) * 52;
        }

    }

}