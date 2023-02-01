Feature: Graphql appointment
    In order to know the module appointment sucessfull
    I want to query appointment find all by account

    Scenario: Check the find all appointment
        Given I send a query
            """
            query {
            appointments {
            id
            accountId
            moderatorId
            status
            customer {
            id
            fullName
            email
            sessionId
            }
            dateCreated
            dateUpdate
            dateMeeting
            dateFinish
            }
            }
            """
        Then the response to query should be:
            """
            {
                "appointments": [
                    {
                        "id": "2a3ad682-a00d-11ed-a8fc-0242ac120004",
                        "accountId": "livestreamingdemo",
                        "moderatorId": "2a3ad682-a00d-11ed-a8fc-0242ac120003",
                        "status": "IN_MEETING",
                        "customer": {
                            "id": "2a3ad682-a00d-11ed-a8fc-0242ac120002",
                            "fullName": "Michael Atehortua Henao",
                            "email": "mayxool.11@gmail.com",
                            "sessionId": "MacBook"
                        },
                        "dateCreated": "2023-10-10T05:00:00.000Z",
                        "dateMeeting": "2023-10-11T05:00:00.000Z",
                        "dateFinish": null,
                        "dateUpdate": null
                    }
                ]
            }
            """