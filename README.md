
# React_disney_plus_app
 
------------

# Site Link
https://react-disney-plus-app-4bcc7.web.app/

------------

# Study
> 패스트 캠퍼스 : 프론트엔드 웹 개발의 모든 것 초격차 패키지 Online.
>
> [Course 2] Part 2. React로 실제 서비스 만들기
> 
> Disney Plus 앱 만들기
>


--------------

# Firebase 란? 

1. 모바일 서버를 개발하기 위해서는 인증, 데이터베이스, 푸시 알람, 스토리지, API 등 모든것을 개발해야 했습니다. 하지만 모바일 서버는 이런 모든 것을 구성하는데 구성하는 범위가 매번 새로운 앱들과 차이 나지 않기 때문에 리눅스를 설치하고, FTP를 설치하고, 데이터베이스를 설치하고, 노드 서버나 스프링 서버를 올리고, 방화벽을 올리고, 도메인을 구입하는 등 이런 반복적인 작업을 앱 개발 할 대마다 하는 것은 엄청난 시간낭비입니다.

2. FireBase는 이 모든 플렛폼을 프로젝트 구축 시 자동적으로 만들어 줍니다. 또한 서버를 구축하기 위해서 리눅스 명령어를 알 필요도 없으며 도메인을 구입할 필요도 없고 개발하는 동안에는 서버를 구입할 필요도 없습니다. 

3. FireBase라는 플랫폼으로 프론트엔드 개발자와 백엔드 개발의 경계가 모호해 질 것이며 적은 비용으로 매우 좋은 앱을 만들 수 있을것이라 기대됩니다.
 
#### FireBase의 대표적인 기능
인증, 데이터베이스, 스토리지, 원격 구성, 푸시 알람이 있다

 
#### FireBase의 장점
1) 인증 시스템을 지원
2) FireBase는 NoSQl 기반의 3세대 데이터베이스
3) 원격 구성을 지원
4) 콘솔을 제공
5) Analytics를 제공

 
#### FireBase의 단점
1) Firebase를 많이 사용한 유저들이 하는 말은 서버의 응답속도가 종종 느려짐
2) Firebase의 데이터베이스인 FireStore(신버전 데이터베이스)나 RealTimeDatabase(구버전 데이터베이스) 모두 쿼리가 굉장히 빈약

#### React-redux 
-간단하고 확장가능한 상태관리, 쉽고 확장성 있게 만들어주는 검증된 상태관리 라이브러리

#### React-persist 
-데이터를 유지할 때 사용된다. 


------------

## React Client
```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
}
````

#### Client module
```
  "dependencies": { 
    "@reduxjs/toolkit": "^2.0.1",
    "axios": "^1.6.2",
    "firebase": "^10.7.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^9.0.4",
    "react-router-dom": "^6.20.1",
    "react-router-dom": "^6.20.1",  
    "styled-components": "^6.1.1",
    "swiper": "^11.0.5",
    "redux-persist": "^6.0.0",
  },
``` 

## Firebase Start
```
1. npm i -g firebase-tools
2. firebase login 
3. npm run build  
4. firebase init
```

![image](https://github.com/mihye0924/react_disney_plus_app/assets/71968785/d75fb255-1d67-426f-ab31-e5137e87d605)

![image](https://github.com/mihye0924/react_disney_plus_app/assets/71968785/7eb9fdc8-e445-44b6-accc-abe0ab3d6b21)

![image](https://github.com/mihye0924/react_disney_plus_app/assets/71968785/b5da970b-b412-48bc-94e2-fa32b90982cf)

## Firebase reDeploy
```
npm run build
firebase deploy
``` 

 
#stack   

<img style="display:inline-block;" alt="Static Badge" src="https://img.shields.io/badge/React-61DAFB?logo=React&logoColor=white"> <img style="display:inline-block;" alt="Static Badge" src="https://img.shields.io/badge/React%20Router-CA4245?logo=React%20Router&logoColor=white"> <img style="display:inline-block;" alt="Static Badge" src="https://img.shields.io/badge/Redux-764ABC?logo=Redux&logoColor=white"> 


<img style="display:inline-block;" alt="Static Badge" src="https://img.shields.io/badge/AXIOS-764ABC?logoColor=white"> <img style="display:inline-block;" alt="Static Badge" src="https://img.shields.io/badge/Styled%20Components-DB7093?logo=Styled%20Components&logoColor=white">

<img style="display:inline-block;" alt="Static Badge" src="https://img.shields.io/badge/FireBase-FFCA28?logo=FireBase&logoColor=white"> 
  



