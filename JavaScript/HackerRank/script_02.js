function aVeryBigSum(ar) {
    // Write your code here
    let result = 0
    for(let i = 0; i < ar.length; i += 1) {
        for(let n = 0; n < ar[i].length; i += 1){
            console.log(ar[i][n]);
        }
    }
}

aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);