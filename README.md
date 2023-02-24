# Sastro PVR

Sastro PVR is a web application that provides an Electronic Program Guide (EPG) for TV shows and allows users to record shows and save the recordings to their Android TV's downloads directory.

## Installation

To install Sastro PVR, you will need to have Node.js and NPM installed on your computer. You can then clone the repository and install the dependencies:

git clone https://github.com/your-username/sastro-pvr.git
cd sastro-pvr
npm install

You will also need to set up a backend API for fetching data about TV shows and channels. You can use an existing API or create your own.

Once you have installed the dependencies and set up your API, you can start the development server:

npm start

This will launch the app in your default web browser.

## Usage

When you launch Sastro PVR, you will see the EPG in landscape orientation. You can then select a TV show from the EPG to view its description and images. To record a TV show, simply click the record button. The app will launch the Tivimate app in the background, navigate to the selected TV show on a specific channel, and start recording the Tivimate app's screen and sound. The recording process will not interrupt other ongoing activities on the Android TV and will stop automatically when the TV show ends. The recording will be saved to the downloads directory of your Android TV, with a file name based on the TV show's name and the date the recording took place.

## Contributing

If you would like to contribute to Sastro PVR, please fork the repository and create a new branch for your feature or bug fix. Once you have made your changes, submit a pull request and we will review your code.

## License

Sastro PVR is released under the MIT License. See LICENSE for details.

