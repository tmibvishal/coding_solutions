function findCokieLines(arr, row, column){

    let count = 0;
    function recursion(i,j){
        if(arr[i][j] == 0) return;
        arr[i][j] = 0;
        count++;
        if((i+1) != row) recursion(i+1, j);
        if((j+1) != column) recursion(i, j+1);
    }

    // list the array that will contain the length of different lines of chips on cookie
    let list = [];
    for (let i = 0; i < row; ++i) {
        for (let j = 0; j < column; ++j) {
            if(arr[i][j] == 1){
                recursion(i,j);
                list.push(count);
                // Resetting the count to 0 after counting the length of line
                // and adding that length to the list
                count = 0;
            }
        }
    }
    return list;
}

//Sample Try
let arr = [[1,0,0,1,0],
    [1,0,1,0,0],
    [0,0,1,0,1],
    [1,0,1,0,1],
    [1,0,1,1,0]];
console.log(findCokieLines(arr, 5,5));