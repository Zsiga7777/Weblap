import express from 'express'
import * as wizardsControllers from '../controllers/WizardController.js'

const router = express.Router()

router.get('/wizards', wizardsControllers.getAllwizards)

router.get('/wizards/:id', wizardsControllers.getwizardById)

router.post('/wizards', wizardsControllers.createwizard)

router.put('/wizards/:id', wizardsControllers.updatewizard)

router.delete('/wizards/:id', wizardsControllers.deletewizard)

export default router