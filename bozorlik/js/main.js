var s = 0;
var m = 0;
var n = 0;
$("#btn").click(function () {
    let display = $("#display").val();
    let kg = $("#kilo").val();
    let sum = $("#sum").val();
    m += parseFloat(sum);
    n += parseFloat(kg);

    if( display !== "" && kg !== "" || sum !== ""){
        s++;

        $(".tbody").append(
            "<tr>"+
                "<td>" + s + "</td>"+
                "<td>" + display + "</td>"+
                "<td>" + kg + " kg</td>"+
                "<td>" + sum + " so`m </td>"+
            "</tr>"
        );

        if(s >= 5){
            $("#display").attr("placeholder", "Yetar balki shunchasi :(");
        }
    }
    else{
        alert("Iltimos bo`limlarni to`ldiring!")
    }
    $("#display").val("");
    $("#kilo").val("");
    $("#sum").val("");
});
 
$("#result").click(function (){

    $(".tbody").append(
        "<tr>"+
            "<td>" + "n" + "</td>"+
            "<td>" + "Maxsulotlar" + "</td>"+
            "<td>" + "Umumiy massa: " + n + " kg</td>"+
            "<td>" + "Umumiy summa: " + m + " so`m </td>"+
        "</tr>"
    );

})