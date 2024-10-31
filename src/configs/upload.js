const path = require("path")
const multer = require("multer")
const crypto = require("crypto")

const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp")
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, "uploads")

//Auxilia na envio ao armazenamento local
const MULTER = {
    storage: multer.diskStorage({
        //Define o local de destino :
        destination: TMP_FOLDER, 
        //define o nome do arquivo:
        filename(req, file, callback){
            const fileHash = crypto.randomBytes(10).toString("hex");
            const fileName = `${fileHash}-${file.originalname}` 

            return callback(null, fileName)
        },
    }),
};

module.exports = {
    TMP_FOLDER,
    UPLOADS_FOLDER,
    MULTER
}