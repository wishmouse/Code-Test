var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
var request = require('superagent')
var mongodb = require('mongodb')
var cons = require('consolidate')
var swig = require('swig')

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', function(req, res){
  res.render("index")
})


app.post('/details', function(req, res){
  inputDatashifts =  req.body
  var MongoClient = mongodb.MongoClient
  var url = "mongodb://localhost:27017/details"
  MongoClient.connect(url, function(err, db){
    if (err){
      console.log("ooops there's an error: ", err)
    } else {
      var collection = db.collection("details")
      var newData = inputDatashifts
        collection.insert([newData], function(err, result){
        if (err){
          console.log("there is an error: ", err)
        } else {
          res.redirect('/')
        }
        db.close()
      })
    }
  })
})

app.listen(3000, function(){
  console.log("Rocking it out on 3000")
})

module.exports = app
