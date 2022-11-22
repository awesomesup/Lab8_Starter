# Lab 8 - Starter
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

 - Within a Github action that runs whenever code is pushed. This is because we want the test to be automated, and every change that might possibly break the code should be automatically tested so ensure code integrity of old code and a systematic way to fix bugs as every change is tested and fixed.


2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

- No, E2E does is not meant to test functions, but rather the entire program, end to end. 

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

- No. "message" is a feature consisting of multiple functions. These functions can be/ and should be tested seperately. Sunch functions will inlude the function to send text, function to send images, and perhaps function to check if the receiver has received and even seen the message. However, if the message feature only had the send function, it would be possible to use unit test to test it. 


4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

- yes, as max message length is a single and fixed variable to test on. 
