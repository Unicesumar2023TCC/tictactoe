const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const Users = require('../model/usersModel');
const Response = require('../model/responseModel');

//get all users
router.get("/", async function(req, resp, next) {
    data = await Users.getUsers();
    resp.json({
        data: data
    });
});
//get one user
router.get("/:id?", async function(req, resp){
    data = await Users.getOneUser(req.params.id);
    resp.json({
        data: data
    });
});
//add new user
router.post("/", upload.none(), async function(req, resp, next){
    data = await Users.insertUser(req.body);
    resp.json({
        data: data
    });
});
//edit user
router.put("/", upload.none(), async function(req, resp, next){
    data = await Users.editUser(req.body);
    resp.json({
        data: data
    });
})
//delet user
router.delete("/:id?", async function(req, resp, next){
    data = await Users.deleteUser(req.body);
    resp.json({
        data: data
    });
});
module.exports = router;