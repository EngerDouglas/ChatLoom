var express = require('express');
var router = express.Router();
var app = express();
var mysql = require('mysql');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "",
  database: 'chatloom',
});

connection.connect();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/*
router.get('/login', function(req, res, next) {
  try {
    console.log('req.body', req.body)

    if(req.body.logusername && req.body.logpassword){

      const data = {
        username: req.body?.logusername,
        password: req.body?.logpassword
      }

      

    }
  
  } catch (e) {
    
  }
});
*/
router.post('/create', function(req, res, next){
  try{

    
    if(req.body.username && req.body.email && req.body.password){
      console.log('req.body', req.body)


      const data = {
        username: req.body?.username,
        email: req.body?.email,
        password: req.body?.password
      }
  
  
      connection.query(`INSERT INTO user (id , username, email, password) VALUES ('NULL','${data.username}', '${data.email}', '${data.password}')`, function(error, results, fields){
        if(error){
        throw error;
  
        
        console. log('The solution is: ', results[0])
        console. log('fields: ', fields)
        }
      });
      
      return res.json({
        'error': false,
        'message': 'El usuario ha sido creado correctamente'
      });

    }
   

  }catch(e){
    return res.status(500).json({
      'error': true,
      'message':e,
      
    });
  }
  
});

router.get('/list', function(req, res, next){
  /*
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  */
    //next();
  
    const users = {
      data_user_1: {
        name: 'Juan ',
        lastname: 'Perez',
      },
      data_user_2: {
        name: 'Junior',
        lastname: 'Acosta',
      },
    }
  
    return res.json(users);
});

module.exports = router;
