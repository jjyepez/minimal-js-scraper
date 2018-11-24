class Scraper {
  constructor ( src = null ) {
    this.BASE_CORS = "https://cors-escape.herokuapp.com/"
    this.urlSrc = null
    if ( src ) this.setSrc( src )
  }
  setSrc( src ){
    this.urlSrc = `${this.BASE_CORS}${src}`
  }
  async getHTML(){
    const src = this.urlSrc
    const rsp  = await fetch( src )
    const rslt = await rsp.text()
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
