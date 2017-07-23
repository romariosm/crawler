# ¿QUÉ ES URU?

Es un Crawler sobre un aplicativo web que se encarga de recolectar información personal, contenido en general y enlaces web que se encuentran relacionados con una página de una persona de Wikipedia en idioma de español.
El aplicativo recibe una inicial (url semilla) de Wikipedia, la cual es procesada para extraer información y contenido de la página de dicha persona. Dentro de la información extraida, se encuentra información personal como: nombres, fecha de nacimiento, religión, residencia, ocupación, partido político, etc.
Uru también extrae todo el contenido de la página de Wikipedia que generalmente contiene información más detallada de la persona como su biografía, familia, logros alcanzados en su ocupación, obras, entre otros. Asimismo Uru obtiene las urls de personas e instituciones de Wikipedia relacionadas para que también sean procesadas de la misma forma en que fue procesada la url semilla. Toda la información extraida puede ser descargada en un archivo de formato JSON, asì como una porción de la información puede ser visualizada desde el aplicativo web.

# INSTALACIÓN
Tenga en cuenta los siguientes pasos para relizar la instalación del aplicativo.

## Inicio del servidor Socket.IO

Dirijase a la carpeta en la que clonó el proyecto, una vez ahí ingrese a la carpeta `Politicos/python_service`
```sh 
$ cd Politicos/python_service
```
Una vez en esta carpeta ingrese al entorno virtual
```sh 
$ source politicos-env/bin/activate
```
Ingrese a la carpeta en el que esta el documento ejecutable para iniciar el servicio.
```sh 
$ cd Scrapy
```
Se debe asegurar que se encuentran instaladas las librerias necesarias para la funcionalidad del aplicativo. Las cuales se nombaran a continuación:

- beautifulsoup4==4.5.3
- Flask==0.12
- Flask-SocketIO==2.8.5
- python-engineio==1.3.0
- python-socketio==1.7.2
- requests==2.13.0
- six==1.10.0

Para validar si alguna ya se encuentra instalada puede ejecutar el comando.
```sh 
$ pip freeze
```
Si alguna no se encuentra instalada puede instalarlas usando
```sh 
$ pip install librería
```
Finalmente inicie el servidor.
```sh 
$ python socket_python.py
```
## Inicio del servidor web

Dirijase a la carpeta raiz del proyecto clonado, una vez ahí ingrese al directorio en que se encuentra el archivo para inciar el servidor:
```sh 
$ cd Politicos/politico_node/
```
Iniciar el servidor:
```sh 
node server.js
```

