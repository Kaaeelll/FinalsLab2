function evaluateScore(score) {
  // Check if the score is not a number
  if (isNaN(score)) {
    return "Invalid score";
  }

  if (score <= 0) {
    return "Invalid score";
  }

  if (score > 100) {
    return "Invalid score";
  }

  if (score >= 90) {
    return "Excellent";
  } else if (score >= 75) {
    return "Passed";
  } else {
    return "Failed";
  }
}

alert("Welcome to the Student Score Evaluation Program!");

let name = prompt("Please enter your name:");

let scoreInput = prompt("Please enter your score:");

let continueProgram = confirm("Do you want to continue?");

let result = document.getElementById("result");

if (continueProgram === false) {
  result.innerHTML = `
        <h2>Evaluation Cancelled</h2>
        <p>You chose not to continue.</p>
    `;
} else if (name === null || name.trim() === "") {
  result.innerHTML = `
        <h2>Invalid Input</h2>
        <p>Please enter your name.</p>
    `;
} else if (scoreInput === null || scoreInput.trim() === "") {
  result.innerHTML = `
        <h2>Invalid Input</h2>
        <p>Please enter your score.</p>
    `;
} else {
  let score = Number(scoreInput);

  let remark = evaluateScore(score);

  result.innerHTML = `
        <h2>${remark}</h2>

        <p>
            <strong>Student:</strong> ${name}
        </p>

        <p>
            <strong>Score:</strong> ${scoreInput}
        </p>

        <p>
            <strong>Remark:</strong> ${remark}
        </p>
    `;
}
