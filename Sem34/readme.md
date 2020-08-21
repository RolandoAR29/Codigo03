# Redux

STORE
(Fuente única de la verdad)
Espacio donde está la información que los componentes consumirán o van a necesitar

## Instalación
- npm install react-redux

## Visualización de devTools
https://github.com/zalmoxisus/redux-devtools-extension

- Colocar dentro de archivo store.js, y se verá de esta manera:
export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


## Firebase
Dependencias de firebase para autenticación
- npm install firebase

## Redux Thunk
Para implementación de middleware
- npm install --save redux-thunk

## validator
Validación de formulario
- npm install validator

## Sweetalert2
Mensajes de alerta
- npm install sweetalert2