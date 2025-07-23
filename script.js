function checkAnswers() {
  let q1 = document.getElementById("q1").value.toLowerCase();

  let q2 = [
    document.getElementById("q2a").value.toLowerCase(),
    document.getElementById("q2b").value.toLowerCase(),
    document.getElementById("q2c").value.toLowerCase(),
    document.getElementById("q2d").value.toLowerCase(),
    document.getElementById("q2e").value.toLowerCase(),
    document.getElementById("q2f").value.toLowerCase(),
    document.getElementById("q2g").value.toLowerCase(),
    document.getElementById("q2h").value.toLowerCase(),
    document.getElementById("q2i").value.toLowerCase()
  ];

  let q3a = document.getElementById("q3a").value.toLowerCase();
  let q3b = document.getElementById("q3b").value.toLowerCase();
  let q3c = document.getElementById("q3c").value.toLowerCase();
  let q4a = document.getElementById("q4a").value.toLowerCase();
  let q4b = document.getElementById("q4b").value.toLowerCase();

  const correctQ2 = ["s", "u", "d", "u", "r", "b", "h", "a", "i"];

  const isQ2Correct = q2.every((val, index) => val === correctQ2[index]);

  if (q1 === "d" &&
      isQ2Correct &&
      q3a === "u" && q3b === "a" && q3c === "a" &&
      q4a === "o" && q4b === "u") {
    document.getElementById("puzzleForm").style.display = "none";
    document.getElementById("result").style.display = "block";
  } else {
    alert("Try again Mouu 😈 Subuu hasn’t suffered enough!");
  }
}
