// Creating the function
const myFunction = () => {
  // List the items/properties/variables in here
  const message = "Be a happier person and smile";
  // Create subfunction
  const printMessage = () => {
    console.log(message);
  };
  // Call the subfunction
  return printMessage;
};

// Access the return by calling it with a new variable

const myPrintMessage = myFunction();
myPrintMessage();

// The main function calls the subfunction within it.
