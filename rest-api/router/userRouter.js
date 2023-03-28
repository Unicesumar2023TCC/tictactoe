const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const Users = require('../model/usersModel');
const Response = require('../model/responseModel');

//get all users
router.get("/", function(req, resp, next) {
    Users.getUsers(function(error, returns){
        let response = new Response (); //error class
        if(error){
            response.error = true;
            response.msg = 'Error';
            console.log("error: ", error)
        }else{
            response.data = returns;
        }
        resp.json(response);
    });
});
//get one user
router.get("/:id?", function(req, resp){
    Users.getOneUser(req.params.id, function(error, returns){
        let response = new Response(); //error class
        if(error){
            response.error = true;
            response.msg = 'Error';
            console.log("error: ", error)
        }else{
            response.data = returns;
        }
        resp.json(response);
    });
});
//add new user
router.post("/", upload.none(), function(req, resp, next){
    Users.insertUser(req.body, function(error, returns){
        let response = new Response(); //error class
        if(error){
            response.error = true;
            response.msg = 'Error';
            console.log("error: ", error)
        }else{
            if(returns.affectedRows > 0){
                response.msg = 'Cadastro Adicionado com sucesso';
            }else{
                response.error = true;
                response.msg = "Ocorreu um erro no cadastro";
                console.log("erro: ", error);
            }
            response.data = returns;
        }
        console.log('resp: ', response);
        resp.json(response);
    });
});
//edit user
router.put("/", upload.none(), function(req, resp, next){
    Users.editUser(req.body, function(error, returns){
        let response = new Response(); //error class
        if(error){
            response.error = true;
            response.msg = 'Error';
            console.log("error: ", error)
        }else{
            if(returns.affectedRows > 0){
                response.msg = 'Cadastro Alterado com sucesso';
            }else{
                response.error = true;
                response.msg = "Ocorreu um erro ao alterar cadastro";
                console.log("erro: ", error);
            }
            response.data = returns;
        }
        console.log('resp: ', response);
        resp.json(response);
    });
})
//delet user
router.delete("/:id?", function(req, resp, next){
    Users.deleteUser(req.params.id, function(error, returns){
        let response = new Response(); //error class
        if(error){
            response.error = true;
            response.msg = 'Error';
            console.log("error: ", error)
        }else{
            if(returns.affectedRows > 0){
                response.msg = 'Cadastro excluído com sucesso';
            }else{
                response.error = true;
                response.msg = "Ocorreu um erro ao excluir cadastro";
                console.log("erro: ", error);
            }
            response.data = returns;
        }
        console.log('resp: ', response);
        resp.json(response);
    });
});
module.exports = router;