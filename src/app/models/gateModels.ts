export class SimpleGateModel {
    constructor(
        private _dogBars: boolean,
        private _gateWidth: number,
        private _postDiam: number,
        private _gapB: number,
        private _D: number,
        private _barDiam: number,
        private _barsNum: number,
        private _gap: number,
        private _widthB: number,
        private _barLength: number,
        private _startPointsA: any[],
        private _startPointsB: any[]
    ){}

    calculateData() {
        let gateWidth = Number(this._gateWidth);
        let postDiam = Number(this._postDiam);
        let gapB = Number(this._gapB);
        let _D = Number(this._D);
        let barDiam = Number(this._barDiam);
        let barsNum = Number(this._barsNum);

        let barLength = (gateWidth - 2 * postDiam - gapB - 2 * _D) / 2;
        let widthB = barLength + postDiam + _D;
        let gap = (barLength - barDiam * barsNum) / (barsNum + 1);

        if(gap > 0 && gap < gateWidth) {
            this._widthB = Number(widthB.toFixed(0));
            this._barLength = Number(barLength.toFixed(0));
            this._gap = Number(gap.toFixed(1));
        }

        this._startPointsA = [];

        var startA = gap / 2;
        this._startPointsA.push(startA.toFixed(0));
        var centerA = (gap + barDiam) / 2;
        var startsA = barsNum * 2;

        for(let i = 0; i < startsA; i++) {
            startA = startA + centerA;
            this._startPointsA.push(startA.toFixed(0));
        }

        this._startPointsB = [];
        var startB = gap + barDiam / 2;
        var centerB = gap + barDiam;
        this._startPointsB.push(startB.toFixed(0));

        for(let i = 1; i < barsNum; i++) {
            startB = startB + centerB;
            this._startPointsB.push(startB.toFixed(0));
        }

    }
}