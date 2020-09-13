pipeline {
    agent any
    stages {
        stage ('Verify Branch'){
            steps{
                echo 'Pulling... ' + env.GIT_BRANCH
            }
        }
        stage ('Docker Build') {
            steps{ 
                sh (script: 'docker images -a')
                sh (script: """
                    docker images -a
                    docker build -t spotmummify .
                    docker images -a
                    cd ..
                """)
            }
        }
        stage ('Start Test App') {
            steps {
                //add code
                echo "running docker-compose..."
                sh (script: 'docker-compose up -d')
            }
            post {
                success {
                    echo "App started successfully :)"
                }
                failure {
                    echo "App failed to start :("
                }
            }
        }
        stage ('Run Tests') {
            steps {
                //add code
                echo "Running test scripts"
            }
        }
        stage ('Stop Test App') {
            steps {
                echo "Stopping App"
                sh(script: 'docker-compose down --volumes')
            }
        }
    }
}