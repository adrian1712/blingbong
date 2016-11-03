function Calculate() {
    var year = document.getElementById("leapyear").value;
    document.getElementById("answer").innerText = LeapYearFinder(year);
}
function LeapYearFinder(year) {
    if (parseInt(year) % 400 === 0)
        return "Its a Leap Year";
    if (parseInt(year) % 100 === 0)
        return "Its not Leap Year";
    if (parseInt(year) % 4 === 0)
        return "Its a Leap Year";
    return "Its not Leap Year";
}
