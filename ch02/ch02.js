// Looping a Triangle Exercise
function triangle(leg) {
  console.log("Triangle Result:")
  var str = "";
  var triResult = document.querySelector("#triangleResult");

  for (var i = 0; i < leg; i++) {
    str += "#";
    console.log(str);
    triResult.innerHTML += str + "<br>";
  }
}

// FizzBuzz Exercise
function fizzBuzz(num) {
  console.log("\nFizzBuzz Result:")
  var fbResult = document.querySelector("#fizzBuzzResult");
  var strFB = " - ";
  for (var j = 1; j <= num; j++) {
    if (j % 3 === 0 && j % 5 === 0) {
      console.log("FizzBuzz");
      strFB += "FizzBuzz - ";
    } else if (j % 3 === 0) {
      console.log("Fizz");
      strFB += "Fizz - ";
    } else if (j % 5 === 0) {
      console.log("Buzz");
      strFB += "Buzz - ";
    } else {
      console.log(j);
      strFB += j + " - ";
    }

  }
  fbResult.innerHTML = strFB;
}

// Chessboard Exercise
function chessboard(size) {
  var cbResult = document.querySelector("#chessboardResult");

  var strChess;

  function strCreate(a, b, sz) {
    strChess = "";
    var count = sz;
    while (count > 0) {
      if (count % 2 === 0) {
        strChess += a;
      } else {
        strChess += b;
      }
      count = count - 1;
    }
    console.log(strChess);
    cbResult.innerHTML += "&nbsp;" + strChess + "<br>";
  }

  for (var k = 0; k < size; k++) {
    if (k % 2 === 0) {
      strCreate("#", " ", size);
    } else {
      strCreate(" ", "#", size);
    }
  }

}

function resetProblem(item) {
  document.querySelector(item).innerHTML = "";
}

function rerunTriangle() {
  resetProblem("#triangleResult");
  var newSize = document.querySelector('#triangleInput').value;
  triangle(newSize);
}

function rerunFizzBuzz() {
  resetProblem("#fizzBuzzResult");
  var newLength = document.querySelector('#fbInput').value;
  fizzBuzz(newLength);
}

function rerunChessboard() {
  resetProblem("#chessboardResult");
  var newSize = document.querySelector('#cbInput').value;
  chessboard(newSize);
}

// Add event listener to document
document.addEventListener('DOMContentLoaded', function() {

  var resultTriangle = triangle(7); // Initial triangle on Page Load
  var resultFB = fizzBuzz(100); // Initial FizzBuzz output on Page Load
  var resultChessboard = chessboard(8); // Initial chessboard on Page Load
});
