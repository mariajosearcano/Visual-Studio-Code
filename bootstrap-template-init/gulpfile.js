const gulp = require('gulp'); //obtener gulp
const browserSync = required('browser-sync'); //obtener browserSync
const sass = require('gulp-sass'); //obtener gulp-sass

//una tarea de gulp, que tiene una funcion
gulp.task('sass', () => { //la funcion retorna gulp.src
//el parametro sass indica que tipo de archivos se procesaran en esta tarea: realmente es el nombre de la tarea o en que orden se ejecutan las mismas
    return gulp.src([ //src toma un arreglo, en donde se especifica que archivos se tomaran como origen o QUE ARCHIVO VAMOS A TENER QUE PROCESAR EN ESTA TAREA?
        //archivos que procesa
        'node_modules/bootstrap/scss/bootstrap.scss',
        'src/scss/*.scss' //*.scss: tome todos los archivos que terminen en scss
    ])
    //pipe(): se utiliza para canalizar o enlazar una serie de transformaciones o acciones a aplicar a los archivos que están siendo procesados
    .pipe(sass({outputStyle: 'compressed'})) //.pipe(sass({outputStyle: 'compressed'})): se utiliza para comprimir el estilo de salida de los archivos CSS generados a partir de archivos Sass.
    //sass(): se encargará de tomar los archivos Sass especificados en gulp.src() y compilarlos en archivos CSS, aplicando todas las características y reglas de Sass en el proceso. El resultado se enviará al siguiente paso en la cadena de tuberías de Gulp para su procesamiento adicional o su escritura en el sistema de archivos.
    //outputStyle: se utiliza para especificar el estilo de salida del CSS compilado a partir de los archivos Sass
    //compressed: se utiliza para especificar el estilo de salida del CSS compilado en una versión comprimida. Cuando se utiliza compressed, el CSS resultante se generará sin espacios en blanco, saltos de línea ni comentarios, lo que resulta en un archivo CSS minificado y altamente optimizado
    .pipe(gulp.dest('src/css')) //el destino de los archivos ya procesados es la carpeta css
    //.pipe(browserSync()): se utiliza para sincronizar y recargar automáticamente el navegador cuando se realizan cambios en los archivos de origen
    .pipe(browserSync.stream()); //lo inyecta en el html
});
//esta tarea toma el codigo sass bootstrap y nuestro y lo procesa. lo convierte en css y lo coloca en nuestra carpeta css, ademas lo sincroniza con el navegador

gulp.task('js', () => {
    return gulp.src([ //gulp.src: para especificar los archivos de origen que se copiarán
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/popper.js/dist/umd/popper.min.js'
    ])
    .pipe(gulp.dest('src/js')) //Los archivos de origen se envían a través de la tubería (pipe) para que se realice la acción deseada. En este caso, la acción es copiar los archivos al directorio "src/js" utilizando gulp.dest
    .pipe(browserSync.stream()); //browserSync.stream(): para notificar a BrowserSync que se ha agregado un nuevo archivo al directorio "src/js". Esto permite que el navegador se actualice automáticamente cuando se agregan nuevos archivos JavaScript.
});
//se encarga de copiar los archivos JavaScript de las dependencias de Bootstrap, jQuery y Popper.js a la carpeta "src/js" de tu proyecto.

//aqui dice que cuando cree un servidor(serve), automaticamente ejecute la tarea sass
gulp.task('serve', ['sass'], () => {
    browserSync.init({ //que inicie el servidor en la carpeta src (servidor local)
        server: './src'
    });

    //se usa gulp.watch para observar los cambios en las direcciones especificadas
    gulp.watch([
        'node_modules/bootstrap/scss/bootstrap.scss',
        'src/scss/*.scss'
    ], ['sass']) //cuando se detecta un cambio se vuelven a t=compilar los archivos sass de las rutas especificadas(se vuelve a ejecutar la tarea sass que hace todo lo dicho anteriormente)
    /*
        gulp.watch: se utiliza para observar y detectar cambios en los archivos especificados y ejecutar tareas de Gulp en respuesta a esos cambios. Permite automatizar tareas de desarrollo, como la compilación de archivos, la recarga del navegador o cualquier otra tarea definida en Gulp, cada vez que se modifica un archivo específico.
    
        La sintaxis básica de gulp.watch es la siguiente:
        gulp.watch(glob, [tasks])

        glob es un patrón de archivos que se va a observar. Puede ser un archivo específico, un directorio o un patrón que coincida con varios archivos.
        [tasks] es una matriz de tareas de Gulp que se ejecutarán cuando se detecten cambios en los archivos que coincidan con el patrón especificado en glob.

        Cuando se ejecuta gulp.watch, comienza a monitorear los archivos que coinciden con el patrón glob. Si se detecta un cambio en cualquiera de esos archivos, se ejecutarán las tareas de Gulp especificadas en [tasks].
    */

    //tambien vigila los cambios en el archivo html y se recarga la pagina
    gulp.watch('src/*.html').on('change', browserSync.reload);
});
//En resumen, este código configura un entorno de desarrollo que compila los archivos Sass, inicia un servidor de desarrollo y actualiza automáticamente los cambios en el navegador cuando se modifican los archivos HTML o Sass.

gulp.task('font-awesome', () => {
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
        .pipe(gulp.dest('src/css'));
});

gulp.task('fonts', () => {
    return gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('src/fonts'));
});

gulp.task('default', ['js', 'serve', 'font-awesome', 'font']);
//se define una tarea por defecto llamada "default" utilizando gulp.default. Esta tarea se ejecutará automáticamente cuando se ejecute el comando gulp sin ningún argumento adicional.