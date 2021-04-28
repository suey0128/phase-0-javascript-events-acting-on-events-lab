// Your code here


const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  } 

function moveDodgerRight() {
    const leftStr = dodger.style.left.replace("px","");
    const leftNum = parseInt(leftStr,10);
    if (leftNum < 360 ){
        dodger.style.left = `${leftNum +1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    else if (e.key === "ArrowRight") {
        moveDodgerRight(); 
    }
  }); 


