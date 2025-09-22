# 🚀 NodeJS Demo Application

A simple **Node.js demo application** containerized with Docker and integrated with Jenkins for CI/CD automation.  
This project demonstrates how to set up a Node.js app, build Docker images, and deploy via Jenkins pipelines.

---

## 📂 Project Structure

```bash
nodejs-demo-app/
├── Dockerfile       # Docker instructions for containerizing the app
├── Jenkinsfile      # CI/CD pipeline for Jenkins
├── package.json     # Node.js dependencies & scripts
├── server.js        # Main server file
└── README.md        # Project documentation
✨ Features
Lightweight Node.js web server

Dockerized for consistent deployments

Jenkins pipeline for CI/CD

Easily extensible for real-world projects

🛠️ Prerequisites
Make sure you have the following installed before using this project:

Node.js (≥ 14.x recommended)

npm (comes with Node.js)

Docker (for containerization)

Jenkins (for CI/CD)

⚡ Local Development
Clone the repository and install dependencies:

bash
Copy code
git clone https://github.com/RupeshSaxena0209/nodejs-demo-app.git
cd nodejs-demo-app
npm install
Run the server:

bash
Copy code
node server.js
Now visit: 👉 http://localhost:3000

🐳 Running with Docker
Build the Docker image:

bash
Copy code
docker build -t nodejs-demo-app .
Run the container:

bash
Copy code
docker run -d -p 3000:3000 --name nodejs-container nodejs-demo-app
Check logs:

bash
Copy code
docker logs -f nodejs-container
Stop & remove the container:

bash
Copy code
docker stop nodejs-container
docker rm nodejs-container
🔄 CI/CD with Jenkins
This project includes a Jenkinsfile that automates:

Checkout code from GitHub

Install dependencies & run tests

Build Docker image

Push image to DockerHub

Deploy container

Sample Jenkins Pipeline Commands
Clone repo in pipeline:

groovy
Copy code
git branch: 'main', url: 'https://github.com/RupeshSaxena0209/nodejs-demo-app.git'
Build Docker image:

groovy
Copy code
sh 'docker build -t $IMAGE_NAME .'
Run Docker container:

groovy
Copy code
sh 'docker run -d -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME'
Push image to DockerHub:

groovy
Copy code
withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
    sh "echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin"
    sh "docker push $IMAGE_NAME"
}
⚙️ Environment Variables
Variable	Description	Default
PORT	Port for the Node.js server	3000

