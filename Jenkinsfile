pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
        IMAGE_NAME = "rupesh329/nodejs-demo-app"
        CONTAINER_NAME = "nodejs-app"
    }
    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/RupeshSaxena0209/nodejs-demo-app.git', branch: "main"
            }
        }
        stage('Install Dependencies & Run Tests') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:latest .'
            }
        }
        stage('Push Image to DockerHub') {
            steps {
                withDockerRegistry([ credentialsId: 'dockerhub-creds', url: '' ]) {
                    sh 'docker push $IMAGE_NAME:latest'
                }
            }
        }
        stage('Deploy on EC2') {
            steps {
                sh '''
                  docker stop $CONTAINER_NAME || true
                  docker rm $CONTAINER_NAME || true
                  docker run -d --name $CONTAINER_NAME -p 3000:3000 $IMAGE_NAME:latest
                '''
            }
        }
    }
    post {
        success {
            echo '✅ Deployment successful!'
        }
        failure {
            echo '❌ Deployment failed. Check logs.'
        }
    }
}
