const NodeFactory = (input) => {
    return {
        data: input || null,
        left: null,
        right: null
    }
}
const sortArray = (array) => {
    const newArray = array.sort((a, b) => a - b);
    return newArray;
}
const removeDuplicates = (array) => {
    let previous = null;
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] != previous) {
            newArray.push(array[i]);
            previous = array[i]
        } else {
            console.log(`found a duplicate!`);
        }
    }
    return newArray;
}
const buildTree = (array, start, end) => {
    if (start > end) return null;
    const mid = parseInt((start + end)/2);
    console.log(mid);
    const node = NodeFactory(array[mid]);
    node.left = buildTree(array, start, mid-1);
    node.right = buildTree(array, mid+1, end);
    return node;
}
const Tree = (array) => {
    let sortedArray = sortArray(array);
    let siftedArray = removeDuplicates(sortedArray);
    console.log(siftedArray);
    return { root: buildTree(siftedArray, 0, siftedArray.length-1) }
}
let array = [1, 2, 3, 4, 5, 6, 7];
let x = sortArray(array);
let y = removeDuplicates(x);
console.log(y);