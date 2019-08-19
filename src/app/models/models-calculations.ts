export class StairRegulationsModel {
    constructor(
        public _stepGoingMin?: number,
        public _stepGoingMax?: number,
        public _stepRiseMin?: number,
        public _stepRiseMax?: number,
        public _pitchMax?: number,
        public _kiteINMIn?: number,
        public _kite2GoingMax?: number,
        public _kite2GoingMin?: number,
        public _headroomMin?: number,
        public _reducedHeadroomMin?: number,
        public _handrailHeightMin?: number,
        public _handrailHeightMax?: number,
        public _gapMax?: number,
        public _obstacleMin?: number,
        public _openRiserGap?: number
    ){
    }
}

export const REGULATIONSDATA: any = {
    _stepGoingMax: 300,
    _stepGoingMin: 220,
    _stepRiseMax: 220,
    _stepRiseMin: 150,
    _pitchMax: 42,
    _kiteINMIn: 50,
    _kite2GoingMax: 700,
    _kite2GoingMin: 500,
    _headroomMin: 2000,
    _reducedHeadroomMin: 1800,
    _handrailHeightMin: 900,
    _handrailHeightMax: 1000,
    _gapMax: 100,
    _obstacleMin: 400,
    _openRiserGap: 100
}

export class StairModel {
    constructor(
        public _name: string,
        public riseMin: number,
        public riseMax: number,
        public goingMin: number,
        public goingMax: number,
        public _pitchMax: number,
        public _obstacleGap: number,
        public _private: boolean,
        public _active: boolean
    ) {}
}

export const STAIRREGDATA: StairModel[] = [
    {
        _name: 'Private stair A',
        riseMin: 150,
        riseMax: 220,
        goingMin: 245,
        goingMax: 260,
        _pitchMax: 42,
        _obstacleGap: 400,
        _private: true,
        _active: true
    },
    {
        _name: 'Private stair B',
        riseMin: 165,
        riseMax: 200,
        goingMin: 223,
        goingMax: 300,
        _pitchMax: 42,
        _obstacleGap: 400,
        _private: true,
        _active: false
    },
    {
        _name: 'Institutional and assembly stair',
        riseMin: 135,
        riseMax: 180,
        goingMin: 280,
        goingMax: 340,
        _pitchMax: 42,
        _obstacleGap: 400,
        _private: true,
        _active: false
    },
    {
        _name: 'Utility stair',
        riseMin: 150,
        riseMax: 190,
        goingMin: 250,
        goingMax: 320,
        _pitchMax: 42,
        _obstacleGap: 400,
        _private: true,
        _active: false
    },
    {
        _name: 'Easy access stair',
        riseMin: 150,
        riseMax: 170,
        goingMin: 250,
        goingMax: 320,
        _pitchMax: 42,
        _obstacleGap: 400,
        _private: true,
        _active: false
    }
]

export class SimpleStairModel {
    constructor(
        public _stairGoing?: number,
        public _stairRise?: number,
        public _stepGoing?: number,
        public _stepRise?: number,
        public _stepNumber?: number,
        public _pitch?: number,
        public _diagonal?: number,
        public _A?: number,
        public _B?: number,
        public _gap?: number,
        public _obstacleStepNum?: number,
        public _headroomTop?: number,
        public _headroomBottom?: number,
        public _L?: number,
        public _P1?: number,
        public _P2?: number,
        public _H1?: number,
        public _H2?: number,
        public minHeadroom?: number
    ) {

    } 

    calculateStairData() {
        let stairGoing = Number(this._stairGoing);
        let stepNumber = Number(this._stepNumber);
        let stairRise = Number(this._stairRise);

        let stepGoing = stairGoing / (stepNumber - 1);
        let stepRise = stairRise / stepNumber;
        let pitch = Number(Math.atan(stepRise/stepGoing));
        let _A = this._A;
        let _B = this._B;

        pitch = pitch / Math.PI * 180;

        //console.log(pitch);
        //sconsole.log('Step rise: ' + stepRise + '. Step Going: ' + stepGoing);

        let obticaleGap = _A - _B - (stepGoing * (this._stepNumber - 1));
        
        if(stairGoing && stairRise && stepNumber > 1) {
            this._stepGoing = Number(stepGoing.toFixed(0));
            this._stepRise = Number(stepRise.toFixed(1));
            this._pitch = Number(pitch.toFixed(2));
            this._gap = Math.round(obticaleGap);
            this._obstacleStepNum = stepNumber - 1;
        } else {
            this._stepGoing = null;
            this._stepRise = null;
            this._pitch = null;
            this._gap = null;
            this._H1 = null;
            this._H2 = null;
        }
        
    }

