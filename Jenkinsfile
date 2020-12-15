pipeline {
	agent any

	tools {
		nodejs "${NODE_12}"
	}

	stages {
		stage('Preparation') {
			steps {
                echo "Will deploy to ${APP}"
			}
		}

        stage('Build') {
          steps {
			 sh 'npm install'
			 sh 'npm run test-cov'
             sh 'npm install sonarqube-scanner'
          }
       	}
		   
        stage('Sonarqube') {
             steps {
                sh 'npm run sonar-scanner'
            }
        }

		stage('Deploy') {
			steps {
			    withCredentials([[$class          : 'UsernamePasswordMultiBinding',
                													credentialsId   : 'credentials_pivotal',
                													usernameVariable: 'USERNAME',
                													passwordVariable: 'PASSWORD']]) {
                					echo "PIVOTAL_URI ${PIVOTAL_URI}"
                					echo "PIVOTAL_TARGET ${PIVOTAL_TARGET}"
                					sh '/home/jenkins/cf login -a $PIVOTAL_URI -u $USERNAME -p $PASSWORD --skip-ssl-validation'
                					sh '/home/jenkins/cf target -s $PIVOTAL_TARGET'
                					sh '/home/jenkins/cf push'
                				}
			}
		}
	}
}