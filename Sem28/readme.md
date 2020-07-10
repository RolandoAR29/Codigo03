REACT
- Librería
- Declarativa
- Eficiencia
- Componentes
- Desarrollo de aplicaciones móviles con React Native
- Desarrollo de aplicaciones de escritorio con React Native

JSX = JS + XML
 
JS
document.getElementById('id');

JQUERY
$('#id');

-----------------------------------------------

HTML
<body>
    <div id="root"></div>

REACT

const div = document.querySelector('#root');

conts h1 =  <h1>Hello World</h1>

ReactDOM.render( h1, div );

JS
div.innerHTML(<h1>Hello World</h1>);
cons h1 = document.createElement('h1', null, 'Hola Mundo');

JQUERY
$('#div').append(<h1>Hello World</h1>);

--------------------------------------------------

// Ejemplo de "variable opcional" en javascript (últimas versiones)

const res = {
  // personas: ['Juan', 'Pepe']
};

console.log(res.personas?.length);

--------------------------------------------------

PLUGGINS
ES7 React/Redux/GraphQL/React-Native snippets
Simple React Snippets
Auto Close Tag

EXTENSIONES
React Developer Tools
Redux DevTools
Awesome JSON Viewer

--------------------------------------------------

Instalación de proyecto con REACT.JS
npx create-react-app nombreDeLaAplicacion

Ejecutar proyecto
npm start