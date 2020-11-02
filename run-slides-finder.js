const slidesFinder = require( 'slides-finder' );
let options = {
    'ANGULAR_PORT': 4500,
    'SERVER_PORT': 4300,
    'SNAPSHOTS_PORT': 4400,
    'DEV_RENDER_PORT': 8500,
    'slidesListModulePathRender': 'node_modules/slides-render-angular/src/app/slides/slides-list.module.ts',
    'slidesRenderComponentPath': `.`,
}

slidesFinder.run( options );