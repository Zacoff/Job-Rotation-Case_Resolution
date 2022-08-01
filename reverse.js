function reverse (str) {
    let arr = str.split('');
    let reverse = []
    let count = arr.length
    
    while(reverse.length !== arr.length) {
        reverse.push(arr[count - 1])
        count--
    }

    return reverse.join('')
}

let string = "Ronaldo"

console.log(reverse(string))