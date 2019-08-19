export class RightAngledTriangleModel {
    constructor(
        public _a: number,
        public _b: number,
        public _c: number,
        public _alpha: number,
        public _beta: number,
        public _result: boolean,
        public _error: string,
        public _decimal: number,
        public _area: number,
    ){}

    calculateData() {
        let _a = Number(this._a);
        let _b = Number(this._b);
        let _c = Number(this._c);
        let _alpha = Number(this._alpha);
        let _beta = Number(this._beta);
        let _decimal = Number(this._decimal);

        let active: any = {
            _a: _a, _b: _b, _c: _c, _alpha: _alpha, _beta: _beta
        }

        //c = Math.sin(angleRad) * _Rin;
        //angleRad = angle / 180 * Math.PI;
        //angleDegree = radians * 180 / Math.PI

        switch(true) {
            case active._a > 0 && active._b > 0: {
                let c = Math.sqrt(_a * _a + _b * _b);
                this._c = Number(c.toFixed(_decimal));
                let beta = Math.atan(_b/_a) * 180 / Math.PI;
                let alpha = 90 - beta;
                this._alpha = Number(alpha.toFixed(_decimal));
                this._beta = Number(beta.toFixed(_decimal));
                this._result = true;
                break;
            }
            case active._a > 0 && active._c > 0: {
                let b = Math.sqrt(_c * _c - _a * _a);
                let beta = Math.acos(_a/_c) * 180 / Math.PI;
                let alpha = 90 - beta;
                this._b = Number(b.toFixed(_decimal));
                this._beta = Number(beta.toFixed(_decimal));
                this._alpha = Number(alpha.toFixed(_decimal));
                this._result = true;
                break;
            }
            case active._b > 0 && active._c > 0: {
                let a = Math.sqrt(_c * _c - _b * _b);
                let beta = Math.acos(a/_c) * 180 / Math.PI;
                let alpha = 90 - beta;
                this._a = Number(a.toFixed(_decimal));
                this._beta = Number(beta.toFixed(_decimal));
                this._alpha = Number(alpha.toFixed(_decimal));
                this._result = true;
                break;
            }
            case active._a > 0 && active._alpha > 0 && active._alpha < 90: {
                let alphaRad = _alpha * Math.PI / 180;
                let c = _a / Math.sin(alphaRad);
                let b = Math.sqrt(c * c - _a * _a);
                let beta = 90 - _alpha;
                this._c = Number(c.toFixed(_decimal));
                this._b = Number(b.toFixed(_decimal));
                this._beta = Number(beta.toFixed(_decimal));
                this._result = true;
                break;
            }
            case active._a > 0 && active._beta > 0 && active._beta < 90: {
                let betaRad = _beta * Math.PI / 180;
                let c = _a / Math.cos(betaRad);
                let b = Math.sqrt(c * c - _a * _a);
                let alpha = 90 - _beta;
                this._c = Number(c.toFixed(_decimal));
                this._b = Number(b.toFixed(_decimal));
                this._alpha = Number(alpha.toFixed(_decimal));
                this._result = true;
                break;
            }
            case active._b > 0 && active._alpha > 0 && active._alpha < 90: {
                let alphaRad = _alpha * Math.PI / 180;
                let c = _b / Math.cos(alphaRad);
                let a = Math.sqrt(c * c - _b * _b);
                let beta = 90 - _alpha;
                this._c = Number(c.toFixed(_decimal));
                this._a = Number(a.toFixed(_decimal));
                this._beta = Number(beta.toFixed(_decimal));
                this._result = true;
                break;
            }
            case active._b > 0 && active._beta > 0 && active._beta < 90: {
                let betaRad = _beta * Math.PI / 180;
                let c = _b / Math.sin(betaRad);
                let a = Math.sqrt(c * c - _b * _b);
                let alpha = 90 - _beta;
                this._c = Number(c.toFixed(_decimal));
                this._a = Number(a.toFixed(_decimal));
                this._alpha = Number(alpha.toFixed(_decimal));
                this._result = true;
                break;
            }
            case active._c > 0 && active._alpha > 0 && active._alpha < 90: {
                let alphaRad = _alpha * Math.PI / 180;
                let a = Math.sin(alphaRad) * _c;
                let b = Math.sqrt(_c * _c - a * a);
                let beta = 90 - _alpha;
                this._b = Number(b.toFixed(_decimal));
                this._a = Number(a.toFixed(_decimal));
                this._beta = Number(beta.toFixed(_decimal));
                this._result = true;
                break;
            }
            case active._c > 0 && active._beta > 0 && active._beta < 90: {
                let betaRad = _beta * Math.PI / 180;
                let a = Math.cos(betaRad) * _c;
                let b = Math.sqrt(_c * _c - a * a);
                let alpha = 90 - _beta;
                this._b = Number(b.toFixed(_decimal));
                this._a = Number(a.toFixed(_decimal));
                this._alpha = Number(alpha.toFixed(_decimal));
                this._result = true;
                break;
            }
            default: {
                this._error = 'You need at 2 inputs for calculations';
                console.log(this._error);
                break;              
            } 
        }
        let area = _a * _b / 2;
        if(_a > 0 && _b > 0) {
            this._area = Number(area.toFixed(_decimal));
        } else {
            this._area = null;
        }
    }
}

