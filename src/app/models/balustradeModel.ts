export class PanelSimpleModel {
    constructor(
        public _length: number,
        public _barDiam: number,
        public _barNum: number,
        public _gap: number,
        public _startPoints: any[]
    ){}

    calculateData() {
        let L = Number(this._length);
        let BDiam = Number(this._barDiam);
        let BNum = Number(this._barNum);
        this._startPoints = [];

        let gap = (L - BDiam * BNum) / (BNum + 1);

        let start = gap + BDiam / 2;
        let centre = gap + BDiam;
        this._startPoints.push(start.toFixed(0));

        for(let i = 1; i < BNum; i++) {
            start += centre;
            this._startPoints.push(start.toFixed(0));
        }

        if(L && BDiam && BNum && gap > 0) {
            this._gap = Number(gap.toFixed(1));
            this._startPoints.push(L);
        } else {
            this._gap = null;
            this._startPoints = [];
        }
    }
}

export class PanelRingModel {
    constructor(
        public _length: number,
        public _barDiam: number,
        public _barNum: number,
        public _ringDiam: number,
        public _ringNum: number,
        public _type: number,
        public _gapEmpty: number,
        public _startPoints: any[],
        public _page: string,
    ) {}

    calculateData() {
        let length = Number(this._length);
        let barDiam = Number(this._barDiam);
        let ringDiam = Number(this._ringDiam);
        let ringNum = Number(this._ringNum);
        let _type = Number(this._type);

        let emptyNum = ringNum;
        if(_type === 1) {
            emptyNum = ringNum + 1;
        }
        if(_type === 2) {
            emptyNum = ringNum;
        }
        if(_type === 3) {
            emptyNum = ringNum - 1;
        }

        let barNum = emptyNum + ringNum - 1;

        let _gapEmpty = (length - barNum * barDiam - ringDiam * ringNum) / emptyNum;
        let s1;
        let si;
        let centerE = _gapEmpty + barDiam;
        let centerR = ringDiam + barDiam;

        //Calculate _startPoints
        if(_type === 2) {
            this._startPoints = [];
            s1 = _gapEmpty + barDiam/2;
            si = s1;
            this._startPoints.push(s1.toFixed(0));
            for(let i=0; i< barNum/2-1; i++) {
                si += centerR;
                this._startPoints.push(si.toFixed(0));
                si += centerE;
                this._startPoints.push(si.toFixed(0));
            }
            this._startPoints.push(length);
        } else if(_type === 3) {
            this._startPoints = [];
            s1 = ringDiam + barDiam/2;
            si = s1;
            this._startPoints.push(s1.toFixed(0));
            for(let i=0; i< barNum/2-1; i++) {
                si += centerE;
                this._startPoints.push(si.toFixed(0));
                si += centerR;
                this._startPoints.push(si.toFixed(0));
            }
            let lastBar = si + centerE;
            this._startPoints.push(lastBar.toFixed(0));
            this._startPoints.push(length);
        } else {
            this._startPoints = [];
            s1 = _gapEmpty + barDiam/2;
            si = s1;
            this._startPoints.push(s1.toFixed(0));
            for(let i=0; i< barNum/2-1; i++) {
                si += centerR;
                this._startPoints.push(si.toFixed(0));
                si += centerE;
                this._startPoints.push(si.toFixed(0));
            }
            this._startPoints.push(length);
        }

        //Result
        if(length && barDiam && ringDiam && ringNum) {
            this._barNum = barNum;
            this._gapEmpty = Number(_gapEmpty.toFixed(1));
        } else {
            this._barNum = null;
            this._gapEmpty = null;
        }
    }
}

export class BarHoopPanel {
    constructor(
        public _length: number,
        public _type: number,
        public _barDiam: number,
        public _barsNum: number,
        public _barsNum2: number,
        public _barsNum3: number,
        public _hoopDiam: number,
        public _hoopsNum: number,
        public _page: string,
        public _gap: number,
        public _startPoints: any[],
    ) {}

