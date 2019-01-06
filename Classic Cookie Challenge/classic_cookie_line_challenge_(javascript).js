function findCookieLines(matrix, maxRow, maxColumn) {

    let Count = 0;

    function recursion(i, j) {
        if (matrix[i][j] === 0) return;
        matrix[i][j] = 0;
        Count++;
        if ((i + 1) != maxRow) recursion(i + 1, j); //go down
        if ((j + 1) != maxColumn) recursion(i, j + 1); //go right
        if (j > 0) recursion(i, j - 1); //go left
        if (i > 0) recursion(i-1, j); //go top
    }

    // list is the array that will contain the length of different lines of chips on cookie
    let list = [];
    for (let i = 0; i < maxRow; ++i) {
        for (let j = 0; j < maxColumn; ++j) {
            if (matrix[i][j] == 1) {
                recursion(i, j);
                list.push(Count);
                // Resetting the Count to 0 after Counting the length of line
                // and adding that length to the list
                Count = 0;
            }
        }
    }
    return list;
}

//----------------Sample Try----------------

let arr = [[1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]];
console.log(findCookieLines(arr, 5, 5));
// Output is [2, 1, 5, 2, 2] as expected
arr = [[1, 0, 1, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 0],
    [1, 1, 0, 0, 0]];
console.log(findCookieLines(arr, 6, 5));
// Output is [8, 1, 3, 5] as expected