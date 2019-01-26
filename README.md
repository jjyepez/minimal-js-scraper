# minimal-js-scraper
Minimal Web Scraper class in vanilla JavaScript.

## Description
Minimalist implementation of web scraping with vanilla javascript an RegExp.

## Implementation demo
HTML (in head)
```html
<script type="application/javascript" src="https://raw.githubusercontent.com/jjyepez/minimal-js-scraper/master/Scraper.js"></script>
````
JS
```js
async function init(){
  await extraerCategoriasML()
}
window.onload = () => init()

async function extraerCategoriasML(){
  const url = `https://www.mercadolibre.com.ve/tiendas-oficiales/categorias`
  
  const mlS = new Scraper( url )
  
  const patron = `<a href="(\/tiendas-oficiales\/categoria\/(.*))">([^<]*)<\/a>`
  const regex  = new RegExp(patron, 'img')
  
  const matches = await mlS.extraerSegunRegEx( regex )
  
  console.log( matches )
}
```
console output
```js
["/tiendas-oficiales/categoria/MLV1747", "MLV1747", "Accesorios para Veh&iacute;culos"]
["/tiendas-oficiales/categoria/MLV1384", "MLV1384", "Beb&eacute;s"]
["/tiendas-oficiales/categoria/MLV1039", "MLV1039", "C&aacute;maras y Accesorios"]
["/tiendas-oficiales/categoria/MLV1051", "MLV1051", "Celulares y Tel&eacute;fonos"]
["/tiendas-oficiales/categoria/MLV1798", "MLV1798", "Coleccionables y Hobbies"]
["/tiendas-oficiales/categoria/MLV1648", "MLV1648", "Computaci&oacute;n"]
["/tiendas-oficiales/categoria/MLV1144", "MLV1144", "Consolas y Videojuegos"]
["/tiendas-oficiales/categoria/MLV1276", "MLV1276", "Deportes y Fitness"]
["/tiendas-oficiales/categoria/MLV5726", "MLV5726", "Electrodom&eacute;sticos"]
["/tiendas-oficiales/categoria/MLV1000", "MLV1000", "Electr&oacute;nica,  Audio y Video"]
["/tiendas-oficiales/categoria/MLV1246", "MLV1246", "Est&eacute;tica y Belleza"]
["/tiendas-oficiales/categoria/MLV1574", "MLV1574", "Hogar y Muebles"]
["/tiendas-oficiales/categoria/MLV1499", "MLV1499", "Industrias"]
["/tiendas-oficiales/categoria/MLV1182", "MLV1182", "Instrumentos Musicales"]
["/tiendas-oficiales/categoria/MLV1132", "MLV1132", "Juegos y Juguetes"]
["/tiendas-oficiales/categoria/MLV3025", "MLV3025", "Libros, M&uacute;sica y Pel&iacute;culas"]
["/tiendas-oficiales/categoria/MLV1953", "MLV1953", "Otras Categor&iacute;as"]
["/tiendas-oficiales/categoria/MLV3937", "MLV3937", "Relojes, Joyas y Bisuter&iacute;a"]
["/tiendas-oficiales/categoria/MLV1430", "MLV1430", "Ropa, Zapatos y Accesorios"]
```
## License
![MIT](https://badgen.net/npm/license/lodash)

### Created by
@jjyepez
