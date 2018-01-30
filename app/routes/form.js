const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

/* GET home page. */
router.get('/', (req, res, next) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: false,
    user: 'alexei.accio@gmail.com',
    password: 'Zdth.4Accio'    
  })

  transporter.sendMail({
      from: 'alexei.accio@gmail.com',
      to: 'ciao@accio.pro',
      subject: 'Message from @foliobot page',
      text: 'I hope this message gets through!'
  })  
})


module.exports = router
