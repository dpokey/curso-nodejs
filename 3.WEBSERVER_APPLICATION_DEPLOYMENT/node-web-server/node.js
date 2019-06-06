/* 
Motor de plantillas
Va a permitir que los render html se muestren de manera dinamica
Donde va a poner insertar un nombre de usuario, una fecha actual
Tambien va a poder crear marcado rehutilizable como un encabezado o pie de pagina que va a ser el mismo para todas sus paginas

Vamos a utilizar un motor de vistas para express
handlebarjs.com

./views es el directorio predeterminado que express usa para sus plantillas

En el interior de un archivo .hbs se insertaran datos de forma dinamica

handlebarjs permite usar partial: es una pieza de codigo que se puede agregar a sus paginas html

Node Middleware
----------------------

Con middleware podemos extender las funcionabilidades de node
Middleware se ejecuta en el orden en que se coloca en el codigo

GIT
----------------------

git --version
para ver la version de git instalada

git init
para iniciar un repositorio de git. crea el directorio ocualto .git

git status
muestra informacion del estado del repositorio, de los archivos modificados y de los trakeados y no trakeados

git add <nombre_archivo_o_carpeta>
para trakear un directorio o archivo

git add . 
para trakear todos los archivos en la ubicacion actual

En el archivo .gitignore
Se definen los archivos que no se desean considerar

--------------------
Claves SSH
permiten identificar que soy yo quien realmente digo que soy para asi subir archivos 

ls -al ~/.ssh
1.-Para comprobar si en directorio con git ya se tienen unas claves ssh

ssh-keygen -t rsa -b 4296 -C 'email'
2.-Para generar las claves
1er argumento: 
2do argumento:
3er argumento:

eval "$(ssh-agent -s)"
3.-Vamos a poner en marcha el agente ssh y tambien va a imprimir el identificador de proceso

ssh-add ~/.ssh/id_rsa
4.-Para decirle al agente donde se encuentran las claves generadas, esto signidica que la maquina local ahora sabe de ese par de claves y que tratara de usarlas cuando se comunica con un servicio de terceros como github

En la web
5.-Agregar la clave publica en la cuenta de github 

ssh -T git@github.com
6.-validar si ya existe conexion segura con github
--------------

Para acuñar los cambios al origin master remoto
git push -u origin master

------------------
Heroku

heroku login
Para iniciar el proceso de login

heroku keys:add 
Vamos a agregar las llaves ssh locales creadas anteriormente 

heroku keys
Para ver todas las claves actualmente en nuestra ceunta heroku

heroku keys:remove <email>
Para remover una clave en particular

ssh -v git@heroku.com
Para probar la conexion. se espera como respuesta (Authentication succeeded(publickey))

Para que nuestra aplicacion funcione, se deben realir dos cambios importantes:
1.- Cambio del puerto de escucha estatico por uno dinamico otorgado por heroku en una variable de entorno
2.- Especificar un script en package.json. Este escript debe indicar exactamente como inicia nuestra aplicacion
"start": "node server.js"
Esto es para que heroku no sabe el nombre de nuestro archivo, pero ejecuta el script start del package.json
Despues de esta configuracion, puedo iniciar la aplicacion ejecutando

npm start

git add .
Subimos nuestros cambios con Stagin Area

git commit -m 'mensaje'
Confirmamos nuestros cambios en repositorio local

git push
Confirmamos nuestros cambios en repositorio github

heroku create 
El comando heroku create CLI crea una nueva aplicación vacía en Heroku, junto con un repositorio de Git vacío asociado. Si ejecuta este comando desde el directorio raíz de su aplicación, el repositorio de Heroku Git vacío se configurará automáticamente como un control remoto para su repositorio local.
Va a crear una nueva aplicacion atravez de la aplicacion web de heroku
Tambien va a añadir un nuevo mando a su repositorio git

Tenemos:
Un control remoto origen (Local) ---> que apunta a nuestro repositorio github (Remoto)
Vamos a tener un control remoto (Local heroku) ---> que apunta a nuestro repositorio github heroku (Remoto)

git push heroku
Confirmamos nuestros cambios en repositorio github heroku
Heroku nos mostrara unos log donde nos hara aber como nuestra aplicacion se esta desplegando
Al final nos muestra la URL de la aplicacion desplegada (la mpodemos abrir en el navegador)

herolu open
o podemos ejecutar open para que lo abra en el navegador por defecto

Ai tuvieramos un dominio comprado, tendriamos que redireccionar nuestros dns a esta url que nos da heroku

*/
