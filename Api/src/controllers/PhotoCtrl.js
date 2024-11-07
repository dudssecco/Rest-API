import multer from 'multer';
import multerConfig from '../config/multer'

import Photo from '../models/Photo';

const upload = multer(multerConfig).single('file')

class PhotoCtrl {
  store(req, res){
    return upload(req, res, async (err) => {
        if(err){
          return res.status(400).json({
            errors: [err.code]
          })
        }

        try{
          const { originalname, filename } = req.file
        const { aluno_id } = req.body
        const newPhoto = await Photo.create({ originalname, filename, aluno_id })
        return res.json(newPhoto)
        }catch{
          return res.status(400).json({
            errors: ['Aluno inexistente']
          })
        }
    })
  }
}

export default new PhotoCtrl
