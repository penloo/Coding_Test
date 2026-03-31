function solution(arr) {
    
    
    var answer = arr.reduce((sum, num) => sum + num ,0  )/arr.length;
    return answer;
}