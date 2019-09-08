// Test One Restrictions: Do not declare any new variable with the let keyword
let testOneMessage = 'test failing';

function testOne(testOneMessage) {
  return testOneMessage;
}


// Test Two Restrictions: Do not change any code in the body of testTwo
// (you can edit helperFunc though)
let testTwoMessage = 'test failing';

function testTwo() {
  helperFunc();
  return testTwoMessage;
}

function helperFunc(a) { //undefined
  testTwoMessage = 'test succeeding';
  return testTwoMessage;
}


// Test Three Restrictions: Type only a single character in either testThree or getMessage
let testThreeMessage = 'test failing';

function testThree(testThreeMessage) { //true
  if (testThreeMessage) { //true
    testThreeMessage = 'test succeeding'; //test succeeding - changes argument, not global
  }

  let msg = getMessage();
  return msg;

  function getMessage(value) { //undefined
    if (!value) { //true
      return testThreeMessage; //grabs argument, not global
    }

    return 'test failing';
  }
}


// Test Four Restrictions: Delete only a single character from any function.
let testFourMessage = 'test succeeding';

function testFour(msg) { //test failing
  function innerFunc(msg) {
    msg = msg //test succeeding

    function doubleInner(sg) { //test failing
      testFourMessage = msg; //makes global test failing
      return testFourMessage;
    }

    testFourMessage = doubleInner('test failing')
  }

  innerFunc(testFourMessage); //test succeeding

  msg = testFourMessage;
  return testFourMessage;
}
