pipeline {
    agent any

    environment {
        IMAGE_NAME = " prabeshdevops/nextjs-portfolio"
    }

    stages {

        stage('Clone Repo') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/prabeshbuilds/Portfolio.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh '''
                docker build -t $IMAGE_NAME:$BUILD_NUMBER .
                docker tag $IMAGE_NAME:$BUILD_NUMBER $IMAGE_NAME:latest
                '''
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-credentials',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {

                    sh '''
                    echo $DOCKER_PASS | docker login \
                    -u $DOCKER_USER --password-stdin
                    '''
                }
            }
        }

        stage('Push Image') {
            steps {
                sh '''
                docker push $IMAGE_NAME:$BUILD_NUMBER
                docker push $IMAGE_NAME:latest
                '''
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                export KUBECONFIG=/var/lib/jenkins/.kube/config
                kubectl apply -f k8s/
                kubectl rollout status deployment/nextjs-portfolio
                '''
            }
        }
        stage('Cleanup') {
            steps {
                sh '''
                docker rmi $IMAGE_NAME:$BUILD_NUMBER || true
                docker rmi $IMAGE_NAME:latest || true
                '''
            }
        }
    }
}