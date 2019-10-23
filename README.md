# Restaurant App

BoilerPlate Used React Native [https://github.com/kaushiknishchay/React-Native-Boilerplate](https://github.com/kaushiknishchay/React-Native-Boilerplate)

BoilerPlate Used React.JS [https://github.com/Codebrahma/Codebrahma-React-Boilerplate](https://github.com/Codebrahma/Codebrahma-React-Boilerplate)



### 安装

- run `npm install` or `yarn install`

### 运行

- run `yarn android` or `yarn ios` to run on device or emulator

### 运行web

- run `yarn start:web`

### 工程结构

```
    /android                - React native android source code
    
    /app                    - React native specific code
        /base_components    - reusable react native components
        /components         - react native components
        /screens            - connected to store components
        /App.js             - App Root component
        /router.js          - route config
        
    /assets                 - contains image and fonts
    /ios                    - React native ios source code
    
    /src
        /actions            - all redux actions
        /constants          - colors and Assets
        /reducers           - all reducers
        /sagas              - all redux sagas  
        /service            - API methods
        /store              - store config
        /utils              - some utility functions

    /web                    - react js web specific code
        /screens            - connected to store components
        /components         - react components
        /base_components    - reusable react components
        /App.js             - App Root component
        /routes.js          - route config
    /webpack                - webpack config
    
```

#### 截图 - Native App

<img src="screenshots/debug.png" data-canonical-src="screenshots/debug.png" width="250" />
<img src="screenshots/11.png" data-canonical-src="screenshots/11.png" width="250" />
<img src="screenshots/12.png" data-canonical-src="screenshots/12.png" width="250" />
<img src="screenshots/13.png" data-canonical-src="./screenshots/13.png" width="250" />
<img src="screenshots/npm.png" data-canonical-src="./screenshots/npm.png" width="250" />

### 开发

- forward:  PC->Phone 作为Client客户端,可以任意访问Phone上的 Server 服务器  reverse:反向代理  Phone->PC     8081端口的服务就是React Native项目的一个本地服务器, 用于提供JSBundle包和一些静态资源

  ```
   adb forward tcp:8888 tcp:8888
   adb reverse tcp:8097 tcp:8097  
   adb reverse tcp:8081 tcp:8081
  ```

- ​    调试工具

   配置:”scripts”: {“react-devtools”:” react-devtools”}

  ```
  npm install -g react-devtools     
  
  npm install -g   react-native
  
  npm  run react-devtools
  ```

-   android avd  命令无效，可以重启使得环境变量彻底生效

  ```
  adb devices
  ```

- bundle 

  ```
  React-native bundle --platform Android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
  ```

  

- 打开模拟器

  ```
   D: 
    cd D:\sdk\tools\          
    emulator.exe -netdelay  none  -netspeed full -avd api23  -partition-size 2048   
    emulator.exe -netdelay  none  -netspeed full -avd API2301   
  ```

    打开模拟机dev   

  ```
    C:\Users\liuniuyou\.android\avd\API2301.avd  
  
     adb shell input keyevent 82  
  ```

  模拟器上想要访问PC本地的localhost的话，要用10.0.2.2,


z有一些可能是10.0.0.2,模拟器会映射到PC本地的localhost  

- native-base 库定制界面

   生成ui界面

  ```
  node node_modules/native-base/ejectTheme.js
  import CustomVariables from './native-base-theme/variables'  
  import getTheme from  './native-base-theme/components'  
  import { Container, Content, Text, StyleProvider } from 'native-base';  
  <StyleProvider style={getTheme(material)}>     
  <StyleProvider style={getTheme(CustomVariables)}>  
  </StyleProvider>  
  import {StyleSheet, TouchableOpacity, View} from 'react-native'  
  transparent
  ```

- 7. 图标库

     ```
     http://fontawesome.dashgame.com/     
     https://fontawesome.com/icons?d=gallery&c=buildings    
     https://rn.mobile.ant.design/components/icon-cn/          
     ```

- 调试分支  git调试

  新建远程零时分支 git checkout -b tmp    
  把新建的本地分支push到远程服务器，远程分支与本地分支同名（当然可以随意起名）：   
  git push origin tmp:tmp    
  合并分支  git merge   
  删除指定的远程分支  git push origin --delete tmp  
  删除指定的本地分支  git branch -d  tmp

- npm 设置

  ```
  npm get registry
  https://registry.npmjs.org/
  
  yarn config set registry  https://registry.npmjs.org/
  npm config set registry http://registry.npmjs.org/
  npm config set registry http://registry.npm.taobao.org/
  ```

- npm 语法

  ```
  cnpm install node-sass -g
  npm install -g node-gyp
  查看所有版本  
  
  npm view(info) npm versions
  npm info expo@30.0.0
  npm info  npm 
  npm  ls  expo -g
  ```

  ```
  npm --version   6.5.0    
  node --version  v10.16.2
  
  npm install --save-dev webpack-cli@3.3.6 &&
  npm install --save-dev jest@24.8.0 && 
  npm install --save-dev css-loader@3.2.0 && 
  npm install --save-dev optimize-css-assets-webpack-plugin@5.0.3 && 
  npm install --save-dev webpack-bundle-analyzer@3.4.1 &&
  
  npm install react-native@0.60.4
  
  <Scene
      key="welcomeScreen"
      component={WelcomeScreen}
  />
  
  <Scene
          key="Reward"
          component={RewardScreen}
          title="Reward"
          icon={RewardIcon}
  />
  ```

- 线上 

  ```
  http://47.74.240.50:8080/   
   
   
  ```


- 备注 

  ```
  更好的版本请切换到 rn0.60 上版本 分支 rn0.60Stable  
   
   
  ```
     









