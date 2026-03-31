function solution(n) {
    let answer = 0;

    if (n % 2 === 1) {
        // n이 홀수일 경우
        for (let i = 1; i <= n; i += 2) {
            answer += i;  // 홀수인 모든 정수의 합
        }
    } else {
        // n이 짝수일 경우
        for (let i = 2; i <= n; i += 2) {
            answer += i * i;  // 짝수인 모든 정수의 제곱의 합
        }
    }

    return answer;
}
