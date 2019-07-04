//  Fn Declaration
fnDec();
function fnDec(params) {} // Hoisted -> Raised

// Fn Expression
fnExp(); // is not hoisted (raised)
const fnExp = function(params) {};

// Unlike fn, both Classes are NOT Hoisted
// Class Declaration
class Circle {}

// Class Expression
const Square = class {};
