function solution(a, b) {
    const aTob = String(a) + String(b);
    const ab= 2 * a * b;
    return aTob >= ab ? Number(aTob) : ab;
}