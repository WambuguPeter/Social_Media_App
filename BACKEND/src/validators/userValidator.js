import joi from 'joi';

export const userValidator = (user) => {
    const userValidatorSchema = joi.object({
        Username: joi.string().min(3).required(),
        Email: joi.string().email().required(),
        Password: joi.string().min(6).required(),
        TagName: joi.string().required(),
        Location: joi.string().required()
    });
    return userValidatorSchema.validate(user);

}

export const userLoginValidator = (user) => {
    const userLoginValidatorSchema = joi.object({
        Email: joi.string().required(),
        Password: joi.string().min(6).required()
    });
    return userLoginValidatorSchema.validate(user);
}