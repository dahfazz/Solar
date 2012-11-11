var UFO = function UFO() {
    var _canvas,
        _stage,
        _ufo,
        _ufoDOMElement,
        _exportRoot,

        _init = function() {
            _canvas = window.canvas;
            console.log('canvas', _canvas)
 
            _stage = new createjs.Stage(_canvas);

            _ufo = document.getElementById("ufo");
            console.log('ufo', _ufo)
            _ufoDOMElement = new createjs.DOMElement(_ufo);

            //move it's rotation center at the center of the form
            _ufoDOMElement.regX = _ufo.offsetWidth*0.5;
            _ufoDOMElement.regY = _ufo.offsetHeight*0.5;
            //move the form above the screen
            _ufoDOMElement.x = _canvas.width * 0.5;
            _ufoDOMElement.y = _canvas.height * 0.5;
            _ufoDOMElement.z =  -500;
            console.log('_ufoDOMElement', _ufoDOMElement)

            //add the formDOMElement to the display list
            _stage.addChild(_ufoDOMElement);
            console.log('stage', _stage)
            createjs.Ticker.setFPS(32);
            createjs.Ticker.addListener(_stage);
             
            //Apply a tween to the form
            //createjs.Tween.get(_ufoDOMElement).to({alpha:1, y:_canvas.height * 0.5, rotation:720},2000, createjs.Ease.cubicOut);
            var tween = createjs.Tween.get(_ufoDOMElement);

            tween.call(_lambda).to({x:5},400).set({label:"hello!"}).call(_lambda);
            console.log('ufo', _ufo)
        },

        _lambda = function () {
            console.log('lambda')
        };

        _init();

        //document.addEventListener( 'onload', _init, false );
}