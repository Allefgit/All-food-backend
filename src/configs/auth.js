//exporta o JWT para usarmos nos tokens
module.exports ={
    jwt: {
        secret: process.env.AUTH_SECRET || "default",
        expiresIn: "1d"
    } 
}