    calculateHeadroom() {
        let P1 = Number(this._P1);
        let P2 = Number(this._P2);
        let headroomTop = Number(this._headroomTop);
        let headroomBottom = Number(this._headroomBottom);
        let L = Number(this._L);
        let stairRise = Number(this._stairRise);
        let stairGoing = Number(this._stairGoing);
        let stepRise = Number(this._stepRise);
        let pitch = Number(this._pitch);

        let y = stairRise + headroomTop - headroomBottom;
        let x = P2 - P1;
        let _alpha = Math.atan(y/x);
        //console.log('alpha: ', _alpha);

        let h1 = this._stepGoing * Math.tan(_alpha); //Important how to use radian value
        //console.log('h1: ', h1);

        //Calculate _H2
        if(L + stairGoing < P2) {
            let d = P2 - stairGoing - L;
            let h2 = d * Math.tan(_alpha);
            let H2 = headroomBottom - stepRise + h2;
            //console.log('d: ', d);
            //console.log('h2: ', h2);
            //console.log('H2: ', H2);
            this._H2 = Number(H2.toFixed(1));
        } else {
            let d1 = stairGoing + L - P2;
            let _pitch = pitch * Math.PI / 180;
            let H2b = d1 * Math.tan(_pitch);
            //console.log('Headroom 2 short: ', H2b);
            //console.log('d1: ', d1);
            H2b = headroomBottom - H2b - stepRise;
            this._H2 = Number(H2b.toFixed(1));
        }

        //Calculate _H1
        if(P1 > L) {
            let d2 = P1 - L;
            let _pitch = pitch * Math.PI / 180;
            let H1 = d2 * Math.tan(_pitch);
            H1 = headroomTop + H1;
            //console.log('d2: ', d2);
            //console.log('H1: ', H1);
            this._H1 = Number(H1.toFixed(1));
        } else {
            let d3 = L - P1;
            let H1b = Math.tan(_alpha) * d3;
            H1b = headroomTop - H1b;
            //console.log('d3: ', d3);
            //console.log('delta_H: ', H1b);
            //console.log('pitch in radians: ', _alpha)
            this._H1 = Number(H1b.toFixed(1));
        }
    }

    calculateStairData2() {
        let diagonal = Number(this._diagonal);
        let pitch = Number(this._pitch);
        let stepNum = Number(this._stepNumber);
        let a = Math.sin(pitch/180 * Math.PI) * diagonal;
        let b = Math.cos(pitch/180 * Math.PI) * diagonal;

        let stepGoing = a / (stepNum - 1);
        this._stepGoing = Number(stepGoing.toFixed(1));

        let stepRise = b / (stepNum  - 1);
        this._stepRise = Number(stepRise.toFixed(1));
    }
}

export class ProStairModel {
    constructor(
        public _screedToScreed: number,
        public _FFL: number,
        public _D1: number,
        public _D2: number,
        public _D3: number,
        public _A1: number,
        public _A2: number,
        public _stepNum: number,
        public _pitch: number,
        public _treadRise: number,
        public _startPoints: any[]
    ){

    }

    calculateProStairData() {
        let screedToScreed = Number(this._screedToScreed);
        let FFL = Number(this._FFL);
        let D1 = Number(this._D1);
        let D2 = Number(this._D2);
        let D3 = Number(this._D3);
        let A1 = Number(this._A1);
        let A2 = Number(this._A2);
        let stepNum = Number(this._stepNum);

        FFL = screedToScreed - A1 - D1 + A2 + D3;

        let treadRise = FFL / stepNum;

        if(stepNum > 0) {
            this._treadRise = Number(treadRise.toFixed(1));
        } else {
            this._treadRise = 0;
        }

        this._startPoints = [];

        let start_1 = A1 + D1 + treadRise - D2;
        let startTop = FFL + A1 + D1 - D3;
        let startTop_2 = startTop - D3 - treadRise - D2;
        let start_i = start_1 + treadRise;

        start_1 = Number(start_1.toFixed(1));
        startTop = Number(startTop.toFixed(1));
        startTop_2 = Number(startTop_2.toFixed(1));
        start_i = Number(start_i.toFixed(1));

        this._startPoints.push(start_1);
        this._startPoints.push(start_i);

        for(let i = 0; i < stepNum - 4; i++) {
            start_i += treadRise;
            this._startPoints.push(Number(start_i.toFixed(1)));
        }

        this._startPoints.push(startTop_2);
        this._startPoints.push(startTop);

    }

