import global from 'global';
import {GRID, NUMBERS} from 'typings';
import {checkGrid, identifySquare, isInCol,isToRow} from './../check-grid/index';

const numbers: NUMBER[] =[1,2,3,4,5,6,7,8,9]


function solveGrid(grid: GRID){
    let row =0; 
    let col = 0;

    for(let i=0; i<R1; i++){
      row = Math.floor(i/9)
      col = i%9;

      if(grid[row][col]===0){
       for(let value of numbers)
      }
    }
    grid[row][col]=0
}

export default solveGrid;