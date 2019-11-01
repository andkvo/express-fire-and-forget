# Objective
This is a test to make sure that "fire-and-forget" HTTP requests by a primary ("subject") server to a secondary ("monitor") server are actually processed and completed by the secondary server despite the first server failing to wait for the response.

# Results

1572614593400 [Subject]: Listening.

1572614593402 [Monitor]: Listening.

1572614593402 [Application]: Beginning first request to subject...

1572614593414 [Subject]: Beginning sync request (synchronous communication with monitor server)...

1572614603420 [Monitor]: Task Complete: await

syncRequestTook: 10013.101ms

1572614603430 [Application]: First request to subject complete.

1572614603430 [Application]: Beginning second request to subject...

1572614603432 [Subject]: Beginning fire-and-forget request (asynchronous communication with monitor server)...

fireAndForgetRequestTook: 0.046ms

1572614603433 [Application]: Second request to subject complete.

1572614613434 [Monitor]: Task Complete: fire-and-forget