    calculateHeadroomI() {

    }

}

export class StairKiteModel {
    constructor(
        public _width: number,
        public _goingT: number,
        public _goingK: number,
        public _D: number,
        public _d1: number,
        public _d2: number,
        public _A: number,
        public _B: number,
        public _C: number,
    ) {

    }

    calculateData() {
        let _width = Number(this._width);
        let _D = Number(this._D);
        let _angle = 30 / 180 * Math.PI;

        let _radius = _width / 2 + _D;
        let _goingK = _radius * 2 * Math.PI / 12;
        this._goingK = Number(_goingK.toFixed(1));

        let _d2 = Math.tan(_angle) * _D;
        this._d1 = Number(_d2.toFixed(1));

        let x = _D - _d2;
        let _d1 = Math.sqrt(x * x * 2);
        this._d2 = Number(_d1.toFixed(1));

        let A = Math.tan(_angle) * (_width + _D);
        this._A = Number(A.toFixed(1));

        let C = _width + _D;
        this._C = Number(C.toFixed(0));

        let B = C - A;
        this._B = Number(B.toFixed(1));
    }
}

export class LoftConversionModel {
    constructor(
        public _A?: number,
        public _B?: number,
        public _C?: number,
    ) {}

    calculateB() {
        let _A = Number(this._A);
        let _C = Number(this._C);

        let _B = _A + ((_C - _A) / 2);
        if(_B > _A) {
            this._B = Number(_B.toFixed(1));
        } else {
            this._B = null;
        }
    }
}

export class TwoKiteModel {
    constructor(
        public _A: number,
        public _width: number,
        public _D: number,
        public _gK: number,
        public _rise?: number,
        public _2RG?: number
    ){}

    calculateData() {
        let _A = Number(this._A);
        let _width = Number(this._width);
        let _rise = Number(this._rise);

        let _D = _A - _width;
        let _R = _width/2 + _D;
        let _cir = 2 * Math.PI * _R;
        let _gK = _cir / 8;

        if(_A && _width) {
            this._gK = Number(_gK.toFixed(1));
            this._D = Number(_D.toFixed(1));
        } else {
            this._gK = null;
            this._D = null;
        }

        if(_rise && _gK) {
            let _rg = _gK + 2 * _rise;
            this._2RG = Number(_rg.toFixed(1));
        } else {
            let _rg = null;
            this._2RG = null;
        }
        
    }
}

export class ThreeKiteModel {
    constructor(
        public _A: number,
        public _B: number,
        public _C: number,
        public _width: number,
        public _D: number,
        public _gK: number,
        public _d1: number,
        public _d2: number,
    ){}

    calculateData() {
        let _C = Number(this._C);
        let _width = Number(this._width);

        let _D = _C - _width;
        let _R = _width/2 + _D;
        let _cir = 2 * Math.PI * _R;
        let _gK = _cir / 12;

        //Calculate A and B 
        let fi = 30 / 180 * Math.PI; //angle in radians
        let x = _C * Math.tan(fi);
        let y = _C - x;

        //Calculate d1 and d2
        let d1 = _D * Math.tan(fi);
        let z = _D - d1;
        let d2 = Math.sqrt(z * z + z * z);

        if(_C && _width) {
            this._gK = Number(_gK.toFixed(1));
            this._D = Number(_D.toFixed(1));
            this._A = Number(x.toFixed(1));
            this._B = Number(y.toFixed(1));
            this._d1 = Number(d1.toFixed(1));
            this._d2 = Number(d2.toFixed(1));
        } else {
            this._gK = null;
            this._D = null;
            this._A = null;
            this._B = null;
            this._d1 = null;
            this._d2 = null;
        }
    }
}

