var Planet = function Planet(options) {
    // private properties
    var   _geometry,
            _material,
            _mesh,
            _loader,
            _texture,
            _object,
            _planet = this,

    _initialize = function() {


        /* TEXTURE */
        _texture = new THREE.Texture();
        _loader = new THREE.ImageLoader();
        _loader.addEventListener( 'load', function ( event ) {
            _texture.image = event.content;
            _texture.needsUpdate = true;
        } );
        _loader.load( 'textures/' + _planet.options.texture );

        /* GEOMETRY */
        _geometry = new THREE.SphereGeometry( _planet.options.radius, _planet.options.quality, _planet.options.quality);
        _material = new THREE.MeshBasicMaterial( { map: _texture, overdraw: true } );
        _mesh = new THREE.Mesh( _geometry, _material );
    };

    this.getPlanet = function() {
        return _mesh;
    };

    this.getOptions = function() {
        return _planet.options;
    };

    this.options = $.extend({}, {}, options);

    _initialize();
}