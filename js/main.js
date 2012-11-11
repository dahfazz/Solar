(function($) {
    
    var aPlanets = [],
    _EARTH_REVOL = 3,
    _EARTH_ROT = 0.015,
    quality = 50;

    aPlanets.push( new Planet({
        name: 'sun',
        texture: 'sun.jpg',
        radius: 850,
        dist: 0,
        rotation: 0,
        revolution: 0,
        quality: quality
    }));

    aPlanets.push( new Planet({
        name: 'mercury',
        texture: 'mercury.jpg',
        radius: 120,
        dist: 1000,
        rotation: _EARTH_ROT * .017,
        revolution: _EARTH_REVOL * .24,
        quality: quality
    }));

    aPlanets.push( new Planet({
        name: 'venus',
        texture: 'venus.jpg',
        radius: 290,
        dist: 1800,
        rotation: _EARTH_ROT * .004,
        revolution: _EARTH_REVOL * .616,
        quality: quality
    }));

    aPlanets.push( new Planet({
        name: 'earth',
        texture: 'earth.jpg',
        radius: 290,
        dist: 2800,
        rotation: _EARTH_ROT,
        revolution: _EARTH_REVOL,
        quality: quality
    }));

    aPlanets.push( new Planet({
        name: 'mars',
        texture: 'mars.jpg',
        radius: 170,
        dist: 3600,
        rotation: _EARTH_ROT * .98,
        revolution: _EARTH_REVOL * 1.3,
        quality: quality
    }));

    aPlanets.push( new Planet({
        name: 'jupiter',
        texture: 'jupiter.jpg',
        radius: 700,
        dist: 5000,
        rotation: _EARTH_ROT * 2.4,
        revolution: _EARTH_REVOL * 1.5,
        quality: quality
    }));

    aPlanets.push( new Planet({
        name: 'saturn',
        texture: 'saturn.jpg',
        radius: 500,
        dist: 6500,
        rotation: _EARTH_ROT * 2.34,
        revolution: _EARTH_REVOL * 1.3,
        quality: quality
    }));

    aPlanets.push( new Planet({
        name: 'uranus',
        texture: 'uranus.jpg',
        radius: 280,
        dist: 7800,
        rotation: _EARTH_ROT * 1.548,
        revolution: _EARTH_REVOL * 1.5,
        quality: quality
    }));

    aPlanets.push( new Planet({
        name: 'neptune',
        texture: 'neptune.jpg',
        radius: 280,
        dist: 8700,
        rotation: _EARTH_ROT * 1.5,
        revolution: _EARTH_REVOL * .8,
        quality: quality
    }));

    aPlanets.push( new Planet({
        name: 'pluto',
        texture: 'pluto.jpg',
        radius: 120,
        dist: 9800,
        rotation: _EARTH_ROT * .166,
        revolution: _EARTH_REVOL * .8,
        quality: quality
    }));

    aPlanets.push( new Planet({
        name: 'deathstar',
        texture: 'deathstar.jpg',
        radius: 200,
        dist: 10500,
        rotation: _EARTH_ROT * 0.1,
        revolution: _EARTH_REVOL * .6,
        quality: quality
    }));

    var solarsystem = new Galaxy({
        //renderer : THREE.CanvasRenderer
        renderer: THREE.WebGLRenderer,
        rendererOptions : {
            antialias: true
        },
        aPlanets: aPlanets,
        track: 'invasion.mp3'
    });
})(jQuery)