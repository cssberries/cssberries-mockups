const slidesRender = require( 'slides-render-angular' );
let options = {
    'ANGULAR_PORT': 8500,
    'SERVER_PORT': 8300,
    'SNAPSHOTS_PORT': 8400
}

slidesRender.run( options );