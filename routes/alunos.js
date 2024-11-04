const express = require("express");
const router = express.Router();

// Listar categorias
router.get("/", async (req, res) => {
  res.render("base", {
    title: "Aluno",
    view: "alunos/show",
  });
});

// Formulário para adicionar categoria
router.get("/add", (req, res) => {
  res.render("base", {
    title: "Add aluno",
    view: "alunos/add",
  });
});

// Rota para receber os dados do formulário e adicionar o aluno
router.post("/", async (req, res) => {
  const { nome } = req.body;
  console.log(`Aluno ${nome} adicionado com sucesso!`);
  res.redirect("/alunos"); // Redireciona para a listagem de alunos após adicionar
});

// Formulário para editar categoria
router.get("/edit", async (req, res) => {
  res.render("base", {
    title: "Editar aluno",
    view: "alunos/edit",
  });
});

module.exports = router;
