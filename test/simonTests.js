'use strict';

const sinon = require('sinon');
const chai = require('chai'),
    expect = chai.expect;


chai.should();


describe("Sinon Test", function () {
    let student, schedule;

    beforeEach(function () {
        student = {
            dropClass: function (classID, callback) {
                // Do stuff
                if (callback.dropClass) {
                    callback.dropClass();
                }
                else {
                    callback();
                }
            },
            addClass: function (schedule) {
                if (!schedule.classIsFull()) {
                    // Do stuff

                    return true;
                }
                else {
                    return false;
                }
            }
        };

        schedule = {
            dropClass: function () {
                console.log("Class Dropped from schedule object");
            },
            classIsFull: function () {
                return true;
            }
        };
    })

    describe("student.dropClass", function () {
        it("Should call the callback", function () {
            const spy = sinon.spy();

            student.dropClass(1, spy);
            spy.called.should.be.true;
        })

        it("Should call the callback and log to the console", function () {
            function onClassDropped() {
                console.log("onClassDropped was called from student object!");
            }

            const spy = sinon.spy(onClassDropped);

            student.dropClass(1, spy);
            spy.called.should.be.true;
        })

        it("Should call the callback even if it's a method of an object", function () {

            const spy = sinon.spy(schedule, 'dropClass');
            student.dropClass(1, spy);
            spy.called.should.be.true;
        })
    })


    describe("Student with stubs", function () {
        it("Should call a stubbed method", function () {

            const stub = sinon.stub(schedule);
            student.dropClass(1, stub.dropClass);
            stub.dropClass.called.should.be.true;
        })

        it("Should return true when the class is not full", function () {

            const stub = sinon.stub(schedule);
            stub.classIsFull.returns(false);
            let returnVal = student.addClass(stub);
            returnVal.should.be.true;
        })

    })


    describe("Student with mocks", function () {
        it("mocks sechdule", function () {

            const mockObj = sinon.mock(schedule);
            let expectation = mockObj.expects("classIsFull").once();
            student.addClass(schedule);
            expectation.verify();
        })
    })
})