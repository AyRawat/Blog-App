# Blog-App
A Realtime Blog application, using React, Socket.io, Mongo, Express and Node.js 

# Steps 
1. Open a terminal and paste the following command
```
git clone https://github.com/AyRawat/Blog-App.git
```
2. In the same terminal , go inside the folder and install all dependencies
```
cd Blog-App
npm i
```
3. Running the client
 ```
cd client
npm run dev
   ```
4. Running the server.
  - Go inside the api folder
    ```
    cd api
    ```
  - Create a .env file with the following keys. (Remember I am using mongodb Atlas here, so get your key from Mongo DB Atlas.
    ```
     MONGO_URL=<GET YOUR MONGO DB ATLAS URL>
     PORT=9000
     JWT_SECRET=<ANY SECRET THAT YOU WANT>
     FRONTEND_URL=http://localhost:5174
    ```
  - After creating the .env Open a terminal
    ```
    npm run dev
    ```

