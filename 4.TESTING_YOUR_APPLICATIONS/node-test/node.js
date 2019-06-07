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