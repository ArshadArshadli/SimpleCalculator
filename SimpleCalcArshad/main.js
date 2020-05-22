    var eded1;
    var eded2;
    var qiymet;
    function hesabla() {
    document.getElementById("netice").innerHTML=null;
    var yeniQiymet = document.getElementById("netice").innerHTML;
    var value = yeniQiymet + qiymet;
    document.getElementById("netice").innerHTML = value;

}
    
    document.getElementById("vurma").onclick = function () {
    eded1 = Number(document.getElementById("eded1").value);
    eded2 = Number(document.getElementById("eded2").value);
    qiymet = eded1 * eded2;
}

    document.getElementById("bolme").onclick = function () {
    // document.getElementById("neticee").value = eded1 / eded2;
    eded1 = Number(document.getElementById("eded1").value);
    eded2 = Number(document.getElementById("eded2").value);
    qiymet = eded1 / eded2;
}

    document.getElementById("toplama").onclick = function () {
    eded1 = Number(document.getElementById("eded1").value);
    eded2 = Number(document.getElementById("eded2").value);
    qiymet = eded1 + eded2;
}

    document.getElementById("cixma").onclick = function () {
    eded1 = Number(document.getElementById("eded1").value);
    eded2 = Number(document.getElementById("eded2").value);
    qiymet = eded1 - eded2;
}

