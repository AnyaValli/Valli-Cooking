class navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
    
    /*topnav*/
    
    /* topnav container */
    .topnav {
    overflow: hidden;
    background-color: #f5c1ea;
    border: #69154a;
    border-style: solid;
    border-width: 5px;
    border-top-width: 5px;
    border-left-width: 5px;
    border-right-width: 5px;
    display: block;
    
    }
    
    /* Links inside the topnav */
    .topnav a {
    float: left;
    font-size: 16px;
    color:#69154a;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    }
    
    /* The dropdown container */
    .dropdown {
    float: left;
    overflow: hidden;
    }
    
    /* Dropdown button */
    .dropdown .dropbtn {
    font-size: 16px;
    border: none;
    outline: none;
    color:#69154a;
    font-weight: 500;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit; /* Important for vertical align on mobile phones */
    margin: 0; /* Important for vertical align on mobile phones */
    }
    
    /* Navigation bar behaviour on hover*/
    .topnav a:hover, .dropdown:hover .dropbtn {
    background-color:#faf9bf;
    }
    
    /* Dropdown box background */
    .dropdown-content {
    display: none;
    position: absolute;
    background-color: #faf9bf;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px #69154a (0,0,0,0.5);
    z-index: 1;
    }
    
    /* Text in the dropdown */
    .dropdown-content a {
    float: none;
    color: #69154a;
    text-decoration: none;
    display: block;
    text-align: center;
    
    }
    
    /* Hover behaviour of links in dropdown */
    .dropdown-content a:hover {
    background-color: #f5c1ea;
    border-width: 1px;
    border-color: #69154a;
    border-style: solid;
    
    }
    
    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-content {
    display: block;
    }
    
    </style>
    <div class="topnav">
    <a href="../index.html">Home</a>
    <a href="../AllRecipes.html">All Recipes</a>
    <a href="../ElliotsRecipes.html">Elliot's Recipes</a>
    <a href="../AnyasRecipes.html">Anya's Recipes</a>
    <div class="dropdown">
      <button class="dropbtn">Cuisine </button>
      <div class="dropdown-content">
        <a href="../Cuisine/Asian.html">Asian</a>
        <a href="../Cuisine/Baking.html">Baking</a>
        <a href="../Cuisine/Indian.html">Indian</a>
        <a href="../Cuisine/Italian.html">Italian</a>
        <a href="../Cuisine/Jamaican.html">Jamaican</a>
        <a href="../Cuisine/Jamaican.html">Mediterranian</a>
      </div>
    </div>
  </div>
    </div>
    </div>
    </div>
    `;
  }
}

customElements.define('navbar-component', navbar);
