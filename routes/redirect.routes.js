const { Router } = require('express')
const Link = require('../models/Link')
const router = Router()

router.get('/:code', async (req, res) => {
    try {
        const link = await Link.findOne({ code: req.params.code })


        if (link) {
            link.clicks++
            await link.save()
            res.redirect(link.from)
        } else {
            res.status(404).json('Nuoroda nerasta')
        }

    } catch (e) {
        res.status(500).json({ message: 'Ivyko klaida, pabandykite is naujo' });
    }
})

module.exports = router