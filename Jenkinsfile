pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/prabeshbuilds/Portfolio.git'
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
                sh 'docker build -t nextjs-portfolio .'
            }
        }

        stage('Push Image') {
            steps {
                sh '''
                docker tag nextjs-portfolio prabeshdevops/nextjs-portfolio:v1
                docker push prabeshdevops/nextjs-portfolio:v1
                '''
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }
}