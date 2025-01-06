function outerFunction() {
  let name = " Saba"; // incase name is cleaned up from memory and then innerFunction is executed.
  // Then innerFunction tends to remember the value of name via REFERENCE

  function innerFunction() {
    console.log(name);
  }

  return innerFunction;
}
let inner = outerFunction(); // inner will be function variable having a reference to innerFunction

inner();
