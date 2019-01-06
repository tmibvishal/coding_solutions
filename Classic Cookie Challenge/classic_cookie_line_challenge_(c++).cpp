#include "iostream"
#include "vector"

using namespace std;
typedef vector<vector<int>> Matrix;

// You can also encapsulate all the related functions into a class
// but for simplicity, I have have avoided that here
int Count = 0;
int maxRow = 0;
int maxColumn = 0;
Matrix matrix;

void recursion(int i, int j) {
    if (matrix[i][j] == 0) return;
    matrix[i][j] = 0;
    Count++;
    if ((i + 1) != maxRow) recursion(i + 1, j);
    if ((j + 1) != maxColumn) recursion(i, j + 1);
}

vector<int> findCookieLines(Matrix &arr, int maxRow, int maxColumn) {
    matrix = arr;
    ::maxRow = maxRow;
    ::maxColumn = maxColumn;
    // list is the vector that will contain the length of different lines of chips on cookie
    vector<int> list;
    for (int i = 0; i < maxRow; ++i) {
        for (int j = 0; j < maxColumn; ++j) {
            if (matrix[i][j] == 1) {
                recursion(i, j);
                list.push_back(Count);
                // Resetting the Count to 0 after Counting the length of line
                // and adding that length to the list
                Count = 0;
            }
        }
    }
    return list;
}

//----------------Sample Try----------------
void printVector(vector<int> vec){
    int n = vec.size();
    for (int i = 0; i < n; ++i) {
        cout << vec[i] << " ";
    }
    cout << endl;
}
int main() {
    Matrix arr = {{1, 0, 0, 1, 0},
                  {1, 0, 1, 0, 0},
                  {0, 0, 1, 0, 1},
                  {1, 0, 1, 0, 1},
                  {1, 0, 1, 1, 0}};
    vector<int> list;

    list = findCookieLines(arr, 5, 5);
    printVector(list);
    //Output is 2 1 5 2 2 as expected
    arr =  {{1, 0, 1, 0, 1},
            {1, 1, 0, 1, 1},
            {1, 0, 1, 0, 0},
            {1, 0, 1, 1, 1},
            {1, 0, 1, 0, 0},
            {1, 1, 0, 0, 0}};
    list = findCookieLines(arr, 6, 5);
    printVector(list);
    //Output is 8 1 2 1 5  as expected
    return 0;
}