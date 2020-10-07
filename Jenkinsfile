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
                bash (script: 'docker images -a')
                bash (script: """
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
                bash (script: 'docker-compose up -d')
                echo "running test on http connection"
                bash ("./Tests/test_http_ok.sh")
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
                bash(script: 'docker-compose down --volumes')
            }
        }
    }
}