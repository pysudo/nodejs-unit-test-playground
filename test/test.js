'use strict';

const sinon = require('sinon');
const chai = require('chai'),
    expect = chai.expect;


chai.should();


function isEven(number) {

    return number % 2 === 0;
}


function add(num1, num2) {

    return num1 + num2;
}


describe("Numbers Test", function () {
    describe("IsEven", function () {
        it("Should return true when the number is even", function () {
            isEven(4).should.be.true;
        });

        it("Should return false when the number is odd", function () {
            expect(isEven(5)).be.false;
        });
    });

    describe("Add with setup/teardown", function () {
        let num;
        beforeEach(function () {
            num = 5;
        });

        it("Adding 5 to 5 should equal to 10", function () {
            num = add(num, 5);
            num.should.equal(10);
        });

        it("Adding 5 to 7 should equal to 12", function () {
            num = add(num, 7);
            num.should.equal(12);
        });

    });
})