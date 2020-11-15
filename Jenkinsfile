pipeline {
    agent any
    stages {
        stage ('Verify Branch'){
            steps{
                echo 'Pulling... ' + env.GIT_BRANCH
            }
        }
        stage ('Docker Clean Up') {
            steps{ 
                sh(script: 'docker system prune -af --volumes')
                sh (script: """
                    docker images -a
                    cd ..
                """)
            }
        }
        stage ('Docker Build'){
            echo "Running docker-compose build..."
            sh (script: 'docker-compose build')

        }
        stage ('Start Test App') {
            steps {
                //add code
                echo "Running docker-compose up..."
                sh (script: 'docker-compose up')
                echo "Running test on http connection"
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