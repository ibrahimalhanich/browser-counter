//first we need to store the data from the input text somewhere
var inputValue = $("input.counter").val(); //parseInt(inputValue) gets it as a number

$("button.addition").on("click", addFunc);

function addFunc() {
  inputValue = $("input.counter").val();
  let addValue = parseInt(inputValue);
  let endResultValue = parseInt($("p").text());
  endResultValue = endResultValue + addValue;
  $("p").text(`${endResultValue}`);
  if (endResultValue < 0) {
    $("p").css("color", "red");
  } else {
    $("p").css("color", "black");
  }
}

$("button.subtraction").on("click", subFunc);

function subFunc() {
  inputValue = $("input.counter").val();
  let subValue = parseInt(inputValue);
  let endResultValue = parseInt($("p").text());
  endResultValue = endResultValue - subValue;
  $("p").text(`${endResultValue}`);
  if (endResultValue < 0) {
    $("p").css("color", "red");
  } else {
    $("p").css("color", "black");
  }
}