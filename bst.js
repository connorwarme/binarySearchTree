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
let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

// print tree to console
const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }
let z = Tree(array);
prettyPrint(z.root);