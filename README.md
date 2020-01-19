# Vue Address Book

Welcome!

With this little app you'll be able to add addresses, update an address, view addresses and delete addresses.

### Building the Spring Boot backend
```
./gradlew build
```

### Startup the backend server
```
./gradlew bootRun
```

### Startup the client server
```
cd client
npm run serve
```

### Touring your REST service

With the app running, you can check things out on the command line using curl (or any other tool you like).

### View a specific Address:
    $ curl localhost:8080/api/address/view/?id=1
    {
        "id":1,
        "firstName":"firstName",
        "lastName":"lastName",
        "email":"email@email.com",
        "phone":"999-999-9999",
        "address":"address",
        "address2":"address2",
        "city":"city",
        "state":"CA",
        "zipcode":"91361"
    }

### List all Addresses:
    $ curl localhost:8080/api/address/list
    [{
        "id" : 1,
        "firstName" : "firstName",
        "lastName" : "lastName",
        "email" : "email@email.com",
        "phone" : "999-999-9999",
        "address" : "address",
        "address2" : "address2",
        "city" : "city",
        "state" : "CA",
        "zipcode" : "91361"
    }]

### Create a New Address:
    $ curl -X POST localhost:8080/api/address/new -d "{\"firstName\": \"George\", \"lastName\": \"Washington\", \"email\": \"bla@bla.com\", \"phone\": \"(999) 999-9999\",\"address\": \"16 Pennsylvania Ave\",\"address2\": \"Apt 2\",\"city\": \"Washington\",\"state\": \"D.C\",\"zipcode\": \"99999\"}" -H "Content-Type:application/json"
    {
        "id":2,
        "firstName":"George",
        "lastName":"Washington",
        "email":"bla@bla.com",
        "phone":"(999) 999-9999",
        "address":"16 Pennsylvania Ave",
        "address2":"Apt 2",
        "city":"Washington",
        "state":"D.C",
        "zipcode":"99999"
    }

### Update an Existing Address:
    $ curl -X POST localhost:8080/api/address/update -d "{\"id\": \"1\", \"firstName\": \"Denzel\", \"lastName\": \"Washington\", \"email\": \"bla@bla.com\", \"phone\": \"(999) 999-9999\",\"address\": \"16 Pennsylvania Ave\",\"address2\": \"Apt 2\",\"city\": \"Washington\",\"state\": \"D.C\",\"zipcode\": \"99999\"}" -H "Content-Type:application/json"
    {
        "id":1,
        "firstName":"Denzel",
        "lastName":"Washington",
        "email":"bla@bla.com",
        "phone":"(999) 999-9999",
        "address":"16 Pennsylvania Ave",
        "address2":"Apt 2",
        "city":"Washington",
        "state":"D.C",
        "zipcode":"99999"
    }

### Delete an Existing Address:
    $ curl -X POST localhost:8080/api/address/delete/2
    { 
        "message" : "success"
    }
