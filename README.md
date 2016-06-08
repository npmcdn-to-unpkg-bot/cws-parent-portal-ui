# CWS Parent Portal User Interface

The CWS Parent Portal User Interface provides web-based user interface for the CWS Parent Portal.

## Configuration

The CWS Parent Portal UI requires the following environment variables:

- baseurl -- the location where the UI code, running in a browser, can contact the CWS Parent Portal API

Environment variables must be specified in the env.js file. During development, this file is located the the src
directory. At runtime, this file is located at /usr/local/share/cws-parent-portal-ui/env.js. The env.js file is
designed to be mapped as a volume during Docker deployment.

## Installation

### Prerequisites

1. CWS Parent Portal API

### Using Docker

The CWS Parent Portal UI is available as a Docker container from the following registry:

    297353277856.dkr.ecr.us-west-2.amazonaws.com/parent-portal-ui

Run the application with Docker using a command like this:

    % docker run -p 8080:8080 -v ./log:/var/log/cws-parent-portal-ui -v ./ui/env.js:/usr/local/share/cws-parent-portal-ui/env.js parent_portal_ui_image

Containers are tagged with the short Git commit hash from the GitHub repository.

## Development Environment

### Prerequisites

1. Source code, available at GitHub
1. Node.js v6.2.0
1. gulp.js 3.9.1
1. Protractor 3.3.0
1. Docker 1.10
1. Java SE 8 runtime environment

### Building

Use the gulp command to execute the build task:

    % gulp build

The distribution will be placed in the dist directory.

### Development Server

Use the gulp command to execute the serve task:

    % gulp serve

This will run the server on your local machine, port 3000.

### Testing

Download a Selenium distribution:

    % webdriver-manager update

Start a Selenium server:

    % webdriver-manager start

Execute the tests:

    % protractor test/e2e/protractor.conf.js

### Building Docker Container

The continuous delivery server builds images for the container registry but developers can build local containers with
the following command:

    % docker build -t parent_portal_ui .

This results in a local docker image in a repository called parent_portal_ui with the tag latest.