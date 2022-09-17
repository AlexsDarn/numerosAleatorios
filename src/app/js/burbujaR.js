var t2 = performance.now();

function bubbleSort(arr, n) {

    // Base case
    if (n == 1)
        return;

    var count = 0;

    for (var i = 0; i < n - 1; i++)
        if (arr[i] > arr[i + 1]) {

            // swap arr[i], arr[i+1]
            var temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            count++;
        }

    if (count == 0)
        return;
    bubbleSort(arr, n - 1);
}

// Driver code
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
bubbleSort(arr, arr.length);

var t3 = performance.now();
document.getElementById("tBurbujaR").innerHTML = t3 - t2;