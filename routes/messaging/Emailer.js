const express = require('express');
const Email = require('../../models/message/Email');
const Users = require('../../models/Users/User');
const {sendEmail} = require('../../helpers/mail-sender')
const {verifyToken} = require('../../helpers/authentication')
const router = express.Router();

router.all('/*', verifyToken)

router.post('/send', async (req, res) => {
    let subject = req.body.subject;
    let body = req.body.body;
    let users = req.body.users;

    users.forEach(user => {
        sendEmail(subject, body, user);
    });
    let email = new Email({
        subject: subject,
        body: body,
        users,
        isNewsletter:!!req.body.isNewsletter
    })
    await email.save();
    res.json(email)
})

router.get('/', (req, res) => {
    let params={};
    if(req.query.isNewsletter){
        params.isNewsletter=true;
    }
    Email.find(params).then(mails => {
        res.json(mails);
    });
});


router.get('/:mail_id', async (req, res) => {
    try{
        let email = await Email.findById(req.params.mail_id);
        if (email) {
            res.status(200).json(email)
        } else {
            res.status(404).json({message: "Email not found"})
        }
    }catch (e) {
        res.status(404).json({message: "Email not found"})
    }
});


router.delete('/:mail_id', async (req, res) => {
    await Email.findOneAndDelete({_id: req.params.mail_id});
    res.json({status: "OK", message: "Deleted."})
});


router.post('/', (req, res) => {

    let subject = req.body.subject;
    let body = req.body.body;

    Users.find({}).then(async users => {
        await users.forEach(element => {
            sendEmail(subject, body, element.email);
        });
        Email({
            subject: subject,
            body: body
        }).save().then(sentMail => {
            res.json(sentMail)
        });
    }).catch(err => {
        res.status(400).json(err.toString())
    });
});

module.exports = router;
