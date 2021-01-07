# How to play React-Native (IOS) with vscode

## Pre-requirement
1. Cocoaspod
2. XCode (Latest version)
3. Vscode react native plugin: "React Native Tools"

## To install dependency
```
$npm install
$cd ios
$pod install
$cd ..
```

## To debug App
1. start packager
```
$ npm start 
```
2. open xcode project
```
$ open ./ios/{Your project}.xcworkspace
```
3. Run app on device or simulator
4. Open project in vscode
5. Add launch.json in Debug tab with React Native -> Attach to packager
6. Run Attach to packager
7. Press Control + Command + Z in simulator or shake you phone if real device
8. Tab "Debug"