    calculateData() {
        let length = Number(this._length);
        let type = Number(this._type);
        let barDiam = Number(this._barDiam);
        let barsNum = Number(this._barsNum);
        let barsNum2 = Number(this._barsNum2);
        let barsNum3 = Number(this._barsNum3);
        let hoopDiam = Number(this._hoopDiam);
        let hoopsNum: number = 0;
        let barsNumCAL: number = 0;

        if(type === 1) {
            hoopsNum = barsNum - 1;
            this._hoopsNum = hoopsNum;
            this._page = 'one';
            barsNumCAL = barsNum;
        } else if(type === 2) {
            hoopsNum = barsNum2;
            this._hoopsNum = hoopsNum;
            this._page = 'two';
            barsNumCAL = barsNum2;
        } else {
            hoopsNum = barsNum3 + 1;
            this._hoopsNum = hoopsNum;
            this._page = 'three';
            barsNumCAL = barsNum3;
        }

        let gap = (length - ((barsNumCAL * barDiam) + (hoopsNum * hoopDiam))) / (hoopsNum + barsNumCAL + 1);

        if(gap > 0 && gap < length && barsNumCAL > 0) {
            this._gap = Number(gap.toFixed(1));
        } else {
            this._gap = null;
        }

        this.startPoints();

    }

    startPoints() {
        let barDiam = Number(this._barDiam);
        let barsNum = Number(this._barsNum);
        let barsNum2 = Number(this._barsNum2);
        let barsNum3 = Number(this._barsNum3);
        let hoopDiam = Number(this._hoopDiam);
        let hoopsNum = Number(this._hoopsNum);
        let type = Number(this._type);
        let s1 = 1;
        let xLength = 0;

        if(type === 3) {
            s1 = Number(this._gap) + (Number(this._hoopDiam) / 2);
        } else {
            s1 = Number(this._gap) + (Number(this._barDiam) / 2);
        }

        if(type === 1) {
            s1 = Number(this._gap) + (Number(this._barDiam) / 2);
            xLength = barsNum + hoopsNum - 1;
        } else if(type === 2) {
            s1 = Number(this._gap) + (Number(this._barDiam) / 2);
            xLength = barsNum2 + hoopsNum - 1;
        } else {
            s1 = Number(this._gap) + (Number(this._hoopDiam) / 2);
            xLength = barsNum3 + hoopsNum - 1;
        }

        let center = Number(this._gap)  + barDiam / 2 + hoopDiam / 2;
        let si = s1;

        let starts = [];
        starts.push(si);

        for(let i=0; i<xLength; i++) {
            si += center;
            let yx = Number(si.toFixed(0));
            starts.push(yx);
        }
        starts.push(Number(this._length));
        this._startPoints = starts;
    }

}

export class RakePanelModel {
    constructor(
        public _length: number,
        public _angle: number,
        public _barDiam: number,
        public _barsNum: number,
        public _gap: number,
        public _D: number,
        public _startPoints: any[]
    ){}

    calculateData() {
        let length = Number(this._length);
        let angle = Number(this._angle);
        let barDiam = Number(this._barDiam);
        let barsNum = Number(this._barsNum);

        //Calculate D
        let rad = Number(angle * 0.01745329252);
        let angleX = Math.sin(rad);

        let _D = Math.sin(rad) * length;

        //Calculate gap
        let gap = (_D - barDiam * barsNum) / (barsNum + 1);

        //Calculate start points
        let starts = [];
        this._startPoints = [];
        let diagonalBar = barDiam / angleX;
        let diagonalGap = gap / angleX;

        starts.push(diagonalGap.toFixed(0));

        let distance = diagonalBar + diagonalGap;

        let start = diagonalGap;
        if(barsNum < 100 && gap > 0) {
            for(let i = 0; i < barsNum - 1; i++) {
                start = start + distance;
                starts.push(start.toFixed(0));
            }
        }

        if(gap > 0) {
            this._gap = Number(gap.toFixed(1));
            this._startPoints = starts;
            this._D = Number(_D.toFixed(1));
        } else {
            this._gap = null;
            this._D = null;
        }

    }

}

export class SectionSimpleModel {

