import primeFactorization from "../utils/primeFactorization";

describe("primeFactorization", () => {
    test("should return correct prime factors for 12", () => {
        const result = primeFactorization(12);
        expect(result).toEqual([2, 2, 3]);
    });

    test("should return correct prime factors for 15", () => {
        const result = primeFactorization(15);
        expect(result).toEqual([3, 5]);
    });

    test("should return correct prime factors for 28", () => {
        const result = primeFactorization(28);
        expect(result).toEqual([2, 2, 7]);
    });

    test("should return correct prime factors for 84", () => {
        const result = primeFactorization(84);
        expect(result).toEqual([2, 2, 3, 7]);
    });

    test("should return an empty array for 1", () => {
        const result = primeFactorization(1);
        expect(result).toEqual([]);
    });

    test("should return the same number for prime numbers", () => {
        const result = primeFactorization(13);
        expect(result).toEqual([13]);
    });

    test("should handle large numbers", () => {
        const result = primeFactorization(1000000007); // 1000000007は素数
        expect(result).toEqual([1000000007]);
    });
});
