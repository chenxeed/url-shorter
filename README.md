# URL Shorter Showcase Application

A simple web application to generate short URL, and simulate it in the fake browser (using iframe)

# How To Run

This application is using Docker to spawn the environment necessary, such as nodeJS and mongoDB. Please ensure you have Docker installed in your local environment.

1. Run `npm install`
2. Run `docker-compose up -d` to spawn the docker images
3. Run `docker-compose exec app bash` to enter the console of the application image
4. Run `npm run dev` to run the nodeJS server & the JS bundler by rollup
5. Go to your browser and run `localhost` to run the application

Here's the demo for your quick reference:

![peek demo](https://user-images.githubusercontent.com/3530355/71922077-340ff200-31c5-11ea-81c0-77abb80610ea.gif)
