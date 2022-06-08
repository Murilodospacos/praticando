
function compareTriplets(a, b) {
    // Write your code here
    let alice = 0;
    let bob = 0;
    for (let i = 0; i < 3; i+= 1) {
        if(a[i] > b[i]){
            alice += 1;
        } else if (a[i] < b[i]) {
        bob += 1;
        }
    }

    return [alice, bob];
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));