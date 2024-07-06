function fiboEvenSum(n) {
    if (n <= 3) {
        return;
    }

    let num1 = 1;
    let num2 = 2;
    let next = num1 + num2;
    let sum_even_nums = 0;

    while (next < n) {
        num1 = num2;
        num2 = next;
        next = num1 + num2;

        if (num1 % 2 === 0) {
            sum_even_nums += num1;
        }
    }

    if (num2 % 2 === 0) {
        sum_even_nums += num2;
    }

    if (next % 2 === 0) {
        sum_even_nums += next;
    }

    return sum_even_nums;
}