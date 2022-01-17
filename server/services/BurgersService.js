import { FakeDb } from '../db/FakeDB'
import { BadRequest } from '../utils/Errors'
import { generateId } from '../../client/app/Utils/generateId'

class BurgersService {
  async getAll() {
    return FakeDb.burgers
  }

  async getById(id) {
    const burger = await FakeDb.burgers.find(burger => burger.id === id)
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
}