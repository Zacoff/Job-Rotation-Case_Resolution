function isfibonacci (number) {
    let arrNumbers = [0,1];

    while (arrNumbers.length <= number) {
        let num = arrNumbers[arrNumbers.length - 1] + arrNumbers[arrNumbers.length - 2];
        arrNumbers.push(num);
    }

    return arrNumbers.includes(number) ? "O número pertence": "O número não pertence";
}

console.log(isfibonacci(11));