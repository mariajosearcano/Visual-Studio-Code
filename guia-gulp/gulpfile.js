//require: es como importar en node
const gulp = require('gulp');

//SINTAXIS MAS BASICA DE UNA TAREA DE GULP
//primer parametro el nombre de la tarea, segundo una funcion que indique que es lo que va a hacer esa tarea
//gulp.tasks('myTask', () => //toca escribir gulp myTasks en terminal
gulp.tasks('default', () => //basta con escribir gulp en terminal
    gulp.src('./origen')
        .pipe(plugin1) //pipe: lo que hace es coger los datos que se estan prosesando es pasarlos a otro modulo o a otro plugin 
        .pipe(plugin2)
        .pipe(plugin3)
        .pipe(galp.dest('./origen'))
);
//gulp trabaja a base de plugins

//gulp.tasks();
//gulp.src();//gulp.src('./scss'); //ruta de origen, de donde gulp va a tomar los archivos o la informacion con la que va a trabajar
//gulp.dest();//gulp.dest('./css'); //donde va a dejar los archivos despues de procesarlos con la tarea indicada
//gulp.watch();

//primer parametro es el directorio en que va a buscar, segundo va a recibir un array de tareas que va a realizar
//gulp.watch('./origen', ['myTasks']); //asi no tengo que escribir en terminal gulp lo que sea

gulp.task('default', () => {
    gulp.watch('./origen', ['myTask']); //el gulp.watch esta constantemente revisando el directorio de origen, si hay algun cambio ejecuta myTask
});