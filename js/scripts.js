var triangles = (function(side1, side2, side3) {
  if ((side1 + side2) >= side3 && (side1 + side3) >= side2 && (side2 + side3) >= side1) {
    if (side1 === side2 && side2 === side3) {
      return 'equalateral';
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      return 'isosceles';
    } else if (side1 != side2 && side2 != side3) {
      return 'scalene';
    }
  } else {
    return 'You do not have a triangle';
  }
});

$(function() {
  $('form#triangles').submit(function(event) {
    var side1 = parseInt($('input#side1').val());
    var side2 = parseInt($('input#side2').val());
    var side3 = parseInt($('input#side3').val());

    var result = triangles(side1, side2, side3);

    $('#result').text(result)

    event.preventDefault();
  });
});
