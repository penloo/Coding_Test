function solution(my_string, n) {
    
    var answer = '';
    return [...my_string].map(char => char.repeat(n)).join('');
}