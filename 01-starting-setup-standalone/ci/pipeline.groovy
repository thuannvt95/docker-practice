pipeline {
    agent any

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