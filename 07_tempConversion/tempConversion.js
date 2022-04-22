const ftoc = function(Fah) {
  let Cel = Math.round(((Fah-32)*5/9*10))/10;
  return Cel;
};

const ctof = function(Cel) {
  let Fah = Math.round((Cel*9/5+32)*10)/10;
  return Fah;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
