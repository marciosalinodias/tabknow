import database from "../../../../infra/database.js"

async function status(request, response) {
  const result = await database.query('SELECT 1+1 as show;');
  console.log(result.rows);
  response.status(200).json({chave:"String final são doidos é local"});
}

export default status;
