var t0 = performance.now();

function stoogesort(arr, l, h)
{
    if (l >= h)
        return;

    if (arr[l] > arr[h]) {
        let t = arr[l];
        arr[l] = arr[h];
        arr[h] = t;
    }

    if (h - l + 1 > 2) {
        let t = parseInt((h - l + 1) / 3, 10);
        stoogesort(arr, l, h - t);
        stoogesort(arr, l + t, h);
        stoogesort(arr, l, h - t);
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
stoogesort(arr, 0, n - 1);

var t1 = performance.now();
document.getElementById("tStooge").innerHTML = t1 - t0;

