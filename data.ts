const clientsData = [
    {
    "id": "client1",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "+1234567890"
    },
    {
    "id": "client2",
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "phone": "+9876543210"
    },
    {
    "id": "client3",
    "name": "Alex Johnson",
    "email": "alex.johnson@example.com",
    "phone": "+1122334455"
    },
    {
    "id": "client4",
    "name": "Emily White",
    "email": "emily.white@example.com",
    "phone": "+9988776655"
    },
    {
    "id": "client5",
    "name": "David Brown",
    "email": "david.brown@example.com",
    "phone": "+5544332211"
    }
]

const fleetsData = [
    {
    "id": "fleet1",
    "name": "City Cabs",
    "email": "citycabs@example.com",
    "phone": "+1112223333"
    },
    {
    "id": "fleet2",
    "name": "Quick Rides",
    "email": "quickrides@example.com",
    "phone": "+4445556666"
    },
    {
    "id": "fleet3",
    "name": "Metro Taxis",
    "email": "metrotaxis@example.com",
    "phone": "+7778889999"
    },
    {
    "id": "fleet4",
    "name": "Swift Transits",
    "email": "swifttransits@example.com",
    "phone": "+1234567890"
    },
    {
    "id": "fleet5",
    "name": "Express Cars",
    "email": "expresscars@example.com",
    "phone": "+9876543210"
    }
]

const ridesData = [
    {
    "id": "ride1",
    "clientId": "client1",
    "pickupLocation": "123 Main St",
    "dropoffLocation": "456 Elm St",
    "proposedPrice": 20,
    "bids": [
    {
    "id": "bid1",
    "fleetId": "fleet1",
    "bidAmount": 18
    },
    {
    "id": "bid2",
    "fleetId": "fleet2",
    "bidAmount": 22
    }
    ]
    },
    {
    "id": "ride2",
    "clientId": "client2",
    "pickupLocation": "789 Oak St",
    "dropoffLocation": "101 Pine St",
    "proposedPrice": 25,
    "bids": [
    {
    "id": "bid1",
    "fleetId": "fleet1",
    "bidAmount": 23
    },
    {
    "id": "bid2",
    "fleetId": "fleet2",
    "bidAmount": 26
    },
    {
    "id": "bid3",
    "fleetId": "fleet4",
    "bidAmount": 25
    }
    ]
    },
    {
    "id": "ride3",
    "clientId": "client3",
    "pickupLocation": "456 Elm St",
    "dropoffLocation": "789 Oak St",
    "proposedPrice": 18,
    "bids": []
    },
    {
    "id": "ride4",
    "clientId": "client4",
    "pickupLocation": "101 Pine St",
    "dropoffLocation": "123 Main St",
    "proposedPrice": 30,
    "bids": []
    }
]
        
exports.clientsData = clientsData
exports.fleetsData = fleetsData
exports.ridesData = ridesData