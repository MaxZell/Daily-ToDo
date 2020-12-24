// const app = require('./../index');
// const chai = require('chai');
// let chaiHttp = require('chai-http');
// let should = chai.should();

// describe("integration test", function() {
//     it("should be able to add and read ToDo Tickets", function() {
//         let backend = new Todos();
//         assert.notStrictEqual(todos.list().length, 1);
//     });
// });

// describe('GET Home', () => {
//     it('Should return Not found', (done) => {
//         chai
//             .request(app)
//             .get('/')
//             .end(function (err, res) {
//                 const result = res.statusCode
//                 expect(result).to.equal(200)
//                 done()
//             })
//     })
// })

// chai.use(chaiHttp);

// describe('main get req', () => {
//     it('app should be served', (done) => {
//       chai.request(app)
//           .get('/')
//           .end((err, res) => {
//                 // res.should.have.status(200);
//                 expect(res.status).to.equal(200);
//             done();
//           });
//     });
// });


const chai = require("chai")
const chaiHttp = require("chai-http")
const expect = chai.expect
chai.use(chaiHttp)
const app = require('../index')

describe("Get /", () => {
	it("should return status 200", async () => {
    	let res = await chai
        	.request(app)
            .get('/')
            .expect(res.status).to.equal(200)
            .done();
	})
})

// var app = require("../index");
// var request = require("supertest").agent(app.listen());

// describe("Our amazing site", function () {
//     after(function (done) {
//         server.close();
//         done();
//     });

//     it("has a nice welcoming message", function (done) {
//         request
//             .get("/")
//             .expect(res.status).to.equal(200)
//             .end(done);
//     });
// });