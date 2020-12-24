const chai = require("chai")
const chaiHttp = require("chai-http")
const expect = chai.expect
chai.use(chaiHttp)
const app = require('../index.js')

// serve index.js
describe("Get /", () => {
	it("should return status 200", async () => {
    	let res = await chai
        	.request(app)
            .get('/')
            expect(res.status).to.equal(200)
	})
})

// get loadTickets
describe("Get /loadTickets", () => {
	it("should return status 200", async () => {
    	let res = await chai
        	.request(app)
            .get('/loadTickets')
            expect(res.status).to.equal(200)
            //check DB
	})
})

// get coronaApi
describe("Get /coronaApi", () => {
	it("should return status 200", async () => {
    	let res = await chai
        	.request(app)
            .get('/coronaApi')
            expect(res.status).to.equal(200)
	})
})

// post insert
// describe("Post /insert", () => {
// 	it("should return status 200", async () => {
//     	let res = await chai
//         	.request(app)
//             .post('/insert')
//             .send({"title":"TEST", "description":"TEST"})
//             expect('Content-Type', /json/)
//             //check DB
//             .end(function(err, res) {
//                 if (err) done(err);
//                 res.body.should.have.property('title');
//                 res.body.participant.should.have.property('TEST');
//             })
//             .done();
// 	})
// })