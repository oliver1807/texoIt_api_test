/// <reference types="cypress"/>

export
const API_URL = Cypress.env('API_BASE_URL')
const faker = require('faker-br')


describe("Validação geral das apis do jsonPlaceHolder", () => {
    
    it("Exercício 1 = Validação GET", () => {

        cy.request({
           
            method: "GET",
            url: `${API_URL}/comments?name=alias odio sit`

        }).then((response) => {            
            expect(response.status).to.equal(200)
            expect(response.body[0].email).to.equal('Lew@alysha.tv')              
        })
        
    })

    it("Exercício 2 = Validação POST", () => {
         cy.request({
            
            method: "POST",
            url: `${API_URL}/users`

         }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.id).to.equal(11)            
         })

    })

    it("Exercício 3 = Validação PUT", () => {        

        let email = faker.internet.email()        
        let latitude = faker.address.latitude()
        let longitude = faker.address.longitude()
        

        cy.request({
            
            method: "PUT",
            url: `${API_URL}/users/5`,
            body: {
                "id": 5,
                "name": "Chelsey Dietrich",
                "username": "Kamren",
                "email": email,
                "address": {
                  "street": "Skiles Walks",
                  "suite": "Suite 351",
                  "city": "Roscoeview",
                  "zipcode": "33263",
                  "geo": {
                    "lat": latitude,
                    "lng": longitude
                  }
                },
                "phone": "(254)954-1289",
                "website": "demarco.info",
                "company": {
                  "name": "Keebler LLC",
                  "catchPhrase": "User-centric fault-tolerant solution",
                  "bs": "revolutionize end-to-end systems"
                }
              }

         }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.email).to.equal(email)
            expect(response.body.address.geo.lat).to.equal(latitude)
            expect(response.body.address.geo.lng).to.equal(longitude)            
         })

         

    })

})