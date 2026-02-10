pipeline {
    agent any

    stages {
        stage('Run App Pipeline') {
            steps {
                dir('project2') {
                    load '01-starting-setup-standalone/Jenkinsfile'
                }
            }
        }
    }
}git 