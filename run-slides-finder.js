const slidesFinder = require('slides-finder');
let options = {
    'ANGULAR_PORT': 4500,
    'SERVER_PORT': 4300,
    'SNAPSHOTS_PORT': 4400,
    'DEV_RENDER_PORT': 5500,
}

slidesFinder.run(options);