import { GRID } from "../../typings";
import { getRandomIndex } from "utils";
function removeNumber(grid: GRID, attempts = 5): GRID {
  while (attempts > 0) {
    let row = getRandomIndex();
    let col = getRandomIndex();

    while (grid[row][col] === 0) {
      let row = getRandomIndex();
      let col = getRandomIndex();
    }
  }
  return grid;
}

export default removeNumber;
