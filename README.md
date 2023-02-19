# DeezerView
A React Native app that allows users to search artists on the Deezer platform 
# React Native app with Express backend API


## Back-end

The backend API is based on NodeJS and [Express](http://expressjs.com/). The source code for the backend resides in the `DeezerView_Back-end`. To run the development server, you have to install the dependencies first. 

- Install dependencies

```
$ cd backend
$ npm i
```

- Start Server

```
$ npm run dev
```

The API is exposed on http://localhost Port 8000 is default. if you want to change the Port, you can do so in the .env file 


## Front-end

You will find the source code for the React Native application in the subdirectory `DeezerView`. 
To setup your development environment you have to install the yarn dependencies.

1. Install dependencies

```
$ cd DeezerView
$ yarn install
```
2. Setup android emulator and localhost 
   change the port of the ANDROID_EMULATOR_PATH in the .env file to the same Port number in the Back-end
```
ANDROID_EMULATOR_PATH=http://10.0.2.2:8000
```

3. run on android  emulator/device

```
$ yarn android
```

4. run on ios  emulator/device

```
$ yarn ios
```

### Development

The app is dependent on the backend API, so you should make sure to start the backend API server first. 


