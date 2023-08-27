<p align="center">
  <a><img src="https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png/revision/latest/scale-to-width-down/767?cb=20140520015336" width="200" alt="Nest Logo" /></a>
</p>

## Instalaciones 

1. Tener Nest CLI instalado y Docker
```
npm i -g @nestjs/cli
```

2. Instalar dependencias
```
$ npm install
```

3. Levantar la base de datos
```
docker-compose up -d
```

4. Variables de entorno
```
 Duplica el archivo .env.template y renombralo a .env
```

## Correr la aplicacion

```
$ npm run start:dev
```

# Reconstruir la base de datos con la semilla
```
(get)
http://localhost:3000/api/v2/seed

```

# Consumo
```
obtener todos los pokemons: 
(get) 
http://localhost:3000/api/v2/pokemon
**limit=5
**ofset=3

Obtener pokemon por nombre, numero o id:
(get)
http://localhost:3000/api/v2/pokemon/<idpokemon>

Eliminar pokemon por id
(delete)
http://localhost:3000/api/v2/pokemon/<idpokemon>

Actualizar pokemon por nombre, numero o id:
(path)
http://localhost:3000/api/v2/pokemon/<idpokemon>
```

## Stack usado
* MongoDB
* Nest
* Docker

