// Solution 1

const ranks = a => {
    let aTwo = a.slice();
    let ans = [];
    aTwo.sort((a, b) => b - a);

    for( let i= 0; i < a.length; i++){
    ans.push(aTwo.indexOf(a[i])+1);
    }
    return ans;
}
