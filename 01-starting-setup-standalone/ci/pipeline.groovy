pipeline {
    agent any
    parameters {
        string(
            name: 'IMAGE_TAG',
            defaultValue: 'latest',
            description: 'Docker image tag'
        )
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