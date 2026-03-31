function solution(array, height) {
    var answer = 0;
    return array.filter(item => item > height).length;
}