export class FourKiteModel {
    constructor(
        public _A: number,
        public _B: number,
        public _C: number,
        public _width: number,
        public _D: number,
        public _gK: number,
        public _d1: number,
        public _d2: number,
    ){}

    calculateData() {
        let _C = Number(this._C);
        let _width = Number(this._width);

        let _D = _C - _width;
        let _R = _width/2 + _D;
        let _cir = 2 * Math.PI * _R;
        let _gK = _cir / 16;

        //Calculate A and B
        let fi = 22.5 / 180 * Math.PI; //angle in radians
        let x = _C * Math.tan(fi);
        let y = _C - x;

        //Calculate d1 and d2
        let d1 = _D * Math.tan(fi);
        let z = _D - d1;
        let d2 = _D - d1;

        if(_C && _width) {
            this._gK = Number(_gK.toFixed(1));
            this._D = Number(_D.toFixed(1));
            this._A = Number(x.toFixed(1));
            this._B = Number(y.toFixed(1));
            this._d1 = Number(d1.toFixed(1));
            this._d2 = Number(d2.toFixed(1));
        } else {
            this._gK = null;
            this._D = null;
            this._A = null;
            this._B = null;
            this._d1 = null;
            this._d2 = null;
        }
    }
}

export class TaperedTreadsA {
    constructor(
        public _width: number,
        public _Rin: number,
        public _Rout: number,
        public _angle: number,
        public _treadNum: number,
        public _D1: number,
        public _D2: number,
        public _angleT: number,
        public _Lmid: number
    ) {}    
    
    calculateData() {
        let _Rout = Number(this._Rout);
        let _Rin = Number(this._Rin);
        let _angle = Number(this._angle);
        let _treadNum = Number(this._treadNum);

        let _width = _Rout - _Rin;
        let _angleT = _angle / _treadNum;
        let angleRad = (_angleT/2) / 180 * Math.PI; //angle in radians
        let _RMid = _Rout - (_width/2);
        let _LMid = 2 * Math.PI * _RMid / 360 * _angleT;
        let _D1 = Math.sin(angleRad) * _Rin;
        let _D2 = Math.sin(angleRad) * _Rout;

        if(_Rout && _Rin && _angle && _treadNum) {
            this._Lmid = Number(_LMid.toFixed(1));
            this._width = Number(_width.toFixed(0));
            this._angleT = Number(_angleT.toFixed(1));
            this._D1 = Number(_D1.toFixed(1));
            this._D2 = Number(_D2.toFixed(1));
        } else {
            this._Lmid = null;
            this._width = null;
            this._angleT = null;
            this._D1 = null;
            this._D2 = null;
        }
    }
}

export class TaperedTreadsB {
    constructor(
        public _width: number,
        public _Rin: number,
        public _Rout: number,
        public _angle: number,
        public _treadNum: number,
        public _D1: number,
        public _D2: number,
        public _angleT: number,
        public _Lout: number,
        public _Lin: number,
        public _Dout: number,
        public _Din: number
    ) {}    
    
    calculateData() {
        let _Rout = Number(this._Rout);
        let _Rin = Number(this._Rin);
        let _angle = Number(this._angle);
        let _treadNum = Number(this._treadNum);
        let _Dout = Number(this._Dout);
        let _Din = Number(this._Din);

        let _width = _Rout - _Rin;
        let _angleT = _angle / _treadNum;
        let angleRad = (_angleT/2) / 180 * Math.PI; //angle in radians

        //Calculate L Out
        let _Rout2 = _Rout - _Dout;
        let _Lout = 2 * Math.PI * _Rout2 / 360 * _angleT;

        //Calculate L In
        let _Rin2 = _Rin + _Din;
        let _Lin = 2 * Math.PI * _Rin2 / 360 * _angleT;

        let _D1 = Math.sin(angleRad) * _Rin;
        let _D2 = Math.sin(angleRad) * _Rout;

        if(_Rout && _Rin && _angle && _treadNum) {
            this._Lout = Number(_Lout.toFixed(1));
            this._Lin = Number(_Lin.toFixed(1));
            this._width = Number(_width.toFixed(0));
            this._angleT = Number(_angleT.toFixed(1));
            this._D1 = Number(_D1.toFixed(1));
            this._D2 = Number(_D2.toFixed(1));
        } else {
            this._width = null;
            this._angleT = null;
            this._D1 = null;
            this._D2 = null;
            this._Lin = null;
            this._Lout = null;
        }
    }
}

