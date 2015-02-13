var triangles = (function(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    return 'equalateral';
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return 'isosceles';
  } else if (side1 != side2 && side2 != side3) {
    return 'scalene';
  }
});
