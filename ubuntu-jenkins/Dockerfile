FROM ubuntu:22.04

ENV JENKINS_HOME=/var/jenkins_home
# ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64

# Install necessary packages
RUN apt-get update && \
    apt-get install -y fontconfig gnupg2 openjdk-17-jre wget && \
    apt-get clean

# Add the Jenkins repository and key
RUN wget -O /usr/share/keyrings/jenkins-keyring.asc https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key && \
    echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc]" https://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list && \
    apt-get update && \
    apt-get install -y jenkins && \
    apt-get clean

# Create the Jenkins home directory
RUN mkdir -p "$JENKINS_HOME" && chown -R jenkins:jenkins "$JENKINS_HOME"

# Set the user to jenkins
USER jenkins

# Expose the Jenkins port
EXPOSE 8080

# Start Jenkins
CMD ["java", "-jar", "/usr/share/java/jenkins.war", "--httpPort=8080"]