    constructor(
        private _sectionLength: number,
        private _type: string,
        private _panelsNum: number,
        private _panelLength: number,
        private _postsNum: number,
        private _postDiam: number,
        private _barDiam: number,
        private _barsNum: number,
        private _gap: number,
        private _startPoints: any[]
    ){}

    calculateData() {
        let sectionLength = Number(this._sectionLength);
        let type = this._type;
        let panelsNum = Number(this._panelsNum);
        let postDiam = Number(this._postDiam)
        let barDiam = Number(this._barDiam);
        let barsNum = Number(this._barsNum);

        this._startPoints = [];

        let postsNum = 0;
        if(type === 'one') {
            postsNum = panelsNum + 1;
        } else if(type === 'two') {
            postsNum = panelsNum;
        } else {
            postsNum = panelsNum - 1;
        }

        let _Dpanel = (sectionLength - postsNum * postDiam) / panelsNum;

        let gap = (_Dpanel - barsNum * barDiam) / (barsNum + 1);

        let start = gap + barDiam / 2;
        let center = gap + barDiam;

        if(_Dpanel > 1 && _Dpanel < this._sectionLength) {
            this._panelLength = Number(_Dpanel.toFixed(1));
            this._postsNum = Number(postsNum);
            this._gap = Number(gap.toFixed(1));
            //console.log(gap);
        } else {
            this._panelLength = null;
            this._postsNum = null;
            this._gap = null;
        }

        this._startPoints.push(start.toFixed(0));

        for(let i = 1; i < barsNum; i++) {
            start += center;
            this._startPoints.push(start.toFixed(0));
        }

    }

}

export class SectionRakeModel {

    constructor(
        private _sectionLength: number,
        private _type: string,
        private _angle: number,
        private _panelsNum: number,
        private _panelD: number,
        private _panelLength: number,
        private _postsNum: number,
        private _postDiam: number,
        private _barDiam: number,
        private _barsNum: number,
        private _gap: number,
        private _D: number,
        private _startPoints: any[]
    ){}

    calculateData() {
        let sectionLength = Number(this._sectionLength);
        let type = this._type;
        let panelsNum = Number(this._panelsNum);
        let postDiam = Number(this._postDiam)
        let barDiam = Number(this._barDiam);
        let barsNum = Number(this._barsNum);
        let angle = Number(this._angle);

        this._startPoints = [];

        let postsNum = 0;
        if(type === 'one') {
            postsNum = panelsNum + 1;
        } else if(type === 'two') {
            postsNum = panelsNum;
        } else {
            postsNum = panelsNum - 1;
        }

        //Calculate D
        let rad = Number(angle * 0.01745329252);
        let angleX = Math.sin(rad);
        let _D = Math.sin(rad) * sectionLength;

        let _k = sectionLength / _D;

        let _Dpanel = (_D - postsNum * postDiam) / panelsNum;
        let _panelLength = _Dpanel * _k;

        let gap = (_Dpanel - barsNum * barDiam) / (barsNum + 1);

        let start = gap * _k;
        let center = (gap + barDiam) * _k;

        if(_Dpanel > 1 && _Dpanel < this._sectionLength) {
            this._panelD = Number(_Dpanel.toFixed(1));
            this._postsNum = Number(postsNum);
            this._panelLength = Number(_panelLength.toFixed(0));
            this._gap = Number(gap.toFixed(1));
        } else {
            this._panelD = null;
            this._postsNum = null;
            this._panelLength = null;
            this._gap = null;
        }

        this._startPoints.push(start.toFixed(0));

        for(let i = 1; i < barsNum; i++) {
            start += center;
            this._startPoints.push(start.toFixed(0));
        }

    }

}

export class TopRailAModel {
    constructor(
        private _length: number,
        private _D: number,
        private _barDiam: number,
        private _barNum: number,
        private _gap: number,
        private _startPoints: any[]
    ){}

