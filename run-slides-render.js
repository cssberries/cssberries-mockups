const slidesRender = require('slides-render-angular');
let options = {
    'ANGULAR_PORT': 5500,
    'SERVER_PORT': 5300,
    'SNAPSHOTS_PORT': 5400
}

slidesRender.run(options);