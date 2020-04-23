// 1--

const name = "Ronald";
const year = 2020 - 26;
console.log("His name is " + name + " and he was born in " + year);
// -----------------------------------------------------------------------------

// 2--
function yearsold(age) {
  return 2020 - age;
}

function newname(name, age) {
  const newprice = yearsold(age);
  const result = "His name is " + name + " and he was born in " + newprice;
  return result;
}

console.log(newname("Ronald", 26));
//--------------------------------------------------------------------------------------
