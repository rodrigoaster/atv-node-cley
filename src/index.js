const express = require('express');
const pool = require("./config/database");

const app = express();

app.use(express.json());

app.get("/verificarBebidas", (req, res) => {
    pool.execute("select * from TB_BEBIDAS", (err, data) => {
        if(err) return res.send(err);

        res.send(data);
    })
})

app.post("/cadastrarBebidas", (req, res) => {
    pool.execute("insert into TB_BEBIDAS(NOME_BEBIDA, PRECO_BEBIDA, MARCA_BEBIDA, MODELO_BEBIDA) values(?, ?, ?, ?)", [req.body.NOME_BEBIDA, req.body.PRECO_BEBIDA, req.body.MARCA_BEBIDA,req.body.MODELO_BEBIDA ],
    (err, data) => {
        if(err) return res.send(err);

        return res.send('Bebida cadastrada!');
    })
})

app.update("alterarTabela"), () => {
    pool.execute("alter table railway")
}


app.listen(5791, () => {
    console.log("opa, cheguei vu")
})