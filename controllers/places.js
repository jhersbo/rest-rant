const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/restaurant-1.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/restaurant-2.jpg'
      }]
    res.render('places/index', {places})
})

router.get('/new', (req, res)=>{
  res.render('places/new')
})

router.post('/', (req, res)=>{
  res.send('POST')
})

router.get('/:id', (req, res)=>{
  res.send('Place index #')
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