import Joi from '@hapi/joi'

export const DoctorSchema = Joi.object({
    name: Joi.string().min(2).pattern(/^[A-Z][a-z]+$/).required(),
    lastname: Joi.string().min(2).pattern(/^[A-Z][a-z]+$/).required(),
    sex: Joi.string().valid('Male','Female').required()
})