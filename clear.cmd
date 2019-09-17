rm -rf ~/.rncache
rm package-lock.json

cd android
./gradlew clean

adb shell input keyevent 82 

