pipeline {
    agent any
    parameters {
        string(
            name: 'IMAGE_TAG',
            defaultValue: 'latest',
            description: 'Docker image tag'
        )
    }

    environment {
        PATH = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
        IMAGE_NAME = "angular-docker-node-multibranch"
        CONTAINER_NAME = "angular-docker-node-multibranch"
        APP_PORT = "80"
        CONTAINER_PORT = "4100"
    }

    stages {
        stage('Run App Pipeline') {
            steps {
                dir('01-starting-setup-standalone') {
                    load 'Jenkinsfile'
                }
            }
        }
    }
}