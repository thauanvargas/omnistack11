const cors = require("cors");
const express = require("express");
const routes = require("./routes");

const app = express();

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 *
 * GET: Busca ou lista uma nova informações do backend
 * POST: Cria informações no backend
 * PUT: Altera uma informação no backend
 * DELETE: Deleta informações no backend
 */

/**
 * Tipos de Parâmetros:
 *
 * Query: Parâmetros nomeados, enviados na rota após o simbolo "?", geralmente servem para filtros/paginação (Acessivel atraves do req.query)
 * Route Params: Parâmetros utilizados para identificar recursos (Acessivel atraves do req.params)
 * Request body: Corpo da Requisição, utilizado para criar ou alterar recursos (JSON) (Acessivel atraves de req.body)
 * Headers: "Cabeçalho", guarda informações do contexto da requisição, dados como autenticação, localização, idioma...
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users;
 * Query Builder: table('users').select('*').where();
 */

/** #Entidades
 *  - ONG
 *  - incident
 *
 */

/**
 *  #Functionalities
 *  - Login de ONG
 *  - Logout
 *  - List self Ong Incidents
 *  - Create Incidents
 *  - Delete Incidents
 *  - List all Incidents (Mobile)
 *  - Contact Ong
 */

// Em produção, trocamos a origin para só deixar os scripts serem acessados via o domínio origin
// app.use(
//   cors({
//     origin: "https://bemyhero.com"
//   })
// );
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
