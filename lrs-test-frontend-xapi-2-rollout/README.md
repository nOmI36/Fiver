### Installation 

1. Clone this repo

   ```
      git clone https://github.com/adlnet/lrs-test-frontend
      cd lrs-test-frontend
   ```
   
2. Clone the test runner project
   ```
      git clone https://github.com/adlnet/lrs-conformance-test-suite.git
   ```
3. Install the modules for the front end 
   
  ``` 
      npm install
  ```   
4. Install the modules for the runner 
  
   ```
     cd lrs-test-conformance-suite
     npm install 
     cd ..
   ```   
5. [Install MongoDB](https://docs.mongodb.com/v3.2/installation/)
6. Create a `config.js` file from the `config.sample.js` file. Note the host value; this will overwrite the OAuth callback value if given so make sure you set it to your correct host (domain).
6. Start the server 

  ```
     node app.js
  ```
