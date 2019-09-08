let bond = '007';

function oddJob() {
  let AgentinScope = (bond === '007'); //true
  let prediction = true; // YOUR BOOLEAN PREDICTION HERE

  return AgentinScope === prediction; //true
}


function goldFinger(bond) { //undefined
  let AgentinScope = (bond === '007') //false
  let prediction = false; // YOUR BOOLEAN PREDICTION HERE

  return AgentinScope === prediction;
}


function scaramanga(target) { //undefined
  target = bond; //007

  let AgentinScope = (bond === '007') //true
  let prediction = true; // YOUR BOOLEAN PREDICTION HERE

  return AgentinScope === prediction;
}


function drNo() {
  let bond = 'Body Double'; //not global

  let AgentinScope = (bond === '007'); //false
  let prediction = false; // YOUR BOOLEAN PREDICTION HERE

  return AgentinScope === prediction;
}


function jaws(agent) { //undefined
  agent = bond; //007
  bond = 'Body Double'; //changes global, not agent

  let AgentinScope = (agent === '007');
  let prediction = true; // YOUR BOOLEAN PREDICTION HERE

  return AgentinScope === prediction;
}


function elChiffre() {
  let agent = bond; //Body Double
  bond = 'Body Double'; //changes global, not agent

  let AgentinScope = (agent === '007');
  let prediction = false; // YOUR BOOLEAN PREDICTION HERE

  return AgentinScope === prediction;
}
