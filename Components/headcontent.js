class headContent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <link rel="preconnect" href="https://fonts.googleapis.com">

    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Inspiration&display=swap" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500" rel="stylesheet">

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
    
    `;
    }
  }
  
  customElements.define('headcontent-component', headContent);
  




