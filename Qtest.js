QUnit.test('Testing Multiplication function with four sets of inputs', function (assert) {
    assert.throws(function () { mul(); }, new Error("only numbers are allowed"), 'Passing in array correctly raises an Error');
    assert.strictEqual(mul(1,2), 2, 'All positive numbers');
    assert.strictEqual(mul(1,-2), -2, 'Positive and negative numbers');
    assert.strictEqual(mul(-1,-2), 2, 'All are negative numbers');
});
