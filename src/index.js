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

app.get("/buscarbebida/:bebida", (req, res) => {
    const {bebida} = req.params
    pool.execute("SELECT * FROM TB_BEBIDAS WHERE NOME_BEBIDA = ?",
    [bebida],
    (err, data) => {
        if(err) return res.send(err);
        if(data.length == 0) return res.send({erro: "Bebida não encontrada!"})
        return res.send(data);
    })
})

app.get("/buscarbebida", (req, res) => {
    const {valorInical, valorMaximo} = req.query
    pool.execute("SELECT * FROM TB_BEBIDAS WHERE PRECO_BEBIDA >= ? AND PRECO_BEBIDA <= ?",
    [valorInical, valorMaximo],
    (err, data) => {
        if(err) return res.send(err);
        return res.send(data);
    })
})

app.post("/cadastrarBebidas", (req, res) => {
    const {NOME_BEBIDA, PRECO_BEBIDA, MARCA_BEBIDA, MODELO_BEBIDA} = req.body;
    pool.execute("insert into TB_BEBIDAS(NOME_BEBIDA, PRECO_BEBIDA, MARCA_BEBIDA, MODELO_BEBIDA) values(?, ?, ?, ?)", [ NOME_BEBIDA, PRECO_BEBIDA, MARCA_BEBIDA, MODELO_BEBIDA ],
    (err, data) => {
        if(err) return res.send(err);

        return res.send('Bebida cadastrada!');
    })
})




app.listen(5791, () => {
    console.log("opa, cheguei vu")
})