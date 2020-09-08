pipeline {
    agent any
    stages {
        stage ('Verify Branch'){
            steps{
                echo 'Pulling... ' + env.GIT_BRANCH
            }
        }
        stage('Docker Build') {
            sh (script: 'docker images -a')
            sh (script: """
                cd spotify-project/
                docker images -a
                docker build -t spotmummify .
                docker images -a
                cd ..
            """)
        }
    }
}
