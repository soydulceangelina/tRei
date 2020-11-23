[Proyecto desplegado](https://trei-bogota.surge.sh)

# Tecnologias usadas

<div style="display:flex;align-items:center;width:100%;justify-content:space-between;">
    <figure>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/100px-React.svg.png"
            width="100px"
        />
    </figure>
    <figure>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/245px-Sass_Logo_Color.svg.png"
            width="100px"
        />
    </figure>
    <figure>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/245px-Firebase_Logo.svg.png"
            width="150px"
        />
    </figure>
    <figure>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Google_Maps_Logo.svg/245px-Google_Maps_Logo.svg.png"
            width="150px"
        >
    </figure>
</div>

# Proceso de diseño.

<figure>
    <img src="./src/assets/ui.jpg" style="width:500px">
</figure>

# Pasos para correr el repositorio en local

Paso 1: 
```sh
$ git clone git@github.com:soydulceangelina/tRei.git
```

Paso 2:
```sh
$ npm install
```

Paso 3: <br/><br/>
Crea un archivo .env en la raiz del proyecto, allí crea dos variables de entorno:
- REACT_APP_GOOGLE_MAPS_KEY, con tu Google Maps API Key
- REACT_APP_FIRE_KEY, con tu Firebase Key

Paso 4:
```sh
$ npm start
```

# Como subir el proyecto a produccion

```sh
npm run deploy:nodomain
```
