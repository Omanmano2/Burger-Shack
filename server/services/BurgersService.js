import { FakeDb } from '../db/FakeDB'
import { BadRequest } from '../utils/Errors'
import { generateId } from '../../client/app/Utils/generateId'

class BurgersService {
  async getAll() {
    return FakeDb.burgers
  }

  async getById(id) {
    const burger = FakeDb.burgers.find(burger => burger.id === id)
    if (!burger) {
      throw new BadRequest('Invalid Id')
    }
    return burger
  }



  async create(burger) {
    burger.id = generateId()
    FakeDb.burgers.push(burger)
    return burger 
  }

  async edit(burger) {
    const original = await this.getById(burger.id)
    original.name = burger.name || original.name
    original.price = burger.price || original.price
    return original
  }
  
  async remove(id) {
    await this.getById(id)
    FakeDb.burgers = FakeDb.burgers.filter(b => b.id !== id)
  }
}