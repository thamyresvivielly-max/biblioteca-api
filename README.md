# API de Biblioteca


## Integrante

* Thamyres Vivielly e Raianny

## Tecnologias utilizadas

* Node.js
* Express
* Sequelize
* SQLite

## Como instalar

No terminal, dentro da pasta do projeto:

```bash
npm install
```

## Como executar

```bash
npm start
```

A API será executada em:

```text
http://localhost:3000
```

## Entidades

### Autor

* id
* nome
* email
* nacionalidade

### Livro

* id
* titulo
* isbn
* ano
* disponivel
* autorId

### Categoria

* id
* nome
* descricao

## Relacionamentos

* Um autor pode possuir vários livros.
* Um livro pertence a um autor.
* Um livro pode possuir várias categorias.
* Uma categoria pode possuir vários livros.

## Rotas disponíveis

### Autores

| Método | Rota           | Descrição       |
| ------ | -------------- | --------------- |
| POST   | `/autores`     | Criar autor     |
| GET    | `/autores`     | Listar autores  |
| GET    | `/autores/:id` | Buscar autor    |
| PUT    | `/autores/:id` | Atualizar autor |
| DELETE | `/autores/:id` | Excluir autor   |

### Livros

| Método | Rota          | Descrição       |
| ------ | ------------- | --------------- |
| POST   | `/livros`     | Criar livro     |
| GET    | `/livros`     | Listar livros   |
| GET    | `/livros/:id` | Buscar livro    |
| PUT    | `/livros/:id` | Atualizar livro |
| DELETE | `/livros/:id` | Excluir livro   |

### Categorias

| Método | Rota              | Descrição           |
| ------ | ----------------- | ------------------- |
| POST   | `/categorias`     | Criar categoria     |
| GET    | `/categorias`     | Listar categorias   |
| GET    | `/categorias/:id` | Buscar categoria    |
| PUT    | `/categorias/:id` | Atualizar categoria |
| DELETE | `/categorias/:id` | Excluir categoria   |

### Associação de categoria

```text
POST /livros/:id/categorias
```

Exemplo de corpo:

```json
{
  "categoriaId": 1
}
```

## Filtros de livros

```text
GET /livros?titulo=dom
GET /livros?ano=1899
GET /livros?disponivel=true
```

Os filtros também podem ser combinados.

## Paginação

```text
GET /livros?page=1&limit=10
```

A resposta apresenta os dados e as informações de paginação.

## Banco de dados

O projeto utiliza SQLite por meio do Sequelize.

Banco:

```text
database/biblioteca.sqlite
```
