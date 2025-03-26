//Importación de funciones de gulp
import { src, dest, watch, series } from "gulp";
//Importación de todo SASS
import * as dartSass from "sass";
//Importación de la dependencia especifica para trabajar SASS desde Gulp
import gulpSass from "gulp-sass";
//Constante que une las ultimas 2 importaciones
const sass = gulpSass(dartSass);
//Función para compilar archivos de JS desde Gulp
export function js(done) {
  src("src/js/app.js").pipe(dest("build/js"));

  done();
}

//Función que indica a gulp la ruta de estilos SASS y donde mandar el resultado ya compilado utilizando pipes
export function css(done) {
  src("src/scss/app.scss", { sourcemaps: true })
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("build/css", { sourcemaps: true }));

  done();
}
//Modo watch en Gulp
export function dev() {
  watch("src/scss/**/*.scss", css);
  watch("src/js/**/*.js", js);
}
//Función que por default ejecuta a las otras funciones dentro de este archivo, ya sea en serie o parelelo
export default series(js, css, dev);
