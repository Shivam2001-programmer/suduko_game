import {GRID,SQUARE} from './typings'

interface IInput{
    grid:GRID;
    row:number
}

function identifyworkingSquare ([col, grid, row]: IInput){
const square = []

if(col < 3){
for(let x=3 ; x<6; x++)
square.push([grid[x][0],grid[x][1], grid[x][2]])
}

else if(col < 6){
    for(let x=3; x<6; x++)
    square.push([grid[x][4],grid[x][5], grid[x][6]])
} else{
    for(let x=3; x<6; x++)
    square.push([grid[x][6],grid[x][7], grid[x][8]])
}

return square as SQUARE

}