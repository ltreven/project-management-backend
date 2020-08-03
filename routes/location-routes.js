const express = require('express')
const router = express.Router()
const axios = require('axios')
const unidecode = require('unidecode')

router.get("/maps", (req, res, next) => {
  // recoger el body de la peticion (texto)
  // llamar API de Google Maps

  const direccion = unidecode(req.query.search)
  console.log(direccion)

  axios.get("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&fields=formatted_address,name,geometry,place_id&key=" + process.env.GOOGLE_API_KEY + "&input=" + direccion)
  .then(response => {
    res.json(response.data)
  })
})

module.exports = router
