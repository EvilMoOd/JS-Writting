function quickSort(arr) {
  if (!arr.length) return arr;
  // 取轴
  let pivot = arr[0];
  // 分治
  let left = [],
    mid = [],
    right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    if (arr[i] === pivot) mid.push(arr[i]);
    if (arr[i] > pivot) right.push(arr[i]);
  }
  // 递归
  return quickSort(left).concat(mid, quickSort(right));
}
