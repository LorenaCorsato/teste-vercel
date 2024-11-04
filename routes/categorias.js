const express = require("express");
const router = express.Router();

// Listar categorias
router.get("/", async (req, res) => {
  res.render("base", {
    title: "Categorias",
    view: "categorias/show",
  });
});

// Formulário para adicionar categoria
router.get("/add",  (req, res) => {
  res.render("base", {
    title: "Add Categoria",
    view: "categorias/add",
  });
});

// Formulário para editar categoria
router.get("/edit", async (req, res) => {

  res.render("base", {
    title: "Editar Categoria",
    view: "categorias/edit",

  });
});

module.exports = router;
