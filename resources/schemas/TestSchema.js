var addressSample = {
  billingContact: {
    "id": "idSample1",
    "email": "email@email.com",
    "additionalAttributes": {
        "streetNo": "123",
        "buildingNo": "14"
    }
  },
  links:[
    {
        "rel": "address",
        "method": "GET",
        "href": "http://localhost/v1/address/id123456789"
    }
]
};
module.exports = addressSample;