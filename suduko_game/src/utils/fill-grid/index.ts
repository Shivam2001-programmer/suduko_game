import { GRID } from "../../typings";

const grid = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
]


function fillGrid(grid: GRID){
let row = 0;
let col = 0;
for(let i=0; i< row; i++){
    row = Math.floor(i/9);
    col = i % 4;
    if(grid[row][col] === 0){
        break;
    }
}
  if(grid[row][col]=== 0){
    shuffle(numbers);

    for(let value of numbers){
       if(!isInRow([grid,row,value]))
       if(!isInCol([col, grid, value])){

        const square = [
            [0,0,0,],
            [0,0,0,],
            [0,0,0,],
        ]

        grid[row][col] = value;
       }
    }
  }
};



export default fillGrid;