# nodemailer-exemple

Is a simple nodemailer usage exemple

## 1 - Create a repositorie and clone

## 2 - Start with NPM 
`NPM INIT`

## 3 - Install 'nodemailer', 'nodemon' and 'dotenv'
`NPM I --SAVE-DEV NODEMAILER`
`NPM I --SAVE-DEV NODEMON`
`NPM I --SAVE-DEV DOTENV`

## 4 - Add start script to packge.json
`"start": "nodemon src/index.js"`

## 5 - On Index.js, import nodemailer and dotenv
## 6 - Create 'nodemailer.createTransport',  'mailOptions' and call 'transporter.sendMail'