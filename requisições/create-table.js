import { sql } from "./dbsql.js";
sql`DROP TABLE IF EXISTS videos;`.then(() => {
    console.log("tabela apagada")
})