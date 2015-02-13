describe('triangles', function() {
  it('will return equalateral if all sides are equal', function() {
    expect(triangles(2, 2, 2)).to.equal('equalateral');
  });

  it('will return "isosceles" if only two sides are equal', function() {
    expect(triangles(2, 3, 3)).to.equal('isosceles');
  });
});
