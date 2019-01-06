import java.util.*;
import java.lang.*;
import java.io.*;

class classic_cookie_line_challenge_java
{
    static int Count = 0;
    static int maxRow = 0;
    static int maxColumn = 0;
    static int[][] matrix;

    static void recursion(int i, int j) {
        if (matrix[i][j] == 0) return;
        matrix[i][j] = 0;
        Count++;
        if ((i + 1) != maxRow) recursion(i + 1, j);
        if ((j + 1) != maxColumn) recursion(i, j + 1);
        if (j>0) recursion(i, j - 1);
    }

    static List<Integer> findCookieLines(int[][] arr, int maxRow, int maxColumn) {
        matrix = arr;
        classic_cookie_line_challenge_java.maxRow = maxRow;
        classic_cookie_line_challenge_java.maxColumn = maxColumn;
        // list is the vector that will contain the length of different lines of chips on cookie
        List<Integer> list = new ArrayList<Integer>();
        for (int i = 0; i < maxRow; ++i) {
            for (int j = 0; j < maxColumn; ++j) {
                if (matrix[i][j] == 1) {
                    recursion(i, j);
                    list.add(Count);
                    // Resetting the Count to 0 after Counting the length of line
                    // and adding that length to the list
                    Count = 0;
                }
            }
        }
        return list;
    }

	public static void main (String[] args) throws java.lang.Exception
	{
        int[][] arr = {{1, 0, 0, 1, 0},
                        {1, 0, 1, 0, 0},
                        {0, 0, 1, 0, 1},
                        {1, 0, 1, 0, 1},
                        {1, 0, 1, 1, 0}};
        List<Integer> list = findCookieLines(arr, 5 ,5 );
        System.out.println(list);
        // Output is [2, 1, 5, 2, 2] as expected
        int[][] arr2 = {{1, 0, 1, 0, 1},
                        {1, 1, 0, 1, 1},
                        {1, 0, 1, 0, 0},
                        {1, 0, 1, 1, 1},
                        {1, 0, 1, 0, 0},
                        {1, 1, 0, 0, 0}};
        list = findCookieLines(arr2, 6 ,5 );
        System.out.println(list);
        // Output is [8, 1, 3, 5] as expected
	}
}
