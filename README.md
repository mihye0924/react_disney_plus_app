
# React_disney_plus_app

![img1 daumcdn](https://github.com/mihye0924/react_context_app/assets/71968785/2570e3a5-ee43-42fb-86b8-da357be02d14) 

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

#### react-redux 
-간단하고 확장가능한 상태관리, 쉽고 확장성 있게 만들어주는 검증된 상태관리 라이브러리

#### react-persist 
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

------------
 
## React Stacks

#### Environment    
<img src="https://github.com/mihye0924/react_context_app/assets/71968785/6e825b86-c259-48c2-a272-4286e74d9798" width="30">
<img src="https://github.com/mihye0924/react_context_app/assets/71968785/557f00bf-2f5f-4bc9-9d63-10565250d6f9" width="30">
<img src="https://github.com/mihye0924/react_context_app/assets/71968785/64f67e8b-759f-4063-a3bc-29dc3918e44b" width="30"> 

#### Config
<img src="https://github.com/mihye0924/react_context_app/assets/71968785/64725c2b-af8d-4891-9ef1-f1068d1fd019" width="30">

#### Development
<img src="https://github.com/mihye0924/react_context_app/assets/71968785/d9784930-b259-4f5f-a941-568068f1d73d" width="30"> 
<img src="https://github.com/mihye0924/react_context_app/assets/71968785/4e1c1159-2dc7-421f-b247-f2d23a86c52f" width="30">
<img src="https://github.com/mihye0924/react_disney_plus_app/assets/71968785/a381898a-ae03-4f31-bb06-aa7966222f2f" width="30">

#### Deploy
<img src="https://github.com/mihye0924/react_disney_plus_app/assets/71968785/84f91610-17df-4716-97b7-75135d2f8d10" width="30"> 

#### State
<img src="https://github.com/mihye0924/react_disney_plus_app/assets/71968785/abedd57b-c426-40a4-8d82-05dd8a9b3e58" width="30"> 

