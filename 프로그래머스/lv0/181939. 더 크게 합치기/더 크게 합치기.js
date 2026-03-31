function solution(a, b) {
  
    const aTob = String(a)+String(b);
    const bToa = String(b)+String(a);
    return aTob >= bToa ? Number(aTob) : Number(bToa) ;
}