var triangles = (function(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    return 'equalateral';
  } else {
    return false;
  }
});
