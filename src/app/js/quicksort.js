var t0 = performance.now();

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = (low - 1);
  
    for (let j = low; j <= high - 1; j++) {

        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return (i + 1);
}
  
function quickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

var arr = new Array(1000);
rellenar(arr);

function rellenar(matriz) {
    var largo, valor, ind;
    largo = matriz.length;
    for (ind = 0; ind < largo; ind++) {
        valor = Math.random() * 1000000;
        matriz[ind] = Math.round(valor);
    }
}
var n = arr.length;
quickSort(arr, 0, n - 1);

var t1 = performance.now();
document.getElementById("tQuick").innerHTML = t1 - t0;