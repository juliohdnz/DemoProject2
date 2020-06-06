//inicializar Git en la terminal y crear un archivo de practica
// comando ls = desplega todo el contenido de la carpeta donde te encuentras
//localizarse en la carpeta de pracica

//creamos un nueva aplicacion
const name = 'Hector'
const last_name = "Hdez"
const age = 33
const name2= 'Julio'
const school = 'DevF'


//guardamos
// inicializar repositorio >> git master
//Aparecen letras a un lado del nombre del archivo y dice untracked 
//Cada que se haga algun cambio , Git detecta cambios en el directorio de trabajo
//Hay que reportar a git que cambios se han hecho
//Dos pasos 1) Agregar el archivo al staging area
    //2) Agregarlo al repo

//Checar el estatus del repositorio > git status
//Cuando lo muestra en rojo quiere decr que ningun archivo esta  agregado y que esta en untracked
//checar el status del user > git config user.name
//checar el status del mail > git config user.email
// git config --global user.name "Hector Hdez" >> Cambiar nombre
//git config --global user.email "juliohdnz@gmail.com" >> Cambiar mail

//Reportar un cambio dentro de main.js >> git add
//Para este caso > git add main.js >> se agrega el archivo a trackear
//Checar que el archivo fue agregado y esta siendo trackeado >> git status
//En la terminal muestra el archivo en verde, lo que quiere decir que fue agregado y empieza a ser trackeado

//git commit -m >> Crear la primera version o el numero de version del archivo editado

//Checamos el estatus con >> git status >> aparece que no hay nada para hacer commit, lo que la version del archivo ya se subio

//Si editamos el archivo, volver a picar >> git add
//y Colocarle las versiones >> git commit -m "agregue last name y age"
//agregue segundo nombre name2 y aparece una M >> modified
//por lo que hay que crear de nuevo add y commit

//ahora para agregar el archivo al repositorio nuevo creado en Github , se agrega el repositorio>> git remote add origin https://github.com/juliohdnz/DemoProject2.git
// y ahora lo subimos al repositorio >> git push -u origin master