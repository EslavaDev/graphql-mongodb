# Instalacion

## MongoDB
```
se debe lanzar el comando:

si estas en ios

brew install mongodb

mkdir -p /data/db

y en una consola lanzar el script:
mongod
```
## Dependencias

```
se debe ejecutar el comando:
    npm install

luego se debe lanzar el comando:

    npm run dev


para que esto funcione se debe haber puesto a correr primero mongodb
```


# Query and Mutation Example

```
mutation savecar{
  createCar(name: "tesla", model:"EX"){
    _id
		color
  }
}

query carros{
  allCars{
    _id
    name
    model
  }
}
```