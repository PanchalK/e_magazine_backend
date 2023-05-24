const router = require('express').Router();
const userController = require("../controller/user-controller");

router.post('/getadmin', userController.getAdmin);
router.post('/geteditor', userController.getEditor);
router.post('/addarticle', userController.addArticle);
router.post('/addadmin', userController.addAdmin);
router.post('/addeditor', userController.addEditor);
router.post('/getmessage', userController.getMessage);
router.get('/geteditors', userController.getEditors);
router.post('/addmagazine', userController.addMagazine);
router.get('/getmagazines', userController.getMagazines);
router.put('/updatemagazine/:id', userController.editMagazine);
router.delete('/deletemagazine/:id', userController.deleteMagazine);
router.delete('/deleteeditor/:id', userController.deleteEditor);
// router.post("/addCOofUsers",userController.addCOofUsers);
// router.get('/:id', userController.getUserById);

module.exports = router;