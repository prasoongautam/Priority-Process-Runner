const chai = require('chai')
const expect = chai.expect
const validator = require('../src/priority_process');
describe("validator priorityProcess()", () => {
    it("should return a,b for task: [a,b] and dependencies: []", () => {
        expect(validator.priorityProcess(['a', 'b'], [])).to.equal('a,b')
    })
    it("should return b,a for task: [a,b] and dependencies: [a=>b]", () => {
        expect(validator.priorityProcess(['a', ' b'], ["a=>b"])).to.equal('b,a')
    })
    it("should return b,a,d,c for task: [a,b,c,d] and dependencies: [a => b,c => d]", () => {
        expect(validator.priorityProcess(['a', ' b', 'c', 'd'], ["a=>b", "c=>d"])).to.equal('b,a,d,c')
    })
    it("should return c,b,a for task: [a,b,c] and dependencies: [a => b,b => c]", () => {
        expect(validator.priorityProcess(['a', ' b', 'c'], ["a=>b", "b=>c"])).to.equal('c,b,a')
    })
    it("should return error like Error cyclic dependency found for task: [a,b,c,d] and dependencies: [a => b,b => c,c => a ]", () => {
        expect(validator.priorityProcess(['a', ' b', 'c', 'd'], ["a=>b", "b=>c", "c=>a"])).to.equal('Error cyclic dependency found')
    })
    it("should return '' for task: [] and dependencies: []", () => {
        expect(validator.priorityProcess([], [])).to.equal('')
    })

})