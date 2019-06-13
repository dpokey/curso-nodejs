/*  ---- Pruebas en node con Mochan ----  */
/* 
  Aprenderemos a como configurar las pruebas para un proyecto de node  

  Directorio utils: almacenara funciones de utilidad, como la adicion de un numero

/*  ---- Mocha Library ----  */
/*   
  Utilizaremos la libreria Mocha para hacer pruebas de las funciones
  Para evitar que la libreria de Mocha sea parte de proyecto de produccion, la instalaremos con
  Estas dependencias van a ser instaladas localmente pero no en heroku

  npm install mocha --save-dev

  Caso de Prueba 
  Un caso de prueba es una funcion que ejecuta algun codigo. y si las cosas van bien, se considera que las cosas han pasado

  Archivo utils/utils.test.js : va a almacenar nuestros casos de prueba. cuando utilizamos la extencion test.js, le estamos diciendo a nuestra aplicacion que va a almacenar nuestros casos de prueba
  Un caso de prueba

  Una vez modificado el archivo ./utils/utils.test.js se debe modificar el script de test del archivo package.json 
  Vaqmos a llamar a mocha pasando como argumento los archivos reales que queremos
  Podemos usar comodines para pasar multiples archivos
  ** para buscar en cada directorio un unico archivo ** /utils.test.js
  Tambien podriamos cambiar el nombre del archivo por un ** /*.test.js

  "scripts": {
    "test": "mocha ** /*.test.js"
  },

  Para ejecutar nuestro script de pruebas ejecutamos. Esto va a ejecutar nuestro comando mocha
  npm test

/*  ---- nodemon test automatico ----  */
/*
  Para ejecutar el nodemon y este ejecute las pruebas automaticamente cuando detecto un cambio en los archivos, usamos el flag exec que ejecuta el comando que le pasemos como parametro
  nodemon --exec 'npm test'

  tambien podriamos crear un nuevo script personalisado en package.json que llamaria al comando de nodemon anteior

  "scripts": {
    "test": "mocha ** /*.test.js",
    "test-watch": "nodemon --exec \"npm test\""
  },    
*/

/*  ---- Mocha y Expect Library ----  */
/* 
  Nos permite hacer afirmaciones sobre los valores, ya sea por su tipo, o si una matriz tienen un elemento, etc 
  Para encontrar la libreria en google colocar
  mjackson expect es la version antigua
  facebook jest es la version nueva

  Una vez modificado el archivo ./utils/utils.test.js se debe modificar el script de test del archivo package.json 
  Vaqmos a llamar a los archivos de test solo agregando jest

  "scripts": {
    "test": "mocha ** /*.test.js",
  },   

  Si deseamos usarlo con nodemon

  "scripts": {
    "test": "jest,
    "test-watch": "nodemon --exec \"npm test\""
  },   
*/

/*  ---- jest Library ----  */
/* 
  Nos permite hacer afirmaciones sobre los valores, ya sea por su tipo, o si una matriz tienen un elemento, etc 
  Para encontrar la libreria en google colocar
  mjackson expect es la version antigua
  facebook jest es la version nueva

  Una vez modificado el archivo ./utils/utils.test.js se debe modificar el script de test del archivo package.json 
  Vamos a llamar a todos los archivos de test solo agregando jest
  Jest va a permitir ejecutar los test que son invocados con it de mocha y test de jest

  "scripts": {
    "test": "jest"
  },

  Si deseamos usarlo con nodemon

  "scripts": {
    "test": "jest,
    "test-watch": "nodemon --exec \"npm test\""
  },   
  
*/

/*  ---- Supertest Library ----  */
/* 
  Nos va a ayudar a realizar pruebas de nuestras aplicaciones express

*/

/*  ---- Describe Library ----  */
/* 
  Nos va a ayudar a agrupar tareas lo que hace que sea mucho mas facil para escanear la salida de la prueba
  Describe nos va a permitir hacer grupos de tareas a la cual le podemos dar un nombre y haciendola mas legible

  Describe toma dos parametros:
  1er argumento: String que describe el gurpo de pruebas
  2do argumento:  Una funcion que agrupa la definicion de las pruebas en si
*/

/* Spy */
/* 
  Spy nos va a permitir validar si una funciom a sido llamada de la forma correcta y 
  Para hacerse pasar por una funcion que se ejecuta dentro de otra funcion utilizaremos la libreria Rewire
*/

/* Rewire Library */
/* 
  Nos permite intercambiar una funcion por un spy
  Podemos probar las funciones que llaman a otras funciones y verificar que la comunicacion ocurre como lo esperdo

  Podemos probar si una funcion que es llamada dentro de otra funcion fue llamada, o si fue llamada correctamente con los argumentos correctos
*/