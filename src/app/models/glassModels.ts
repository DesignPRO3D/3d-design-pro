export class GlassBalustradeAModel {
    constructor(
        public _postsCentre: number,
        public _handrailD: number,
        public _gapA: number,
        public _gapB: number,
        public _gapC: number,
        public _height: number,
        public _panelsNum: number,
        public _postD: number,
        public _postsNum: number,
        public _glassWidth: number,
        public _glassHeight: number,
        public _startPoints: any[]
    ){}

    calculateData() {
        let postsCentre = Number(this._postsCentre);
        let handrailD = Number(this._handrailD);
        let gapA = Number(this._gapA);
        let gapB = Number(this._gapB);
        let gapC = Number(this._gapC);
        let balHeight = Number(this._height);
        let panelsNum = Number(this._panelsNum);
        let postD = Number(this._postD);

        let glassHeight = balHeight - handrailD - gapC - gapB;
        let s1 = postsCentre / panelsNum;
        let centre = s1;
        let glassWidth = s1 - gapA * 2 - postD;

        this._startPoints = [];

        this._startPoints.push(s1.toFixed(0));
        
        for(let i = 0; i < panelsNum; i++) {
            s1 = s1 + centre;
            this._startPoints.push(s1.toFixed(0));
        }

        if(glassWidth > 0 && glassWidth < postsCentre) {
            this._glassHeight = Number(glassHeight.toFixed(0));
            this._glassWidth = Number(glassWidth.toFixed(0));
            this._postsNum = panelsNum + 1;
        }

    }

}

export class GlassBalustradeBModel {
    constructor(
        public _postsCentre: number,
        //public _handrailD: number,
        public _gapA: number,
        public _gapB: number,
        //public _gapC: number,
        public _height: number,
        public _panelsNum: number,
        public _postD: number,
        public _postsNum: number,
        public _glassWidth: number,
        public _glassHeight: number,
        public _startPoints: any[]
    ){}

    calculateData() {
        let postsCentre = Number(this._postsCentre);
        //let handrailD = Number(this._handrailD);
        let gapA = Number(this._gapA);
        let gapB = Number(this._gapB);
        //let gapC = Number(this._gapC);
        let balHeight = Number(this._height);
        let panelsNum = Number(this._panelsNum);
        let postD = Number(this._postD);

        let glassHeight = balHeight - gapB;
        let s1 = postsCentre / panelsNum;
        let centre = s1;
        let glassWidth = s1 - gapA * 2 - postD;

        this._startPoints = [];

        this._startPoints.push(s1.toFixed(0));
        
        for(let i = 1; i < panelsNum; i++) {
            s1 = s1 + centre;
            this._startPoints.push(s1.toFixed(0));
        }

        if(glassWidth > 0 && glassWidth < postsCentre) {
            this._glassHeight = Number(glassHeight.toFixed(0));
            this._glassWidth = Number(glassWidth.toFixed(0));
            this._postsNum = panelsNum + 1;
        }

    }

}

export class GlassBalustradeCModel {
    constructor(
        public _sectionL: number,
        public _gapA: number,
        public _gapB: number,
        public _panelsNum: number,
        public _glassWidth: number,
    ){}

    calculateData() {

        let _length = Number(this._sectionL);
        let _D = Number(this._gapA);
        let _gap = Number(this._gapB);
        let _panelsNum = Number(this._panelsNum);

        let _glassW = (_length - _D * 2 - _gap * (_panelsNum - 1)) / _panelsNum;

        if(_panelsNum > 0) {
            this._glassWidth = Number(_glassW.toFixed(0));
        } else {
            this._glassWidth = null;
        }

    }

}