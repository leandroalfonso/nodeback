const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
app.use(cors());
app.use(express.json());



app.post('/dados',(req,res)=>{
  const connection = mysql.createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_leandro_bd3',
    password: '4jvEN!EyQ3TJ3k&',
    database: 'freedb_leiloes'
  });

  connection.connect(() => {
    connection.query('INSERT INTO lailao (nome,descricao) VALUES (?,?)', [req.body.nome,req.body.descricao], (err,result) => {
      if (err) {
        console.error('Erro ao executar consulta:', err);
      }else{
        res.json(result);
        connection.end();
      }
    });
  });
}
    
);




app.get('/dados',(req,res)=>{
    const connection = mysql.createConnection({
      host: 'sql.freedb.tech',
    user: 'freedb_leandro_bd3',
    password: '4jvEN!EyQ3TJ3k&',
    database: 'freedb_leiloes'
      });
      
      connection.connect(() => {
        connection.query('SELECT * FROM lailao', (err,result) => {
          if (err) {
            console.error('Erro ao executar consulta:', err);
          }else{
            res.json(result);
            connection.end();
          }
        });
      });
});
app.listen(3001,()=>{
    console.log('servidor rodando na porta 3001');
})