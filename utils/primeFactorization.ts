import { divide, floor, sqrt, mod, isComplex } from "mathjs";

export default function primeFactorization(n: number): number[] {
    if (n <= 1) return [];
    const factors: number[] = [];
    let divisor = 2;

    while (n >= 2) {
        while (mod(n, divisor) === 0) {
            factors.push(divisor);
            n = divide(n, divisor) as number;
        }
        divisor++;
        const sqrtN = sqrt(n);
        if (!isComplex(sqrtN) && divisor > floor(sqrtN as number) && n > 1) {
            factors.push(n);
            break;
        }
    }

    return factors;
}

// 使用例
const number = 84;
const factors = primeFactorization(number);
console.log(`素因数分解結果: ${factors}`); // 出力: [2, 2, 3, 7]
