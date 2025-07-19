function showPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("math").style.display = "block";
}

function checkMath() {
  let q1 = document.getElementById("q1").value;
  let q2 = document.getElementById("q2").value;
  let q3 = document.getElementById("q3").value;

  if (q1 == "9" && q2 == "8" && q3 == "10") {
    document.getElementById("math").style.display = "none";
    document.getElementById("mathDone").style.display = "block";
  } else {
    alert("Wrong answers 😤 Try again, smart girl!");
  }
}

function goToGame() {
  document.getElementById("mathDone").style.display = "none";
  document.getElementById("game").style.display = "block";
}

function goToFinal() {
  document.getElementById("game").style.display = "none";
  document.getElementById("final").style.display = "block";
}
