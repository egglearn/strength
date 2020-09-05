const bodyweight = document.getElementById("bodyweight");
const answer = document.getElementById("answer");
const squat = document.getElementById("squatlift-weight");
const deadlift = document.getElementById("deadlift-weight");
const benchpress = document.getElementById("benchpress-weight");
const calculator = document.getElementById("calculator");
const squatrecords = [210, 240, 257, 265, 325.5, 327.5, 378.5, 330];
const deadliftrecords = [235, 298, 307, 325, 340, 370, 380];
const benchpressrecords = [152, 155, 179, 19, 220, 224, 228];

calculator.addEventListener("submit", function (event) {
  event.preventDefault();
  answer.className = "answer";
  const squatWeight = squat.value;
  const deadliftWeight = deadlift.value;
  const benchpressWeight = benchpress.value;
  //could reduce squat , deadlift and bench a little
  if (bodyweight.value <= 60) {
    const percent = Number(
      (((200 - squatWeight) / squatWeight) * 100).toFixed(0)
    );

    const deadliftPercent = Number(
      (((235 - deadliftWeight) / deadliftWeight) * 100).toFixed(0)
    );

    const benchpressPercent = Number(
      (((125 - benchpressWeight) / benchpressWeight) * 100).toFixed(0)
    );
    const average = (deadliftPercent + benchpressPercent + percent) / 3;
    console.log(average);
    const result =
      average < 50
        ? "HENCH - You are Extremely STRONG - we Hope you are not on the juice"
        : average <= 50 && average < 70
        ? "WEDGE - You are Very Strong - Ratings!"
        : average >= 70 && average < 100
        ? " Built - Your are STRONG - Respect!"
        : average >= 100 && average < 160
        ? "Average - You Clearly Have Put Some Effort In - Keep Going"
        : " Beginner -Plenty of Room for Improvement - Keep Working";

    console.log("ok");
    const backgroundChange =
      average < 50
        ? average <= 50 && average < 70
        : (answer.style.background = "lightgreen")
        ? (answer.style.background = "lightgreen")
        : average >= 70 && average < 100
        ? (answer.style.backround = "lightgreen")
        : average >= 100 && average < 160
        ? (answer.style.background = "orange")
        : (answer.style.background = "red");

    answer.innerText = `An Elite Level Squat Lift for you would be around 200kg.
    There is a  ${percent}% difference between your max and an Elite lift

    An Elite Deadlift would be around 235kg, there is a ${deadliftPercent}% difference 
    between your max an Elite Deadlift for your weight class
    
    An Elite Benchpress would be around 125kg, there is a ${benchpressPercent}% difference 
    between your max an Elite Benchpress for your weight class
    
    Your overall rating would be  ${result}

    `;
  } else if (bodyweight.value > 60 && bodyweight.value <= 66) {
    const percent = Number(
      (((210 - squatWeight) / squatWeight) * 100).toFixed(0)
    );

    const deadliftPercent = Number(
      (((250 - deadliftWeight) / deadliftWeight) * 100).toFixed(0)
    );

    const benchpressPercent = Number(
      (((150 - benchpressWeight) / benchpressWeight) * 100).toFixed(0)
    );
    const average = (deadliftPercent + benchpressPercent + percent) / 3;
    console.log(average);
    const result =
      average < 50
        ? "HENCH - You are Extremely STRONG"
        : average <= 50 && average < 70
        ? "WEDGE - You are Very Strong"
        : average >= 70 && average < 100
        ? " Built - Your are STRONG"
        : average >= 100 && average < 160
        ? "Average"
        : " Plenty of Room for Improvement - Keep Working";

    const backgroundChange =
      average < 50
        ? average <= 50 && average < 70
        : (answer.style.background = "lightgreen")
        ? (answer.style.background = "lightgreen")
        : average >= 70 && average < 100
        ? (answer.style.backround = "lightgreen")
        : average >= 100 && average < 160
        ? (answer.style.background = "orange")
        : (answer.style.background = "red");

    console.log(result);

    answer.innerText = `An Elite Level Squat Lift for you would be around 210kg.
    There is a  ${percent}% difference between your max and an Elite lift

    An Elite Deadlift would be around 250kg, there is a ${deadliftPercent}% difference 
    between your max an Elite Deadlift for your weight class
    
    An Elite Benchpress would be around 150kg, there is a ${benchpressPercent}% difference 
    between your max an Elite Benchpress for your weight class
    
    Your overall rating would be  ${result}

    `;
  }

  //3rd 74kg
  else if (bodyweight.value > 66 && bodyweight.value <= 74) {
    const percent = Number(
      (((225 - squatWeight) / squatWeight) * 100).toFixed(0)
    );

    const deadliftPercent = Number(
      (((260 - deadliftWeight) / deadliftWeight) * 100).toFixed(0)
    );

    const benchpressPercent = Number(
      (((180 - benchpressWeight) / benchpressWeight) * 100).toFixed(0)
    );
    const average = (deadliftPercent + benchpressPercent + percent) / 3;
    console.log(average);
    const result =
      average < 50
        ? "HENCH - You are Extremely STRONG"
        : average <= 50 && average < 70
        ? "WEDGE - You are Very Strong"
        : average >= 70 && average < 100
        ? " Built - Your are STRONG"
        : average >= 100 && average < 160
        ? "Average"
        : " Plenty of Room for Improvement - Keep Working";
    console.log(result);

    const backgroundChange =
      average < 50
        ? average <= 50 && average < 70
        : (answer.style.background = "lightgreen")
        ? (answer.style.background = "lightgreen")
        : average >= 70 && average < 100
        ? (answer.style.backround = "lightgreen")
        : average >= 100 && average < 160
        ? (answer.style.background = "orange")
        : (answer.style.background = "red");

    answer.innerText = `An Elite Level Squat Lift for you would be around 225kg.
    There is a  ${percent}% difference between your max and an Elitelift

    An Elite Deadlift would be around 260 kg, there is a ${deadliftPercent}% difference 
    between your max an Elite Deadlift for your weight class
    
    An Elite Benchpress would be around 180kg, there is a ${benchpressPercent}% difference 
    between your max an Elite Benchpress for your weight class
    
    Your overall rating would be  ${result}

    `;
  }

  //
  else if (bodyweight.value > 74 && bodyweight.value <= 83) {
    const percent = Number(
      (((240 - squatWeight) / squatWeight) * 100).toFixed(0)
    );

    const deadliftPercent = Number(
      (((300 - deadliftWeight) / deadliftWeight) * 100).toFixed(0)
    );

    const benchpressPercent = Number(
      (((190 - benchpressWeight) / benchpressWeight) * 100).toFixed(0)
    );
    const average = (deadliftPercent + benchpressPercent + percent) / 3;
    console.log(average);
    const result =
      average < 50
        ? "HENCH - You are Extremely STRONG"
        : average <= 50 && average < 70
        ? "WEDGE - You are Very Strong"
        : average >= 70 && average < 100
        ? " Built - Your are STRONG"
        : average >= 100 && average < 160
        ? "Average"
        : " Plenty of Room for Improvement - Keep Working";
    console.log(result);

    const backgroundChange =
      average < 50
        ? average <= 50 && average < 70
        : (answer.style.background = "lightgreen")
        ? (answer.style.background = "lightgreen")
        : average >= 70 && average < 100
        ? (answer.style.backround = "lightgreen")
        : average >= 100 && average < 160
        ? (answer.style.background = "orange")
        : (answer.style.background = "red");

    answer.innerText = `An Elite Level Squat Lift for you would be around 240kg.
    There is a  ${percent}% difference between your max and an Elite lift

    An Elite Deadlift would be around 300kg, there is a ${deadliftPercent}% difference 
    between your max an Elite Deadlift for your weight class
    
    An Elite Benchpress would be around 190kg, there is a ${benchpressPercent}% difference 
    between your max an Elite Benchpress for your weight class
    
    Your overall rating would be  ${result}

    `;
  }

  //93kg
  else if (bodyweight.value > 83 && bodyweight.value <= 93) {
    const percent = Number(
      (((300 - squatWeight) / squatWeight) * 100).toFixed(0)
    );

    const deadliftPercent = Number(
      (((310 - deadliftWeight) / deadliftWeight) * 100).toFixed(0)
    );

    const benchpressPercent = Number(
      (((210 - benchpressWeight) / benchpressWeight) * 100).toFixed(0)
    );
    const average = (deadliftPercent + benchpressPercent + percent) / 3;
    console.log(average);
    const result =
      average < 50
        ? "HENCH - You are Extremely STRONG"
        : average <= 50 && average < 70
        ? "WEDGE - You are Very Strong"
        : average >= 70 && average < 100
        ? " Built - Your are STRONG"
        : average >= 100 && average < 160
        ? "Average"
        : " Plenty of Room for Improvement - Keep Working";
    console.log(result);

    const backgroundChange =
      average < 50
        ? average <= 50 && average < 70
        : (answer.style.background = "lightgreen")
        ? (answer.style.background = "lightgreen")
        : average >= 70 && average < 100
        ? (answer.style.backround = "lightgreen")
        : average >= 100 && average < 160
        ? (answer.style.background = "orange")
        : (answer.style.background = "red");

    answer.innerText = `An Elite Level Squat Lift for you would be around 300kg.
    There is a  ${percent}% difference between your max and an Elite  lift

    An Elite Deadlift would be around 310kg, there is a ${deadliftPercent}% difference 
    between your max an Elite Deadlift for your weight class
    
    An Elite Benchpress would be around 210kg, there is a ${benchpressPercent}% difference 
    between your max an Elite Benchpress for your weight class
    
    Your overall rating would be  ${result}

    `;
  }

  //105
  else if (bodyweight.value > 93 && bodyweight.value <= 105) {
    const percent = Number(
      (((340 - squatWeight) / squatWeight) * 100).toFixed(0)
    );

    const deadliftPercent = Number(
      (((310 - deadliftWeight) / deadliftWeight) * 100).toFixed(0)
    );

    const benchpressPercent = Number(
      (((260 - benchpressWeight) / benchpressWeight) * 100).toFixed(0)
    );
    const average = (deadliftPercent + benchpressPercent + percent) / 3;
    console.log(average);
    const result =
      average < 50
        ? "HENCH - You are Extremely STRONG"
        : average <= 50 && average < 70
        ? "WEDGE - You are Very Strong"
        : average >= 70 && average < 100
        ? " Built - Your are STRONG"
        : average >= 100 && average < 160
        ? "Average"
        : " Plenty of Room for Improvement - Keep Working";
    console.log(result);

    const backgroundChange =
      average < 50
        ? average <= 50 && average < 70
        : (answer.style.background = "lightgreen")
        ? (answer.style.background = "lightgreen")
        : average >= 70 && average < 100
        ? (answer.style.backround = "lightgreen")
        : average >= 100 && average < 160
        ? (answer.style.background = "orange")
        : (answer.style.background = "red");

    answer.innerText = `An Elite Level Squat Lift for you would be around 340kg.
    There is a  ${percent}% difference between your max and an Elite Record lift

    An Elite Deadlift would be around 310kg, there is a ${deadliftPercent}% difference 
    between your max an Elite Deadlift for your weight class
    
    An Elite Benchpress would be around 260kg, there is a ${benchpressPercent}% difference 
    between your max an Elite Benchpress for your weight class
    
    Your overall rating would be  ${result}

    `;
  }

  // 120
  else if (bodyweight.value > 105 && bodyweight.value <= 120) {
    const percent = Number(
      (((378 - squatWeight) / squatWeight) * 100).toFixed(0)
    );

    const deadliftPercent = Number(
      (((335 - deadliftWeight) / deadliftWeight) * 100).toFixed(0)
    );

    const benchpressPercent = Number(
      (((300 - benchpressWeight) / benchpressWeight) * 100).toFixed(0)
    );
    const average = (deadliftPercent + benchpressPercent + percent) / 3;
    console.log(average);
    const result =
      average < 50
        ? "HENCH - You are Extremely STRONG"
        : average <= 50 && average < 70
        ? "WEDGE - You are Very Strong"
        : average >= 70 && average < 100
        ? " Built - Your are STRONG"
        : average >= 100 && average < 160
        ? "Average"
        : " Plenty of Room for Improvement - Keep Working";
    console.log(result);

    const backgroundChange =
      average < 50
        ? average <= 50 && average < 70
        : (answer.style.background = "lightgreen")
        ? (answer.style.background = "lightgreen")
        : average >= 70 && average < 100
        ? (answer.style.backround = "lightgreen")
        : average >= 100 && average < 160
        ? (answer.style.background = "orange")
        : (answer.style.background = "red");

    answer.innerText = `An Elite Level Squat Lift for you would be around 378kg.
    There is a  ${percent}% difference between your max and an Elite Record lift

    An Elite Deadlift would be around 335kg, there is a ${deadliftPercent}% difference 
    between your max an Elite Deadlift for your weight class
    
    An Elite Benchpress would be around 300kg, there is a ${benchpressPercent}% difference 
    between your max an Elite Benchpress for your weight class
    
    Your overall rating would be  ${result}

    `;
  } else if (bodyweight.value > 120) {
    const percent = Number(
      (((378 - squatWeight) / squatWeight) * 100).toFixed(0)
    );

    const deadliftPercent = Number(
      (((335 - deadliftWeight) / deadliftWeight) * 100).toFixed(0)
    );

    const benchpressPercent = Number(
      (((300 - benchpressWeight) / benchpressWeight) * 100).toFixed(0)
    );
    const average = (deadliftPercent + benchpressPercent + percent) / 3;
    console.log(average);
    const result =
      average < 50
        ? "HENCH - You are Extremely STRONG"
        : average <= 50 && average < 70
        ? "WEDGE - You are Very Strong"
        : average >= 70 && average < 100
        ? " Built - Your are STRONG"
        : average >= 100 && average < 160
        ? "Average"
        : " Plenty of Room for Improvement - Keep Working";
    console.log(result);

    const backgroundChange =
      average < 50
        ? average <= 50 && average < 70
        : (answer.style.background = "lightgreen")
        ? (answer.style.background = "lightgreen")
        : average >= 70 && average < 100
        ? (answer.style.backround = "lightgreen")
        : average > 100 && average < 160
        ? (answer.style.background = "orange")
        : (answer.style.background = "red");

    answer.innerText = `An Elite Level Squat Lift for you would be around 378kg.
    There is a  ${percent}% difference between your max and an Elite Record lift

    An Elite Deadlift would be around 335kg, there is a ${deadliftPercent}% difference 
    between your max an Elite Deadlift for your weight class
    
    An Elite Benchpress would be around 300kg, there is a ${benchpressPercent}% difference 
    between your max an Elite Benchpress for your weight class
    
    Your overall rating would be  ${result}

    `;
  }

  // else if (bodyweight.value < 74 && bodyweight.value >= 66) {
  //     const percent = (((240 - squatWeight) / squatWeight) * 100).toFixed(0);
  //     answer.innerText = `An Elite Level Lift for you would be around 240kg and there is a  ${percent}% squatWeight between your max and an Elite Record lift`;
  //   } else if (bodyweight.value < 83 && bodyweight.value >= 74) {
  //     const percent = (((257 - squatWeight) / squatWeight) * 100).toFixed(0);
  //     answer.innerText = `An Elite Level Lift for you would be around 257kg and there is a  ${percent}% squatWeight between your max and an Elite Record lift`;
  //   } else if (bodyweight.value < 93 && bodyweight.value >= 83) {
  //     const percent = (((265 - squatWeight) / squatWeight) * 100).toFixed(0);
  //     answer.innerText = `An Elite Level Lift for you would be around 265kg and there is a  ${percent}% squatWeight between your max and an Elite Record lift`;
  //   } else if (bodyweight.value < 105 && bodyweight.value >= 93) {
  //     const percent = (((325 - squatWeight) / squatWeight) * 100).toFixed(0);
  //     answer.innerText = `An Elite Level Lift for you would be around 325kg and there is a  ${percent}% squatWeight between your max and an Elite Record lift`;
  //   } else if (bodyweight.value < 120 && bodyweight.value >= 105) {
  //     const percent = (((327 - squatWeight) / squatWeight) * 100).toFixed(0);
  //     answer.innerText = `An Elite Level Lift for you would be around 327kg and there is a  ${percent}% squatWeight between your max and an Elite Record lift`;
  //   } else if (bodyweight.value < 120 && bodyweight.value >= 105) {
  //     const percent = ((328 - squatWeight) / squatWeight).toFixed(2) * 100;
  //     answer.innerText = `An Elite Level Lift for you would be around 328kg and there is a  ${percent}% squatWeight between your max and an Elite Record lift`;
  //   } else if (bodyweight.value >= 120) {
  //     const percent = ((370 - squatWeight) / squatWeight).toFixed(2) * 100;
  //     answer.innerText = `An Elite Level Lift for you would be around 330kg and there is a  ${percent}% squatWeight between your max and an Elite Record lift`;
  //   }
});
