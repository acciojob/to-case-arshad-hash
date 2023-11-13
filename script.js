function toCase(text) {
    // write your code here
    //copy
	let Un =text.toLowerCase();
    let Nu = text.toUpperCase();
    return Un+"-"+Nu;
  } 
  
  // DO not change the code below
  
   const text = prompt("Enter text:");
   alert(toCase(text));
