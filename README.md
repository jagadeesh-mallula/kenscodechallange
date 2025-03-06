kens-code-challenge
A webhook implementation project using TypeScript and Express.js.
Project Overview
This project is a simple webhook implementation built using TypeScript, Express.js, and Node.js. It provides an endpoint to receive webhook events and process them accordingly.
Features
Webhook endpoint to receive and process events
Secure and scalable architecture
Uses Express.js for server handling
Environment variable management with dotenv
Configurable via tsconfig.json
Easily testable with Postman
Setup & Installation
1. Clone the Repository
git clone https://github.com/jagadeesh-mallula/kenscodechallenge.git
cd kenscodechallenge

2. Install Dependencies
npm install

3. Configure Environment Variables
Create a .env file in the root directory and add the following:
PORT=5000

4. Run the Server
For development mode:
npm run dev

For production:
npm start
Testing the Webhook
Start the server and ensure it is running.


Use Postman to test:


Method: POST


URL: http://localhost:5000/webhook


Headers: Content-Type: application/json


Body (Example JSON):

 {
  "event": "order_created",
  "data": {
    "order_id": "12345",
    "customer": "John Doe"
  }
}


Check the response. The server should acknowledge the webhook request.




Contributing
If you’d like to contribute:
Fork the repository
Create a feature branch:
 git checkout -b feature-name


Commit changes:
 git commit -m "Added a new feature"


Push to GitHub:
 git push origin feature-name


Create a Pull Request
License
This project is licensed under the ISC License.
Contact
For any queries, reach out to:
Email: mjagadeesh3692000@gmail.com
 GitHub: jagadeesh-mallula
This README provides all necessary details for running and understanding the project. Let me know if you need any modifications!