    calculateData() {
        let L = Number(this._length);
        let D = Number(this._D);
        let BDiam = Number(this._barDiam);
        let BNum = Number(this._barNum);
        this._startPoints = [];

        let gap = (L - BDiam * BNum) / (BNum);

        let start = gap + BDiam / 2 - D;
        let centre = gap + BDiam;
        this._startPoints.push(start.toFixed(0));

        for(let i = 1; i < BNum; i++) {
            start += centre;
            this._startPoints.push(start.toFixed(0));
        }

        if(L && BDiam && BNum && gap > 0) {
            this._gap = Number(gap.toFixed(1));
        } else {
            this._gap = null;
            this._startPoints = [];
        }
    }
}

export class TopRailBModel {
    constructor(
        private _length: number,
        private _D: number,
        private _barDiam: number,
        private _barNum: number,
        private _hoopDiam: number,
        private _hoopsNum: number,
        private _gap: number,
        private _startPoints: any[]
    ){}

    calculateData() {
        let L = Number(this._length);
        let D = Number(this._D);
        let BDiam = Number(this._barDiam);
        let BNum = Number(this._barNum);
        let hoopDiam = Number(this._hoopDiam);
        this._startPoints = [];

        let gap = (L - BDiam * BNum - hoopDiam * BNum) / (BNum * 2);

        let start = gap + hoopDiam / 2 - D;
        let centre = gap + BDiam / 2 + hoopDiam / 2;
        this._startPoints.push(start.toFixed(0));

        for(let i = 1; i < (BNum * 2); i++) {
            start += centre;
            this._startPoints.push(start.toFixed(0));
        }

        if(L && BDiam && BNum && gap > 0) {
            this._gap = Number(gap.toFixed(1));
            this._hoopsNum = Number(BNum);
        } else {
            this._gap = null;
            this._startPoints = [];
        }
    }
}

export class TopRailCModel {
    constructor(
        private _length: number,
        private _D: number,
        private _barDiam: number,
        private _barNum: number,
        private _hoopDiam: number,
        private _hoopsNum: number,
        private _gap: number,
        private _startPoints: any[]
    ){}

    calculateData() {
        let L = Number(this._length);
        let D = Number(this._D);
        let BDiam = Number(this._barDiam);
        let BNum = Number(this._barNum);
        let hoopDiam = Number(this._hoopDiam);
        this._startPoints = [];

        let gap = (L - BDiam * BNum - hoopDiam * BNum) / (BNum * 2);

        let start = gap + BDiam / 2 - D;
        let centre = gap + BDiam / 2 + hoopDiam / 2;
        this._startPoints.push(start.toFixed(0));

        for(let i = 1; i < (BNum * 2); i++) {
            start += centre;
            this._startPoints.push(start.toFixed(0));
        }

        if(L && BDiam && BNum && gap > 0) {
            this._gap = Number(gap.toFixed(1));
            this._hoopsNum = Number(BNum);
        } else {
            this._gap = null;
            this._startPoints = [];
        }
    }
}

export class TopRailDModel {
    constructor(
        private _length: number,
        private _D1: number,
        private _barDiam: number,
        private _hoopDiam: number,
        private _D2: number,
        private _gap: number,
        private _S1: number,
        private _S2: number
    ){}

    calculateData() {

        let _length = Number(this._length);
        let _D1 = Number(this._D1);
        let barDiam = Number(this._barDiam);
        let hoopDiam = Number(this._hoopDiam);

        //console.log(_length + ', ' + _D1 + ', ' + barDiam + ', ', + hoopDiam);

        let _gap = _length - hoopDiam / 2 - barDiam / 2;
        //console.log('Gap: ', _gap)
        let _S2 = _length - hoopDiam / 2 - _D1;
        let t = _length - _D1 - hoopDiam;
        let _D2 = _gap - t;
        let _S1 = _length - _D2 - barDiam / 2;

        if(_gap > 0 && _gap < _length) {
            this._D2 = Number(_D2.toFixed(1));
            this._gap = Number(_gap.toFixed(1));
            this._S1 = Number(_S1.toFixed(1));
            this._S2 = Number(_S2.toFixed(1));
        } else {
            this._D2 = null;
            this._S1 = null;
            this._S2 = null;
            this._gap = null;
        }
        
    }
}