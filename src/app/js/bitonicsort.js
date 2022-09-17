var t0 = performance.now();

function compAndSwap(a, i, j, dir) {
    if ((a[i] > a[j] && dir === 1) ||
        (a[i] < a[j] && dir === 0)) {
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
}

function bitonicMerge(a, low, cnt, dir) {
    if (cnt > 1) {
        var k = parseInt(cnt / 2);
        for (var i = low; i < low + k; i++)
            compAndSwap(a, i, i + k, dir);
        bitonicMerge(a, low, k, dir);
        bitonicMerge(a, low + k, k, dir);
    }
}

function bitonicSort(a, low, cnt, dir) {
    if (cnt > 1) {
        var k = parseInt(cnt / 2);

        bitonicSort(a, low, k, 1);
        bitonicSort(a, low + k, k, 0);
        bitonicMerge(a, low, cnt, dir);
    }
}

function sort(a, N, up) {
    bitonicSort(a, 0, N, up);
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
var up = 1;
sort(a, a.length, up);

var t1 = performance.now();
document.getElementById("tBit").innerHTML = t1 - t0;