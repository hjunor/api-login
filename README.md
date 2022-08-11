# API LOGIN

Este projeto é apenas uma api que tem como proposito estudos primários em desenvolvimentos front-end para todo ela entrega dois end-points um de sign-in e sign-up.

## Documentação da API

<a href="https://apilogin.vercel.app/"> https://apilogin.vercel.app/ </a>

#### Faz login na aplicação

```bash
  GET /api/login
```

Content-Type: application/json

| Parâmetro | Tipo     | Descrição       |
| :-------- | :------- | :-------------- |
| `email`   | `string` | **Obrigatório** |

| Parâmetro  | Tipo     | Descrição       |
| :--------- | :------- | :-------------- |
| `password` | `string` | **Obrigatório** |

Resposta `200`

```json
{
  "user": {
    "name": "exemple",
    "email": "exemple@mail.com",
    "phone": "+5599999999999"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjEyMDJlMTYxZThkMjExNGU3N2MzMyIsImlhdCI6MTY2MDIxNTY4MiwiZXhwIjoxNjYwMjMwMDgyfQ.NRevoNG_nlGjMbsW85KxlRpzpp_uX-qeOE9vvfX7E04"
}
```

#### Cria usuário na aplicação

```bash
  GET /api/create
```

Content-Type: application/json

| Parâmetro | Tipo     | Descrição       |
| :-------- | :------- | :-------------- |
| `email`   | `string` | **Obrigatório** |

| Parâmetro  | Tipo     | Descrição       |
| :--------- | :------- | :-------------- |
| `password` | `string` | **Obrigatório** |

| Parâmetro         | Tipo     | Descrição       |
| :---------------- | :------- | :-------------- |
| `passwordConfirm` | `string` | **Obrigatório** |

| Parâmetro | Tipo     | Descrição       |
| :-------- | :------- | :-------------- |
| `phone`   | `string` | **Obrigatório** |

Resposta `201`

```json
{
  "message": "criado com Sucesso"
}
```

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DB` **urlMongoDBClient**

`SECRET` **hash**
