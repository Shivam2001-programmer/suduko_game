import { Action,AnyAction } from "redux";
import{BLOCK_CODERS} from 'typings'

export const createGrid =(): Action =>((type : types.CREATE_GRID))

export const select =(cords:BLOCK_CODERS):AnyAction =>({
    coords,
    type = types.SELECT_BLOCK
})
