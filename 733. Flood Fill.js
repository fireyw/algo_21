/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var param = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];

const floodFill = (image, sr, sc, newColor, oldColor = image[sr][sc]) => {
    if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[sr].length || image[sr][sc] == newColor || image[sr][sc] != oldColor) {
        return image;
    }
    image[sr][sc] = newColor;
    floodFill(image, sr + 1, sc, newColor, oldColor);
    floodFill(image, sr - 1, sc, newColor, oldColor);
    floodFill(image, sr, sc - 1, newColor, oldColor);
    floodFill(image, sr, sc + 1, newColor, oldColor);

    return image;
};

console.log(floodFill(param, 1, 1, 2));

// Input:
//     [[1,1,1],[1,1,0],[1,0,1]]
// 1
// 1
// 2
// Output:
//     [[2,2,2],[2,2,2],[2,2,2]]
// Expected:
//     [[2,2,2],[2,2,0],[2,0,1]]
