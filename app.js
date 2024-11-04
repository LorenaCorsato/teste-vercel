const express = require("express");
const path = require("path");
const app = express();

// Configuração do EJS como view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rota principal
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// Rotas para alunos
const alunosRouter = require("./routes/alunos");
app.use("/alunos", alunosRouter);

app.listen(3000, () => {
    console.log("Servidor em execução na porta 3000");
});
