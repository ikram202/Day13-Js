//1-Selection sort
function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      } 
    }
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}
const points = [40, 100, 1, 5, 25, 10]; 
console.log('selectionSort', selectionSort(points));

// 2-Bubble sort
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const point = [40, 100, 1, 5, 25, 10]; 
console.log("bubbleSort", bubbleSort(point))

// 3- Insertion sort
function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const currentElement = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentElement;
  }
  return arr;
}
const pointt = [40, 100, 1, 5, 25, 10]; 
console.log("insertionSort",insertionSort(pointt))

// 4-Linear search 
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return `Élement ${target} est à la position ${i}.`;
      }
    }
    return `Élement ${target} introuvable .`;
  }
  const poinnt = [40, 100, 1, 5, 25, 10];
  const targetElement = 25;
  console.log(linearSearch(poinnt, targetElement));
  
// 5-Matrix
function compterZeros(matrix) {
    let zeroNombre = 0;
      for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 0) {
          zeroNombre++;
        }
      }
    }
    return zeroNombre;
  }
  const matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  const nombreZeros = compterZeros(matrix);
  console.log(`Nombre de zéro: ${nombreZeros}`);
  