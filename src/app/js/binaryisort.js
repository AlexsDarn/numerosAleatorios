var t0 = performance.now();

function binarySearch(a, item, low, high) {
    while (low <= high) {
        var mid = low + (high - low) / 2;
        if (item == a[mid])
            return mid + 1;
        else if (item > a[mid])
            low = mid + 1;
        else
            high = mid - 1;
    }
    return low;
}

function insertionSort(a, n) {
    var i, loc, j, k, selected;
    for (i = 1; i < n; ++i) {
        j = i - 1;
        selected = a[i];

        loc = binarySearch(a, selected, 0, j);

        while (j >= loc) {
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = selected;
    }
}

var a = new Array(1000);
rellenar(a);

function rellenar(matriz) {
    var largo, valor, ind;
    largo = matriz.length;
    for (ind = 0; ind < largo; ind++) {
        valor = Math.random() * 1000000;
        matriz[ind] = Math.round(valor);
    }
}
var n = a.length, i;
insertionSort(a, n);

var t1 = performance.now();
document.getElementById("tBinary").innerHTML = t1 - t0;