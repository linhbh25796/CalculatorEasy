function tinhToan(event) {
    console.log(event);
    let txtNumber1 = document.getElementById("txtNumber1");
    number1 = parseInt(txtNumber1.value);
    let txtNumber2 = document.getElementById("txtNumber2");
    number2 = parseInt(txtNumber2.value);

    let
        btn = document.getElementsByClassName("btn");
    document.getElementsByClassName("btn").value;
    document.getElementById("btnCong").value = "Cong";
    document.getElementById("btnTru").value = "Tru";
    document.getElementById("btnNhan").value = "Nhan";
    document.getElementById("btnChia").value = "Chia";

    if (event.value === "Cong") {
        document.getElementById("result").innerHTML = number1 + number2;
    } else if (event.value === "Tru") {
        document.getElementById("result").innerHTML = number1 - number2;
    } else if (event.value === "Nhan") {
        document.getElementById("result").innerHTML = number1 * number2;
    } else if (event.value === "Chia") {
        document.getElementById("result").innerHTML = number1 / number2;
    }

}
