/*
  Name   : minimal-js-scraper
  version: v0.1b
  author : @jjyepez
  date   : nov-24-2018
  license: MIT
*/
class Scraper {
  constructor ( src = null, removeCRLF = false ) {
    this.BASE_CORS = "https://cors-escape.herokuapp.com/"
    this.urlSrc = null
    this.removeCRLF = removeCRLF
    if ( src ) this.setSrc( src )
  }
  setSrc( src ){
    this.urlSrc = `${this.BASE_CORS}${src}`
  }
  async getHTML(){
    const src = this.urlSrc
    const rsp  = await fetch( src )
    const rslt = await rsp.text()
    //if( this.removeCRLF ) rslt = rslt.replace(/\n/g,'').replace(/\r/g,'')
    this.scrapedHTML = await rslt
    return await rslt
  }
  async extraerSegunRegEx( objRegex ){
    const html  = await this.getHTML()
    let matches = []
    let rslt    = []
    while(( matches = objRegex.exec( html )) != null ){
      matches.shift()
      rslt.push( matches.filter( (el,i) => !isNaN(i) ? el : null) )
    }
    return rslt
  }
}
