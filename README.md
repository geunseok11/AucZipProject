## 개요
- 팀명 : **우아한아재들(Elegance AZ)**
- 팀원 : **조규창(팀장), 이하준, 정근석, 김민재**
- 프로젝트 명 : **옥집(AucZip / Auction Zip)**
- 프로젝트 기간 : **20.06.29 ~ 20.07.08**

## 서비스 설명 
커피 한 잔으로 건물주되자!
AucZip은 소액으로도 건물 투자를 할 수 있도록 한다.<br/>
경매에 올라온 매물을 매입하여 시중 책정된 가격보다 저렴한 금액으로 부담없이 투자할 수 있게 돕는다.

## 스크릿샷

## 주요 기능 안내
https://www.notion.so/creampuff/4652d195e30e4afca28a26dee2270f66?v=378aad52a93849f78f725b4d0d4572c3
1. 회원가입
2. 로그인(구글 로그인 포함)/ 로그아웃
3. 부동산 뉴스 정보 제공
4. 투자할  정보 제공
5. 투자 금액 설정 및 투자
6. Mypage에서 자신의 투자 금액 및 개인정보 확인
7. 비밀번호 변경
8. 'admin' 계정 로그인 시 특정 회원 삭제 및 전체 회원 정보 확인

## 설치 & 사용 방법
### /
1. npm install
### /server/scraping
1. node heraldNews.js
2. node daumAuction.js
### /server
1. export DATABASE_PASSWORD='(mysql 루트 비밀번호)'
2. export SECRET_KEY='(임의의 숫자, 문자)'
3. npx sequelize-cli db:migrate
4. node app.js
### /client
1. npm start

## 기술 스택
### Front-end
- React
- Redux
- Material-UI
### Back-end
- Node.js
- Express.js
- JWT
- MySQL
- Sequelize
- Nightmare

### Etc.
- AWS => EC2 / RDS / S3
- Google Login API

- 기술 스택 : 다음 [레퍼런스](https://velog.io/@loakick/Shield-IO-%EC%82%AC%EC%9A%A9%EB%B2%95-iojyndy4pi)를 참고하여 뱃지로 표현할 수도 있어요.

**이 외에 프로젝트 과정에서의 기획과정, 회고, 진행 현황등 자세한 사항들은 Wiki에 기록하게 됩니다. [여기](https://github.com/codestates/project-test/wiki)를 눌러 이동해 주세요**
