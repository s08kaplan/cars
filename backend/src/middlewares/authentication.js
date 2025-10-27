"use strict"

const jwt = require("../configs/requiredBasics").jwt

module.exports = async (req, res, next) => {
    const auth = req.headers?.authorization

    if(!auth) {
        res.status(401).send({
            error: true,
            message: "No token provided"
        })
    }
    const tokenKey = auth ? auth.split(" ") : null

    if(tokenKey){
        if(tokenKey[0] === "Bearer"){
            jwt.verify(tokenKey[1], process.env.ACCESS_KEY, (error, accessData)=> {
                req.user = accessData ? accessData : false
            })
            next()
        }
    }
    
}