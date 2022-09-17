var t0 = performance.now();

function sort(arr) {
    var N = arr.length;

    for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
        heapify(arr, N, i);

    for (var i = N - 1; i > 0; i--) {

        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        heapify(arr, i, 0);
    }
}

function heapify(arr, N, i) {
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;

    if (l < N && arr[l] > arr[largest])
        largest = l;

    if (r < N && arr[r] > arr[largest])
        largest = r;

    if (largest != i) {
        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        heapify(arr, N, largest);
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
var N = arr.length;

sort(arr);


var t1 = performance.now();
document.getElementById("tHeap").innerHTML = t1 - t0;