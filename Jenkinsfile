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
                sh(script: 'docker system prune -a')
                sh (script: """
                    docker images -a
                    docker build -t spotmummify .
                    cd ..
                """)
            }
        }
        stage ('Start Test App') {
            steps {
                //add code
                echo "running docker-compose..."
                sh (script: 'docker-compose up')
                echo "running test on http connection"
                sh ("./Tests/test_http_ok.sh")
            }
            post {
                success {
                    echo "App started successfully :)"
                }
                failure {
                    sh(script: 'docker-compose down --volumes')
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