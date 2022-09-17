var t0 = performance.now();

function insertionSortRecursive(arr,n)
{
    if (n <= 1)
        return;
    
    insertionSortRecursive( arr, n-1 );
    
    let last = arr[n-1];
    let j = n-2;
    
    while (j >= 0 && arr[j] > last)
    {
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = last;
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
insertionSortRecursive(arr, arr.length);

var t1 = performance.now();
document.getElementById("tIR").innerHTML = t1 - t0;