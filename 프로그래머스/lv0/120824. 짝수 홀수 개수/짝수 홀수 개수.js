function solution(num_list) {
    var a = num_list.filter(num => num % 2 === 0).length
    var b= num_list.filter(num => num % 2 !== 0).length
    var answer = [a,b];
    return answer;
}