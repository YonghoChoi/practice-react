# practice-react

리액트 교과서 예제 따라하기

## 개발 환경 구성

### Babel 설치

```
$ npm install --save-dev babel-cli
$ npm install babel-preset-react
```

### package.json 설정

```
{
  "name": "practice-react",
  "version": "1.0.0",
  "scripts": {
    "build": "babel ./jsx -d ./build"
  },
  "babel": {
    "presets": [
      "react"
    ]
  },
  "devDependencies": {
    "babel-cli": "^6.26.0"
  },
  "dependencies": {
    "babel-preset-react": "^6.24.1"
  }
}
```
* scripts > build 설정에 jsx 파일 위치와 빌드 출력 디렉토리 지정
* babel > presets 설정에 react 명시

### JSX 빌드 명령

```
$ npm run build
```
* 위 package.json 설정 기준으로 jsx 디렉토리 하위의 *.jsx 파일들이 컴파일 되어 build 디렉토리로 js 파일이 생성됨

* 7장 부터는 gilbut 깃 저장소에 업로드된 예제 형식을 사용하여 아래와 같이 빌드 실행
```
$ npm run build-프로젝트명

ex) 프로젝트 디렉토리명이 children으로 되어 있는 경우

$ npm run build-children
```