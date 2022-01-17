import { generateId } from '../../client/app/Utils/generateId'
import { BurgerSChema } from "../models/Burger"


export const FakeDb = {
  values: ['value 1', 'value 2'],
  burgers:  [{id: generateId(), name: 'Cheeseburger', price: 2.00}, {id: generateId(), name: BurgerSChema, price : 1.50}]
}