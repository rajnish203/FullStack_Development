import {body, validationResult} from 'express-validator'
const validateRequest = async (req, res, next) => {



//Step 1: Setup rules for validation
const rules = [
body('name').notEmpty({min : 1}).withMessage('Name is required'),


// Whene the image link is provide

// body('imageUrl').notEmpty()
//         .withMessage('Image URL is required')
//         .isURL()
//         .withMessage('Please provide a valid URL for the image'),


//when imagefile is uploaded by local system 
body('imageUrl').custom((value, {req})=>{
     if(!req.file){
        throw new Error('Image is required')
     }

}),
body('price').isInt({min : 1}).withMessage('Price should be greater than 1')
]



//Step 2: Run the rules
await Promise.all(rules.map((rule) => rule.run(req)))
let validationErrors = validationResult(req)
console.log(validationErrors)



//Check if there was any validation error
if(!validationErrors.isEmpty()){
return res.render('new-product', { errorMessage: validationErrors.array()[0].msg})
}else{
next()
}
}
export default validateRequest