const express = require('express');
const router = express.Router();
const Slider = require('../../models/Slider/Slider');
const {multiImageUplaod, uploadDir } = require('../../helpers/upload-helper');
const fs = require('fs');

const { verifyToken } = require('../../helpers/authentication');


router.get('/',(req, res) => {
  
        Slider.find({})
        .then( slider => res.status(200).json(slider))
        .catch(err=>{res.status(400).send("Slider could not be found")})
});


// creation of a new slider
router.post('/', verifyToken, (req, res) => {

    if(req.isAdmin)
    {
    const newSlider = new Slider({  title: req.body.title,subtitle: req.body.subtitle, image:multiImageUplaod(req.files.image, 'Ecommerce/Slider')});

    newSlider.save()
        .then(savedPost => {res.status(200).json(savedPost);})
        .catch(err=>{res.status(401).send(err)});
    }
    else
    {
        res.status(403).send('You are not authorized to acess this resource')
    }
});

// updating slider content
router.put('/edit/:id',verifyToken, (req, res) => {
    if(req.isAdmin) 
    {
        let oldAttachedImage;
        Slider.findOne({ _id: req.params.id })
        .then(post => {
            oldAttachedImage = post.image;
            post.title = req.body.title,
            post.subtitle= req.body.subtitle,
            req.files.image ? post.image= multiImageUplaod(req.files.image, 'Ecommerce/Slider') :'',
            post.save()
                .then(savedPost => {
                    req.files.image ? fs.unlink(uploadDir + oldAttachedImage, err => { }):'';
                    res.status(200).json(savedPost);})
                .catch(err=>res.status(401).json(err.toString()));
        });
    }
    else
    {
        res.status(403).send('You are not authorized to acess this resource')
    }

});


router.delete('/:id',verifyToken, (req, res) => {
    if(req.isAdmin)
        {
        Slider.findOne({ _id: req.params.id })
            .then(post => {
                try
                {
                    post.remove();
                    fs.unlink(uploadDir + post.image, err => {});
                    res.status(200).send(true);
                }
                catch(err) { throw err }
                });
        }
    else
        {
            res.status(403).send('You are not authorized to acess this resource')
        }
});


module.exports = router;