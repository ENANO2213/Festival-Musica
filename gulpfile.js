//Importación de funciones de gulp
import { src, dest, watch } from "gulp";
//Importación de todo SASS
import * as dartSass from "sass";
//Importación de la dependencia especifica para trabajar SASS desde Gulp
import gulpSass from "gulp-sass";
//Constante que une las ultimas 2 importaciones
const sass = gulpSass(dartSass);
//Función que indica a gulp la ruta de estilos SASS y donde mandar el resultado ya compilado utilizando pipes
export function css(done) {
  src("src/scss/app.scss")
    .pipe(sass())
    .pipe(dest("build/css"));

  done();
}
//Modo watch en Gulp
export function dev() {
    watch('src/scss/app.scss', css)
}