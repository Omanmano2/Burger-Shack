import { burgersService } from "../services/BurgersService"
import BaseController from '../utils/BaseController'
 export class BurgersController extends BaseController {
   constructor(){
     super('api/burgers')
     this.router
      .get('',this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit )
      .delete('/:id', this.remove )
   }
   async getById(req, res, next ) {
     try {
       const burger = await burgersService.getById(req.params.id)
       return res.send(burger)
     } catch (error) {
       next(error)
     }
   }

   async getAll(req, res, next) {
     try {
       const burger = await burgersService.getAll()
       return res.send(burger)
     } catch (error) {
       new(error)
     }
   }

  async create(res, req, next) {
    try {
      const burger = await burgersService.edit(req.body)
      return res.send(burger)
    } catch (error) {
      new(error)
    }
  }
  
  async edit (res, req, next) {
    try {
      req.body.id = req.params.id
      const burger = await burgersService.edit(req.body)
      return res.send(burger)
    } catch (error) {
      new(error)
    }
  }

  async remove (req, res, next) {
    try {
      await burgersService.remove(req.params.id)
      res.send({message: 'Deleted'})
    } catch (error) {
      new(error)
    }
  }
 }