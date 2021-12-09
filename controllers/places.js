const router = require('express').Router()
const places = require('../models/places')
const bodyParser = require('body-parser')
const { json } = require('body-parser')

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({extended: false})

router.get('/', (req, res) => {
    res.render('places/index', {places})
})

router.get('/new', (req, res)=>{
  res.render('places/new')
})

router.post('/', urlencodedParser, (req, res)=>{
  // const obj = JSON.parse(JSON.stringify(req.body))
  // console.log(obj)
  if (!req.body.pic){
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city){
    req.body.city = 'Anytown'
  }
  if (!req.body.state){
    req.body.state = 'USA'
  }
  places.push(req.body)
  console.log(req.body)
  res.redirect('/places')
})

router.get('/:id', (req, res)=>{
  let id = Number(req.params.id)
  if (isNaN(id)){
    res.render('error404')
  }else if(!places[id]){
    res.render('error404')
  }else{
    res.render('places/show', {place: places[id], id})
  }
})

router.get('/:id/edit', (req, res)=>{
  res.send('Edit form for a place')
})

router.put('/:id', (req, res)=>{
  res.send('Make changes to existing place')
})

router.delete('/:id', (req, res)=>{
  res.send('Delete a place')
})

router.post('/:id/rant', (req, res)=>{
  res.send('Add rant to a place')
})

router.delete('/:id/rant/:rantId', (req, res)=>{
  res.send('Delete a rant')
})

module.exports = router