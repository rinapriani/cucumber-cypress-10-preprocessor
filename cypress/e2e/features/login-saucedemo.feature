Feature: Login Feature

    Feature Thiss feature is required for a user to log in.

    Scenario: Succes Login
        Given A user opens the login page
        When A user enter the username "dataUser"
        Then A user enter the password "passUser"
        Then A user clicks on the login button
        Then A user will be logged in
    
    # Scenario: Failed Login
    #     Given A user opens the login page
    #     When A user enter the username "locked_out_user"
    #     Then A user enter the password "secret_sauce"
    #     Then A user clicks on the login button
    #     Then A user will be receiving a failed message