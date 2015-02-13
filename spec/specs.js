describe('triangles', function() {
  it('will return equalateral if all sides are equal', function() {
    expect(triangles(2, 2, 2)).to.equal('equalateral');
  });

  it('will return "isosceles" if only two sides are equal', function() {
    expect(triangles(2, 3, 3)).to.equal('isosceles');
  });

  it('will return "scalene" if no sides are equal', function() {
    expect(triangles(1, 2, 3)).to.equal('scalene');
  });

  it('will return "You do not have a triangle" if one side is not as long as the other two combined', function() {
    expect(triangles(2, 2, 8)).to.equal('You do not have a triangle');
  });
});