export class LandingModel {
    constructor(
        public _A: number,
        public _width: number,
        public _going: number,
        public _treadNum: number,
        public _landingWidth: number,
    ) {}    
    
    calculateData() {
        let _A = Number(this._A);
        let _going = Number(this._going);
        let _treadNum = Number(this._treadNum);

        let _landingWidth = _A - (_going * _treadNum);

        if(_A && _going && _treadNum) {
            this._landingWidth = Number(_landingWidth.toFixed(0));
        } else {
            this._landingWidth = null;
        }
    }
}

export class BalustradeAModel {
    constructor(
        public _landing: number,
        public _Tgoing: number,
        public _barD: number,
        public _postD: number,
        public _stepNum: number,
        public _d: number,
        public _A: number,
        public _barNum: number,
        public _gap: number
    ) {}

    calculateData() {
        let landing = Number(this._landing);
        let going = Number(this._Tgoing);
        let d = Number(this._d);
        let postD = Number(this._postD);
        let barD = Number(this._barD);
        let barNum = Number(this._barNum);
        let stepNum = Number(this._stepNum);

        let _innerLength = ((stepNum - 1) * going) - postD - d + landing;
        let gap = (_innerLength - barNum * barD) / (barNum + 1);

        if(going && barNum && barD && stepNum > 0) {
            this._gap = Number(gap.toFixed(1));
            this._A = Number(_innerLength.toFixed(0));
        } else {
            this._A = null;
            this._gap = null;
        }
    }
}

export class DifferentFloorLevelModel {
    constructor(
        public _D1: number,
        public _D2: number,
        public _D3: number,
        public _A1: number,
        public _A2: number,
        public _Trise:number,
        public _FFL: number,
        public _BTB: number,
        public _riseNum: number,
        public _FFLResult: number,
        public _BTBResult: number,
        public _type: boolean,
        public _startPointsA: any[],
        public _startPointsB: any[]
    ) {}

    calculateData() {
        let _D1 = Number(this._D1);
        let _D2 = Number(this._D2);
        let _D3 = Number(this._D3);
        let _A1 = Number(this._A1);
        let _A2 = Number(this._A2);
        let _FFL = Number(this._FFL);
        let _riseNum = Number(this._riseNum);
        let _BTB = Number(this._BTB);
        let _Trise = 0;

        this._startPointsA = [];
        this._startPointsB = [];

        if(this._type) {
            _BTB = _FFL + _D1 + _A1 - _D3 - _A2;
            this._BTBResult = Number(_BTB.toFixed(0));
            _Trise = _FFL / _riseNum;
            if(_riseNum > 0) {
                this._Trise = Number(_Trise.toFixed(2));
            }
        } else {
            _FFL = _BTB + _A2 + _D3 - _A1 - _D1;
            this._FFLResult = Number(_FFL.toFixed(0));
            _Trise = _FFL / _riseNum;
            if(_riseNum > 0) {
                this._Trise = Number(_Trise.toFixed(2));
            }
        }

        let a1 = _A1 + _D1 + _Trise;
        let b1 = a1 - _D2;
        let bLast = _BTB + _A2;

        this._startPointsA.push(a1.toFixed(1));
        this._startPointsB.push(b1.toFixed(1));

        for(let i = 1; i < _riseNum; i++) {
            a1 += _Trise;
            this._startPointsA.push(a1.toFixed(1));
        }

        for(let j = 2; j < _riseNum; j++) {
            b1 += _Trise;
            this._startPointsB.push(b1.toFixed(1));
        }
        this._startPointsB.push(bLast.toFixed(0));
    }
}

export class CheckRiseGoingModel {
    constructor(
        public _length: number,
        public _angle: number,
        public _Tgoing: number,
        public _Trise: number,
        public _stepNum: number,
        public _startPoints: any[]
    ){}

