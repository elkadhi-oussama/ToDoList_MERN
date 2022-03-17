// importation de route from express
const router = require("express").Router();
//importation de schema
const todo = require("../models/List");
// get all item
router.get("/", (req,res)=>{
    todo.find((err, result) => {
        err
          ? res.status(500).send({ err })
          : res.status(200).send(result);
      })
})
//  creation de route pour ajouter un item
router.post("/", (req, res) => {
  todo.create(req.body, (err, result) => {
    err
      ? res.status(500).send({ err })
      : res.status(200).send(result);
  });
});

// router for delete one item
router.delete("/:id", (req, res) => {
  todo.findOneAndRemove({ _id: req.params.id }, (err, result) => {
    err
      ? res.status(500).send({ err })
      : res.status(200).send(result);
  });
});
// update item
router.put("/:id", (req, res) => {
    todo.findOneAndUpdate({ _id: req.params.id }, req.body, {returnOriginal:false},(err, result) => {
      err
        ? res.status(500).send({ err })
        : res.status(200).send(result);
    });
  });

module.exports = router;
