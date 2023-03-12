
# CRUD example with node

Service to be  handle the client information

**Installation of dependencies:** 

```bash
npm install
```

**Database - Configure .env file to connect with database:**
```
PORT=8080
MONGODB_CNN=mongodb+srv://<user>:<password>@miclustercafe.m0xlh.mongodb.net/?retryWrites=true&w=majority
MONGODB_CNN_DOCKER='mongodb://localhost:27017/Clientes'
SECRETORPRIVATEKEY=Est0EsMyPubl1cKey23@66601992
```

**Database - Execute createDocumentsForRole.js to create documents for roles in database:**

```bash
node createDocumentsForRole.js
```

**Execute backend app:** 
```bash
npm start
```

```bash
nodemon app.js
```

## API Reference

#### Get: Get all users

```http
  GET {{url}}/api/usuarios?limite=19
```


#### Post: Create user

```http
  Post {{url}}/api/usuarios
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nombre`      | `string` | Name of the user |
| `correo`      | `string` | Mail of the user |
| `edad`      | `int` | Age of the user |
| `password`      | `string` | Password of the user |
| `rol`      | `rol` | Rol of the user: USER_ROLE or ADMIN_ROLE|



#### Post: Log in (only with ADMIN_ROLE)

```http
  Post {{url}}/api/auth/login
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `correo`      | `string` | Mail of the user |
| `password`      | `string` | Password of the user |


#### Put: Update user

```http
  Put {{url}}/api/usuarios/{MONGO_ID of user to update}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nombre`      | `string` | Name of the user |
| `correo`      | `string` | Mail of the user |
| `edad`      | `int` | Age of the user |
| `password`      | `string` | Password of the user |
| `rol`      | `rol` | Rol of the user: USER_ROLE or ADMIN_ROLE|

#### Delete: Delete an user (only with ADMIN_ROLE)

```http
  Delete {{url}}/api/usuarios/{MONGO_ID of user to delete}
```
| Header | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `x-token`      | `string` | Token generated when an admin log in. |