    calculateData() { 
        let L = Number(this._length);
        let stepNum = Number(this._stepNum);
        let _angle = Number(this._angle);

        let angleRad = (90 -_angle) * Math.PI / 180; //angle in radians
        let c = L / stepNum;
        let rise = Math.sin(angleRad) * c;
        let going = Math.cos(angleRad) * c;

        if(L && stepNum && _angle) {
            this._Trise = Number(rise.toFixed(1));
            this._Tgoing = Number(going.toFixed(1));
        } else {
            this._Tgoing = null;
            this._Trise = null;
            this._startPoints = [];
        }

        this._startPoints = [];
        let ci = 0;

        for(let i=0; i <stepNum; i++) {
            ci += c;
            this._startPoints.push(ci.toFixed(1));
        }
    }

}

export class SpiralStairModel {
    constructor(
       public _d: number,
       public _radius: number,
       public _Tangle: number,
       public _Trise: number,
       public _Tnum: number,
       public _BendingRadius: number,
       public _BarLength: number,
       public _BalustradeAngle: number,
       public _A: number 
    ){}

    calculateData() {
        let d = Number(this._d);
        let R = Number(this._radius);
        let Ta = Number(this._Tangle);
        let rise = Number(this._Trise);
        let Tnum = Number(this._Tnum);

        let c = 2 * Math.PI * R;
        let h = rise * 360 / Ta;
        //let length = Math.sqrt(c * c + h * h);
        let x = 4 * Math.PI * Math.PI * R * R + h * h;
        let y = 4 * Math.PI * Math.PI * R;
        let handrailRadius = x / y;

        let circumferenceCenterBar = 2 * Math.PI * (R + d/2);
        let c_tread = circumferenceCenterBar / 360 * Ta;
        let A = c_tread * Tnum;

        let tgRad = Math.atan(rise/c_tread);
        let tAngle = tgRad * 180 / Math.PI;
        let balustradeAngle = 90 - tAngle;

        //Check bar length
        let cc = Math.sqrt(c_tread * c_tread + rise * rise);
        let B = cc * Tnum;

        if(d && R && Ta && rise && Tnum) {
            this._BendingRadius = Number(handrailRadius.toFixed(1));
            this._BarLength = Number(B.toFixed(0));
            this._BalustradeAngle = Number(balustradeAngle.toFixed(1));
            this._A = Number(A.toFixed(0));
        } else {
            this._BendingRadius = null;
            this._BarLength = null;
            this._BalustradeAngle = null;
            this._A = null;
        }
    }

}

export class PatternModel {
    constructor(
        public _length: number,
        public _width: number,
        public _a: number,
        public _d1: number,
        public _d2: number,
        public _d3: number,
        public _d4: number,
        public _cutNumH: number,
        public _cutNumV: number,
        public _G1: number,
        public _G2: number,
        public _C1: number,
        public _C2: number,
        public _type: boolean,
        public _string: string,
        public _startPointsA: any[],
        public _startPointsB: any[],
    ){}

    calculateData() {
        let L = Number(this._length);
        let W = Number(this._width);
        let d1 = Number(this._d1);
        let d2 = Number(this._d2);
        let d3 = Number(this._d3);
        let d4 = Number(this._d4);
        let fi = Number(this._a);
        let cutH = Number(this._cutNumH);
        let cutV = Number(this._cutNumV);

        let c1 = (L - d3 - d4 - fi) / (cutH - 1);
        let g1 = c1 - fi;
        let c2 = (W - d2 - d1 - fi) / (cutV - 1);
        let g2 = c2 - fi;

        if(L && W && d1 && d2 && d2 && d3 && d4 && fi && cutH && cutV) {
            if(cutH > 1) {
                this._C1 = Number(c1.toFixed(1));
                this._G1 = Number(g1.toFixed(1));
            }
            if(cutV > 1) {
                this._C2 = Number(c2.toFixed(1));
                this._G2 = Number(g2.toFixed(1));
            }
        } else {
            this._C1 = null;
            this._C2 = null;
            this._G1 = null;
            this._G2 = null;
        }
        let H1 = d3 + fi / 2;
        this._startPointsA = [];
        this._startPointsA.push(H1.toFixed(0));
        for(let i = 1; i < cutH; i++) {
            H1 += c1;
            this._startPointsA.push(H1.toFixed(0));
        }
        this._startPointsA.push(L);

        let V1 = d1 + fi / 2;
        this._startPointsB = [];
        this._startPointsB.push(V1.toFixed(0));
        for(let j = 1; j < cutV; j++) {
            V1 += c2;
            this._startPointsB.push(V1.toFixed(0));
        }
        this._startPointsB.push(W);
    }
}
