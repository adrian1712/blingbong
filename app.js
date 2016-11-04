function Calculate() {
    var input = document.getElementById("maxNum");
    var maxNum = parseInt(input.value);
    var resultsText = "";
    var listItem = "";
    for (var i = 1; i <= maxNum; i++) {
        if (0 == i % 3 && 0 == i % 5) {
            listItem = "blingbong";
        }
        else if (0 == i % 5) {
            listItem = "bong";
        }
        else if (0 == i % 3) {
            listItem = "bling";
        }
        else {
            listItem = String(i);
        }
        resultsText = resultsText + "<li>" + listItem + "</li>";
    }
    document.getElementById("results").innerHTML = resultsText;
}
