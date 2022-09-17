var t0 = performance.now();

function sort(arr) {
    let n = arr.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {

        for (let i = gap; i < n; i += 1) {

            let temp = arr[i];

            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
                arr[j] = arr[j - gap];

            arr[j] = temp;
        }
    }
    return arr;
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
arr = sort(arr);

var t1 = performance.now();
document.getElementById("tShell").innerHTML = t1 - t0;