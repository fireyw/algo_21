# 재귀와 동적 프로그래밍(8장 192쪽)
### 설명할 예제 (미리 풀어보세요)
    - Dynamic
        - Easy: https://leetcode.com/problems/n-th-tribonacci-number/
        - Easy: https://leetcode.com/problems/flood-fill/
        - Easy: https://leetcode.com/problems/coin-change-2/

- 문제를 보고 재귀로 풀기 적당한 문구
  - n 번째 ... 를 계산하는 알고리즘 설계
  - 첫 n개를 나열하는 코드 작성
  - 모든 ...를 계산하는 메서드 구현
- 결국 방법은 많은 문제를 접할 수록 유리하다

### 상향식,햐양식 접근법
    - 상향식 접근법
        - 맨 아래에서 시작하여 가장 위 재귀까지 조사
        - 루프문(while)
        - 꼬리 재귀
        - 현재 상태 이후에 현재 상태에 무언가를 더하여 나타나는 경우(f(n+1) = f(n) + a)
    - 하향식 접근법
        - 맨 위부터 시작하여 가장 아래 재귀까지 조사
        - 대표적인 피보나치 수열( arr[n] =arr[n-1] + arr[n-2])
![](https://user-images.githubusercontent.com/18549026/142133205-220ae0ed-a712-4fa9-95ef-da4dc125f1d8.png)

### 동적계획법 & 메모이제이션
    - 어렵게 느껴지지만 실제로 한번 감을 잡으면 쉽게 풀 수 있다
    - 재귀적 알고리즘이나 반복적으로 호출되는 부분을 찾아내는 것이 관건
- 피보나치 수열
```javascript
let arr = {0: 0, 1: 1};
function fiboStart(val) {
    return fiboDown(val, arr);
}
//하양식
function fiboDown(i, arr) {
    if (i == 0 || i == 1) {
        return i;
    }
    if (arr[i] == undefined) {
      console.log('write:', i);
      arr[i]= fiboStart(i - 1, arr) + fiboStart(i - 2, arr) ; //memoization
    }
    console.log(arr);
    return arr[i];
}
//상향식
function fiboUp(r, arr){
    if(r==0 || r==1){
        return r;
    }
    for(let i=2; i<=r; i++){
        arr[i]= arr[i-1]+arr[i-2]
    }

    return arr[r]
}

console.log(fiboStart(12)); //144

write: 12
write: 11
write: 10
write: 9
write: 8
write: 7
write: 6
write: 5
write: 4
write: 3
write: 2
144

```

## 관련 문제
- https://leetcode.com/problems/n-th-tribonacci-number/
  - 풀이과정은 쉽지만 문제를 보고 접근 할 수 있는게 중요
  - 8.1 트리플 스텝: 어떤 아이가  n개의 계단을 오른다. 한번에 1계단 오르기도하고 2계단이나 3계단을 오르기도 한다.  
    계단을 오르는 방법이 몇 가지가 있는지 계산하는 메서드를 구현하라

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {

          if (n <= 2) {
            return arr[n]
          }else if(arr[n]!=undefined){
            return arr[n]
          }
          else {
            arr[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
            return arr[n]
          }
          console.log(arr);
          return arr[n];
        };

var arr = {0: 0, 1: 1, 2: 1}; // 기본 조건을 파악하는게 중요

console.log(tribonacci(25));

```
- https://leetcode.com/problems/flood-fill/
- 행렬에서 선택한 값과 주변의 값이 같은 경우 newColor 로 변환
- 순차적으로 주변의 값을 탐색하며 이미 들린 곳은 패스하는게 포인트
```javascript
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

```
- https://leetcode.com/problems/coin-change-2/
- dp 알고리즘으로 해당 숫자를 만들 수 있는 모든 가짓 수를 배열에 저장
- dp[0]=1 로 놓는게 포인트

```javascript
var change = function (amount, coins) {
  let dp = new Array(amount + 1).fill(0);

  dp[0]=1; //5원으로 5원을 만들기 위한 방법 1
  for(let coin of coins){
    for(let x=coin; x<=amount; x++ ){
      dp[x]+=dp[x-coin]
    }
    console.log(dp);
  }
  return dp[amount];
};
console.log(change(10, [1, 2, 5]));
```
