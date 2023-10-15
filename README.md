# Cats Backend con NestJS

Este proyecto es simple backend CRUD para gatos, desarrollado con NestJS, TypeORM y MySQL. Además, se utiliza Docker para contenerizar la aplicación y Docker Compose para desplegar la aplicación junto con la base de datos.

## Requisitos
- Windows: WSL2
- Docker Engine (Incluido en Docker Desktop)
- Docker Compose
- Git

## Clonar el proyecto
```bash
$ git clone https://github.com/Dylan-Chambi/NestJS-Docker.git
```

## Entrar al directorio del proyecto
```bash
$ cd NestJS-Docker
```

## Levantar el proyecto
```bash
docker compose up
```
ó
```bash
docker compose up -d
```

## Acceder al backend mediante Swagger UI
```bash
http://localhost:9350/api
```

## Endpoints

### Agregar un gato

- Método: POST
- URL: http://localhost:9350/cat
- Body:
```json
{
  "name": "Kitty",
  "age": 4,
  "breed": "Persian"
}
```
- Respuesta de ejemplo:
```json
{
  "id": 1,
  "name": "Kitty",
  "age": 4,
  "breed": "Persian"
}
```

### Obtener todos los gatos

- Método: GET
- URL: http://localhost:9350/cat
- Respuesta de ejemplo:
```json
[
  {
    "id": 1,
    "name": "Kitty",
    "age": 4,
    "breed": "Persian"
  },
  {
    "id": 2,
    "name": "Floppa",
    "age": 5,
    "breed": "Caracal"
  }
]
```

### Obtener un gato por id

- Método: GET
- URL: http://localhost:9350/cat/1
- Respuesta de ejemplo:
```json
{
  "id": 1,
  "name": "Kitty",
  "age": 4,
  "breed": "Persian"
}
```

### Actualizar un gato por id

- Método: PATCH
- URL: http://localhost:9350/cat/1
- Body:
```json
{
  "name": "Kitty Purr",
  "age": 5,
  "breed": "Persian"
}
```
- Respuesta de ejemplo:
```json
{
  "id": 1,
  "name": "Kitty Purr",
  "age": 5,
  "breed": "Persian"
}
```

### Eliminar un gato por id

- Método: DELETE
- URL: http://localhost:9350/cat/1
- Respuesta de ejemplo:
```json
{
  "id": 1,
  "name": "Kitty",
  "age": 4,
  "breed": "Persian"
}
```

## Autor

- [Dylan Chambi](https://github.com/Dylan-Chambi)
