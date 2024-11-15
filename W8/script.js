function Calculate() {
    var a= document.getElementById("a_value").value;
//checking whether a is odd or even
    var result = 1;
    var output = "Result ";
    a= parseInt(a);
     for (var i = 1; i <= a; i++) {
    result *= i;
  }
    document.getElementById("result").innerHTML = "Result:" + result;
}