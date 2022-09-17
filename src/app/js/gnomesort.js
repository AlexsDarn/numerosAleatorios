var t0 = performance.now();

function gnomeSort(arr, n) {
    let index = 0;
    while (index < n) {
        if (index == 0)
            index++;
        if (arr[index] >= arr[index - 1])
            index++;
        else {
            let temp = 0;
            temp = arr[index];
            arr[index] = arr[index - 1];
            arr[index - 1] = temp;
            index--;
        }
    }
    return;
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

gnomeSort(arr, arr.length);

var t1 = performance.now();
document.getElementById("tGnome").innerHTML = t1 - t0;