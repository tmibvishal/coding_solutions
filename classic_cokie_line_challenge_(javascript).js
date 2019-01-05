console.log("hello");

let arr = [[1,0,0,1,0],
[1,0,1,0,0],
[0,0,1,0,1],
[1,0,1,0,1],
[1,0,1,1,0]];


function findCokieLines(arr, row, column){
    let count = 0;
    function recursion(i,j){
        if(arr[i][j] == 0) return;
        arr[i][j] = 0;
        count++;
        if((i+1) != row) recursion(i+1, j);
        if((j+1) != column) recursion(i, j+1);
    }

    let list = [];
    for (let i = 0; i < row; ++i) {
        for (let j = 0; j < column; ++j) {
            if(arr[i][j] == 1){
                recursion(i,j);
                list.push(count);
                count = 0;
            }
        }
    }
    return list;
}

console.log(findCokieLines(arr, 5,5));