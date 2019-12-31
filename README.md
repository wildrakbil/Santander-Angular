
con un CMD ir a la ruta del proyecto y ejecutar
======= instalar librerias del proyecto se debe tener permisos de firewall para hacerlo
npm i @angular/cli
npm install
======= subir el servidor
ng serve
======= ir a la URL y comprobar que desplego bien las imagenes del proyecto no se muestran ya que estan configuradas para el .war
======= Crear el .war
ng build --base-href /GSHWeb/
carpeta dist/(nameProyect)/WEB-INF
	dist/(nameProyect)/WEB-INF/web.xm
		<web-app xmlns="http://java.sun.com/xml/ns/javaee"
		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		xsi:schemaLocation="http://java.sun.com/xml/ns/javaee	
		http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd" version="3.0">
		</web-app>
	dist/(nameProyect)/WEB-INF/glassfish-web.xml
		<!DOCTYPE glassfish-web-app PUBLIC
		"-//GlassFish.org//DTD GlassFish Application Server 3.1 Servlet 3.0//EN"
		"http://glassfish.org/dtds/glassfish-web-app_3_0-1.dtd">
		<glassfish-web-app>
			<context-root>/GSHWeb</context-root>
		</glassfish-web-app>
	
haga un archivo zip con el contenido de la carpeta (nameProyect) y cambie la extension .zip por .war
====== desplegar en glassfish y comprobar que las imagenes cargen corectamente
