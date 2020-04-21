// 1--

const name = "Ronald";
const year = 2020 - 26;
console.log("His name is " + name + " and he was born in " + year);
// -----------------------------------------------------------------------------

// 2--
function yearsold(year) {
  return 2020 - year;
}

function newname(name) {
  return name;
}

const result = yearsold(26);
const resultname = newname("Ronald");
console.log("His name is " + resultname + " and he was born in " + result);
//--------------------------------------------------------------------------------------