export class TriangleModel {
    constructor(
        public _a: number,
        public _b: number,
        public _c: number,
        public _alpha: number,
        public _beta: number,
        public _gamma: number,
        public _result: boolean,
        public _error: string,
        public _decimal: number,
        public _area: number,
        public _type: number,
        public _h: number,
        public _x: number
    ){}

    calculateData() {
        let _a = Number(this._a);
        let _b = Number(this._b);
        let _c = Number(this._c);
        let _alpha = Number(this._alpha);
        let _beta = Number(this._beta);
        let _gamma = Number(this._gamma);
        let _decimal = Number(this._decimal);
        let _type = Number(this._type);

        let active: any = {
            _a: _a, _b: _b, _c: _c, _alpha: _alpha, _beta: _beta, _gamma: _gamma
        }

        switch(true) {
            case active._a > 0 && active._b > 0 && active._c > 0: {
                //alpha
                let top = _b * _b + _c * _c - _a * _a;
                let bottom = 2 * _b * _c;
                let alpha = Math.acos(top/bottom) * 180 / Math.PI;
                this._alpha = Number(alpha.toFixed(_decimal));
                //beta
                let top2 = _a * _a + _c * _c - _b * _b;
                let bottom2 = 2 * _a * _c;
                let beta = Math.acos(top2/bottom2) * 180 / Math.PI;
                this._beta = Number(beta.toFixed(_decimal));
                //gamma
                let top3 = _a * _a + _b * _b - _c * _c;
                let bottom3 = 2 * _a * _b;
                let gamma = Math.acos(top3/bottom3) * 180 / Math.PI;
                this._gamma = Number(gamma.toFixed(_decimal));
                if(beta > 90) {
                    this._type = 2;
                }
                if(gamma > 90) {
                    this._type = 3;
                }
                this._result = true;
                break;
            }
            case active._a > 0 && active._b > 0 && active._alpha > 0: {
                let alphaRad = _alpha / 180 * Math.PI;
                let betaRad = Math.asin(Math.sin(alphaRad) * _b / _a);
                let beta = betaRad * 180 / Math.PI;
                if(_type === 2) {
                    beta = 180 - beta;
                }
                let gamma = 180 - _alpha - beta;
                let gammaRad = gamma / 180 * Math.PI;
                let c = Math.sqrt(_a * _a + _b * _b - 2 * _a * _b * Math.cos(gammaRad));
                if(beta > 90) {
                    this._type = 2;
                }
                if(gamma > 90) {
                    this._type = 3;
                }
                this._beta = Number(beta.toFixed(_decimal));
                this._gamma = Number(gamma.toFixed(_decimal));
                this._c = Number(c.toFixed(_decimal));
                this._result = true;
                break;
            }
            case active._a > 0 && active._c > 0 && active._beta > 0: {
                let betaRad = _beta / 180 * Math.PI;
                let b = Math.sqrt(_a * _a + _c * _c - 2 * _a * _c * Math.cos(betaRad));
                let gammaRad = Math.acos((_a * _a + b * b - _c * _c)/(2 * _a * b));
                let gamma = gammaRad * 180 / Math.PI;
                let alpha = 180 - _beta - gamma;
                if(_beta > 90) {
                    this._type = 2;
                }
                if(gamma > 90) {
                    this._type = 3;
                }
                this._b = Number(b.toFixed(_decimal));
                this._gamma = Number(gamma.toFixed(_decimal));
                this._alpha = Number(alpha.toFixed(_decimal));
                this._result = true;
                break;
            }
            case active._b > 0 && active._c > 0 && active._alpha > 0: {
                let alphaRad = _alpha / 180 * Math.PI;
                let a = Math.sqrt(_b * _b + _c * _c - 2 * _b * _c * Math.cos(alphaRad));
                let gammaRad = Math.acos((a * a + _b * _b - _c * _c)/(2 * a * _b));
                let gamma = gammaRad * 180 / Math.PI;
                let beta = 180 - _alpha - gamma;
                if(beta > 90) {
                    this._type = 2;
                }
                if(gamma > 90) {
                    this._type = 3;
                }
                this._a = Number(a.toFixed(_decimal));
                this._beta = Number(beta.toFixed(_decimal));
                this._gamma = Number(gamma.toFixed(_decimal));
                this._result = true;
                break;
            }
            case active._a > 0 && active._b > 0 && active._gamma > 0: {
                let gammaRad = _gamma / 180 * Math.PI;
                let c = Math.sqrt(_a * _a + _b * _b - 2 * _a * _b * Math.cos(gammaRad));
                let betaRad = Math.acos((_a * _a + c * c - _b * _b)/(2 * _a * c));
                let beta = betaRad * 180 / Math.PI;
                let alpha = 180 - beta - _gamma;
                if(beta > 90) {
                    this._type = 2;
                }
                if(_gamma > 90) {
                    this._type = 3;
                }
                this._c = Number(c.toFixed(_decimal));
                this._beta = Number(beta.toFixed(_decimal));
                this._alpha = Number(alpha.toFixed(_decimal));
                this._result = true;
                break;
            }
            case active._a > 0 && active._alpha > 0 && active._beta > 0: {
                let alphaRad = _alpha / 180 * Math.PI;
                let betaRad = _beta / 180 * Math.PI;
                let b = Math.sin(betaRad) * _a / Math.sin(alphaRad);
                let gamma = 180 - _alpha - _beta;
                let gammaRad = gamma / 180 * Math.PI;
                let c = Math.sqrt(_a * _a + b * b - 2 * _a * b * Math.cos(gammaRad));
                if(_beta > 90) {
                    this._type = 2;
                }
                if(gamma > 90) {
                    this._type = 3;
                }
                this._c = Number(c.toFixed(_decimal));
                this._b = Number(b.toFixed(_decimal));
                this._gamma = Number(gamma.toFixed(_decimal));
                this._result = true;
                break;
            }
            case active._b > 0 && active._alpha > 0 && active._beta > 0: {
                let alphaRad = _alpha / 180 * Math.PI;
                let betaRad = _beta / 180 * Math.PI;
                let a = Math.sin(alphaRad) * _b / Math.sin(betaRad);
                let gamma = 180 - _alpha - _beta;
                let gammaRad = gamma / 180 * Math.PI;
                let c = Math.sqrt(a * a + _b * _b - 2 * a * _b * Math.cos(gammaRad));
                if(_beta > 90) {
                    this._type = 2;
                }
                if(gamma > 90) {
                    this._type = 3;
                }
                this._c = Number(c.toFixed(_decimal));
                this._a = Number(a.toFixed(_decimal));
                this._gamma = Number(gamma.toFixed(_decimal));
                this._result = true;
                break;
            }
            case active._a > 0 && active._alpha > 0 && active._gamma > 0: {
                let alphaRad = _alpha / 180 * Math.PI;
                let gammaRad = _gamma / 180 * Math.PI;
                let c = Math.sin(gammaRad) * _a / Math.sin(alphaRad);
                let beta = 180 - _alpha - _gamma;
                let betaRad = beta / 180 * Math.PI;
                let b = Math.sqrt(_a * _a + c * c - 2 * _a * c * Math.cos(betaRad));
                if(beta > 90) {
                    this._type = 2;
                }
                if(_gamma > 90) {
                    this._type = 3;
                }
                this._c = Number(c.toFixed(_decimal));
                this._b = Number(b.toFixed(_decimal));
                this._beta = Number(beta.toFixed(_decimal));
                this._result = true;
                break;
            }
            case active._c > 0 && active._alpha > 0 && active._gamma > 0: {
                let alphaRad = _alpha / 180 * Math.PI;
                let gammaRad = _gamma / 180 * Math.PI;
                let a = Math.sin(alphaRad) * _c / Math.sin(gammaRad);
                let beta = 180 - _alpha - _gamma;
                let betaRad = beta / 180 * Math.PI;
                let b = Math.sqrt(a * a + _c * _c - 2 * a * _c * Math.cos(betaRad));
                if(beta > 90) {
                    this._type = 2;
                }
                if(_gamma > 90) {
                    this._type = 3;
                }
                this._a = Number(a.toFixed(_decimal));
                this._b = Number(b.toFixed(_decimal));
                this._beta = Number(beta.toFixed(_decimal));
                this._result = true;
                break;
            }
            case active._b > 0 && active._beta > 0 && active._gamma > 0: {
                let betaRad = _beta / 180 * Math.PI;
                let gammaRad = _gamma / 180 * Math.PI;
                let c = Math.sin(gammaRad) * _b / Math.sin(betaRad);
                let alpha = 180 - _beta - _gamma;
                let alphaRad = alpha / 180 * Math.PI;
                let a = Math.sqrt(_b * _b + c * c - 2 * _b * c * Math.cos(alphaRad));
                if(_beta > 90) {
                    this._type = 2;
                }
                if(_gamma > 90) {
                    this._type = 3;
                }
                this._a = Number(a.toFixed(_decimal));
                this._c = Number(c.toFixed(_decimal));
                this._alpha = Number(alpha.toFixed(_decimal));
                this._result = true;
                break;
            }
            case active._c > 0 && active._beta > 0 && active._gamma > 0: {
                let betaRad = _beta / 180 * Math.PI;
                let gammaRad = _gamma / 180 * Math.PI;
                let b = Math.sin(betaRad) * _c / Math.sin(gammaRad);
                let alpha = 180 - _beta - _gamma;
                let alphaRad = alpha / 180 * Math.PI;
                let a = Math.sqrt(b * b + _c * _c - 2 * b * _c * Math.cos(alphaRad));
                if(_beta > 90) {
                    this._type = 2;
                }
                if(_gamma > 90) {
                    this._type = 3;
                }
                this._a = Number(a.toFixed(_decimal));
                this._b = Number(b.toFixed(_decimal));
                this._alpha = Number(alpha.toFixed(_decimal));
                this._result = true;
                break;
            }
            default: {
                this._error = 'You need at 2 inputs for calculations';
                this._result = false;
                console.log(this._error);
                break;              
            } 
        }
        if(this._type === 1) {
            let betaRad = this._beta / 180 * Math.PI;
            let h = Math.sin(betaRad) * this._c;
            let area = h * this._a / 2;
            let x = Math.sqrt(_c * _c - h * h);
            this._area = Number(area.toFixed(this._decimal));
            this._h = Number(h.toFixed(this._decimal));
            this._x = Number(x.toFixed(this._decimal));
        } else if(this._type === 2) {
            let a = 180 - this._beta;
            let aRAd = a / 180 * Math.PI;
            let h = Math.sin(aRAd) * this._c;
            let area = h * this._a / 2;
            let x = Math.sqrt(_c * _c - h * h);
            this._area = Number(area.toFixed(this._decimal));
            this._h = Number(h.toFixed(this._decimal));
            this._x = Number(x.toFixed(this._decimal));
        } else if(this._type === 3){
            let a = 180 - this._gamma;
            let aRAd = a / 180 * Math.PI;
            let h = Math.sin(aRAd) * this._b;
            let area = h * this._a / 2;
            let x = Math.sqrt(_b * _b - h * h);
            this._area = Number(area.toFixed(this._decimal));
            this._h = Number(h.toFixed(this._decimal));
            this._x = Number(x.toFixed(this._decimal));
        }
    }
}
