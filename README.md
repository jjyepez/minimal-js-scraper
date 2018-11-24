# minimal-js-scraper
Minimal Web Scraper class in vanilla JavaScript.

## Description
Minimalist implementation of web scraping with vanilla javascript an RegExp.

## Implementation demo
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

## License
MIT

### Created by
@jjyepez
