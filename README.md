# ProyectoFinal-MobileApp-Coderhouse
Proyecto final del curso de Desarrollo de aplicaciones en Coderhouse. Hecho con React Native.

La aplicacion se llama Ekoloom.

Es una primera versión pequeña y simple de una red social donde podes compartir que canciones estas escuchando junto con la portada de la cancion y el autor con otras personas.

Contiene 4 sectores principales :

1) Home: Es donde se ven los "ekos" (publicaciones) de todas las personas que hayan publicado
2) Conectar: Esta sección no esta implementada, dado que la intención es profundizar la aplicación para un futuro. Pero consiste en poder buscar a algún usuario en particular
3) Ekear (Publicar): En esta sección hay una barra de busqueda de todas las canciones que estan en la base de datos para que filtren por la que estan escuchando y una vez que la seleccionan pulsan en el boton "ekear" y se publica el "eko" (posteo)
4) Mi perfil: Sector donde podemos ver el usuario, la foto de perfil y poder modificarla.

![image](https://github.com/katerinacejas/ProyectoFinal-MobileApp-Coderhouse/assets/142285332/042b0753-8f19-4575-94cc-3cce8b858eb9)

En la base de datos hay pre-establecidas las canciones que la aplicación reconoce para poder "ekear" luego.

Se guarda en RealtimeDatabase la informacion de cada usuario como su email, localId, nombre, timestamp del momento del registro y foto de perfil inicial. 

Al momento de registrarse se le asigna la foto de perfil por default de la aplicacion. Luego puede modificarla

Tambien se almacenan en Realtime Database cada eko (publicacion) que tiene anidada la informacion de la cancion seleccionada y el localId que la publicó, al igual que las imagenes de foto de perfil que actualicen posteriormente.

![image](https://github.com/katerinacejas/ProyectoFinal-MobileApp-Coderhouse/assets/142285332/02cb31c4-efb5-4689-a716-c730a5d1b333)

* Se utiliza Authentication de Firebase para el manejo de sesiones y SQLite para poder mantener la sesion iniciada aunque se cierre la aplicación. 
* Se utiliza "Storage" de Firebase para poder almacenar las fotos del logo de la aplicacion en las pantallas de inicio de sesion y registro, el logo de la aplicacion para el header, y las portadas de todas las canciones.

 ![image](https://github.com/katerinacejas/ProyectoFinal-MobileApp-Coderhouse/assets/142285332/bb118fad-66c4-47bf-b912-9248da48698b)


* Se utilizan listas optimizadas para poder mostrar las canciones y las publicaciones.
* Se utilizan componentes reutilizables como ser la barra de busqueda y el header.
* Hay 2 tipos de navegacion, la navegacion de la barra inferior "bottom tab navigator" para desplazarse entre las 4 secciones principales, y tambien hay navegacion entrre las pantallas de login y registro, ya que se puede ir de una a la otra en caso de ya tener una cuenta. Además, tambien hay navegacion entre las distintas secciones mediante el bottom back del header que te desplazan a la pantalla de Home.
* En la pantalla de Mi Perfil se encuentra el botón de cerrar sesion en la parte edl header a la derecha.
* La autenticacion es mediante email y contraseña. Se valida que la contraseña sea de minimamente 8 caracteres de los cuales al menos 1 debe ser un digito y una mayuscula. Se valida que la contraseña y el campo de confirmar contraseña coincidan. En caso de que alguna de las verificaciones no se cumpla, figura un aviso de advertencia al usuario.
* Se solicitan los permisos correspondientes para poder acceder a la camara del usuario y poder modificar la foto de perfil.

