pipeline {
    agent any
    stages {
        stage ('Verify Branch'){
            steps {
                echo 'Pulling... ' + env.GIT_BRANCH
            }
        }
        stage ('Docker Clean Up') {
            steps { 
                sh(script: 'docker system prune -af --volumes')
                sh (script: """
                    docker images -a
                    cd ..
                """)
            }
        }
        stage ('Docker Build'){
            steps{
                echo "Building docker image"
                sh (script: 'docker build . -t spotmummify:latest')
            }

        }
        stage ('Start Test App') {
            steps {
                //add code
                echo "Running spotmummify docker image on localhost:5000."
                CONTAINER_ID = sh (
                    script: 'docker run --rm --detach --publish 5000:5000 spotmummify:latest',
                    returnStatus: true).trim()
                echo "Running test on http connection"
                sh ("./Tests/test_http_ok.sh")
            }
            post {
                success {
                    echo "App started successfully :)"
                }
                failure {
                    sh(script: 'docker stop ${CONTAINER_ID}')
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
                sh(script: 'docker stop ${CONTAINER_ID')
            }
        }
    }
}