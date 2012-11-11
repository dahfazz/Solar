var Galaxy = function (options) {
    // private properties
    var _domContainer,
        _camera,
        _scene,
        _group,
        _canvas,
        _context,
        _texture,
        _renderer,
        _rotWorldMatrix,
        _clock = new THREE.Clock(),
        _galaxy = this,
        _play = $('.control.play'),
        _stop = $('.control.stop'),

        _initialize = function () {
            _domContainer = document.getElementById('galaxy');

            /* Camera */
            _camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 1, 100000 );
            _camera.position.set(0, 0, _galaxy.options.cameraZ);

            /* Scene */
            _scene = new THREE.Scene();

            /* Canvas */
            _canvas = document.createElement( 'canvas' );

            _context = _canvas.getContext( '2d' );

            _texture = new THREE.Texture( _canvas );
            _texture.needsUpdate = true;

            _sound = new Sound( [ 'sounds/' + _galaxy.options.track], 275, 1 );
            _sound.position.copy( _scene.position );
            //_sound.play();

            /* Renderer */
            _renderer = new _galaxy.options.renderer(_galaxy.options.rendererOptions);
            _renderer.setSize( window.innerWidth, window.innerHeight );

            

            _addPlanets();

        },  

        _addPlanets = function() {

            for (var i = _galaxy.options.aPlanets.length - 1; i >= 0; i--) {
                _scene.add( _galaxy.options.aPlanets[i].getPlanet() );
                _animate(_galaxy.options.aPlanets[i]);
            };

            _domContainer.appendChild( _renderer.domElement );
        },


        _onkeypress = function() {
            console.log('key pressed')
        },

        _onkeydown = function(e) {
            switch(e.keyCode) {
                case 38 : _camera.position.z -= 100;
                break;
                case 40 : _camera.position.z += 100;
                break;
                case 39 : _camera.position.x += 100;
                break;
                case 37 : _camera.position.x -= 100;
                break;
            }
        },

        _onkeyup = function() {
            console.log('key up')
        },

        // Rotate an object around an arbitrary axis in object space
        
        _rotateAroundObjectAxis = function(object, axis, radians) {
            rotObjectMatrix = new THREE.Matrix4();
            rotObjectMatrix.makeRotationAxis(axis.normalize(), radians);
            object.matrix.multiplySelf(rotObjectMatrix);      // post-multiply
            object.rotation.setEulerFromRotationMatrix(object.matrix);
        },

        // Rotate an object around an arbitrary axis in world space       
        _rotateAroundWorldAxis = function(object, axis, radians) {
            rotWorldMatrix = new THREE.Matrix4();
            rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);
            rotWorldMatrix.multiplySelf(object.matrix);        // pre-multiply
            object.matrix = rotWorldMatrix;
            object.rotation.setEulerFromRotationMatrix(object.matrix);
        },

       _animate = function(obj) {
            requestAnimationFrame(function(){
                _animate(obj);
            });

            _render(obj.getPlanet(), obj.getOptions());
        },

        _render = function(obj, opt) {
            var t = _clock.getElapsedTime();
            
            var e_angle = opt.revolution * t * 0.1;
            obj.position.set(opt.dist * Math.cos(e_angle) , 0, opt.dist * Math.sin(e_angle));
            obj.rotation.y += opt.rotation;
            _renderer.render( _scene, _camera );

        },

        _onWindowResize = function () {

            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );

        };

        window.addEventListener( 'resize', _onWindowResize, false );

        _play.bind('click.sound', function() {
            _sound.play();
            $('.control').removeClass('active');
            _play.addClass('active');
        });

        _stop.bind('click.sound', function() {
            _sound.pause();
            $('.control').removeClass('active');
            _stop.addClass('active');
        });

        document.addEventListener('keypress', _onkeypress, false);
        document.addEventListener('keydown', _onkeydown, false);
        document.addEventListener('keyup', _onkeyup, false);

         this.options = $.extend({}, {
            cameraZ : 9000
         }, options);

        _initialize();
}