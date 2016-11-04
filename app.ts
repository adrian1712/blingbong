// function Calculate(){
// let year = document.getElementById("leapyear");
// document.getElementById("answer").innerText = LeapYearFinder(year);
// }
// function LeapYearFinder(year) {
//   if (parseInt(year) % 3 === 0)
//   return "no";
//   if (parseInt(year) % 5 === 0)
//   return "need list";
//   return "Stuff"
// }
function Calculate(){
  let input = <HTMLInputElement>document.getElementById("maxNum");
  let maxNum = parseInt(input.value);
  let resultsText = "";
  let listItem = "";

  for(let i = 1; i <= maxNum; i++){
    if(0 == i % 3 && 0 == i % 5){
      listItem = "blingbong";
    }
    else if(0 == i % 5){
      listItem = "bong";

    }
    else if(0 == i % 3){
      listItem = "bling";
    }
    else{
      listItem = String(i);
    }
    resultsText = resultsText + "<li>" + listItem + "</li>"
  }
  document.getElementById("results").innerHTML = resultsText;
}
