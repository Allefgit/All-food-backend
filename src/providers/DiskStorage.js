const fs = require("fs") // é do próprio node e é usado para lidar com manipulação de arquivos
const path = require("path")
const uploadConfig = require("../configs/upload")

//armazenamento local
class DiskStorage{
    //salvar os arquivos
    async saveFile(file){

        //isso irá mudar o arquivo de lugar, passando da pasta temporária para a pasta de uploads
        await fs.promises.rename(
            path.resolve(uploadConfig.TMP_FOLDER, file), //pasta antiga
            path.resolve(uploadConfig.UPLOADS_FOLDER, file) //nova pasta
        )

        //retorna as informações do arquivo
        return file;
    }

    //deletar os arquivos
    async deleteFile(file){
        //encontra o arquivo a ser excluído
        const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file)
        try{
            //stat retorna o status
            await fs.promises.stat(filePath)
        } catch{
            return
        }

        //unlink deleta o arquivo
        await fs.promises.unlink(filePath)
    }
}

module.exports = DiskStorage