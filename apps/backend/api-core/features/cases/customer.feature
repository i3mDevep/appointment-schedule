Feature: Graphql customer
  In order to know the module customer sucessfull
  I want to query customer all

  Scenario: Check the find all customer
    Given I send a query
      """
      query {
      customers {
      id
      fullName
      }
      }
      """
    Then the response to query should be:
      """
      {
        "customers": [
          {
            "id": "2a3ad682-a00d-11ed-a8fc-0242ac120002",
            "fullName": "Michael Steven"
          },
          {
            "id": "2a3ad682-a00d-11ed-a8fc-0242ac120003",
            "fullName": "Mary Eugenia"
          }
        ]
      }
      """