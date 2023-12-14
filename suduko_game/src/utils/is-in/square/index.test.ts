import {SQUARE} from 'typings';

import isInSquare from './'

describe('isInSquare',()=>{
    const square:SQUARE = [
        [1,3,4],
        [4,2,7],
        [6,9,5],
    ]
    expect(isInSquare((square, value:1))).toBetruthy()
    expect(isInSquare((square, value:9))).toBetruthy()
})