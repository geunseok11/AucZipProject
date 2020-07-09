# AucZip API docs


| Method   | End Point              | Request                                         | Response                                             | Usage                   |
| -------- | ------------------ | ----------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| Base URL |                    |                                                 |                                                      |  |
| GET      | /                  |                                                 | 메인페이지 정보 응답                                     |  |
| POST     | /user/signup       | body={name, memberId, password, email, phone, address} | * 이미 가입된 회원 있을 때 : status(409), 'memberId already exists'<br/>* 회원가입 완료 시 : status(200), 'signup completed' | 프론트엔드 측에서 회원가입 정보를 받아서 기존 가입자가 아니면 Users 테이블에 그 데이터를 넣음. |
| GET      | /user/signin       | body={memberId, password} | * 비밀번호가 틀릴 때 : status(404), 'unvalid user'<br/>* JWT 토큰 생성 에러 시 : status(500)<br/>* 로그인 시 : cookie('token', token), {id: data.dataValues.id, memberId: data.dataValues.memberId}); | 로그인 성공 시 JWT를 이용해서 쿠키를 클라이언트에 보냄. |
| GET      | /user/signout      |  | 루트 페이지로 리다이렉트 및 토큰 제거 | 로그아웃 시킴 |
| POST     | /user/pwd          | body={originalPwd:password,newPwd:newPwd},<br/>cookies | * 비밀변호  변경 시 : status(200), 'password changed'<br/>* 토큰 없을 시 : status(401), 'need user session' | 해당 유저의 비밀번호 변경 |
| GET      | /user/info         | headers.cookie | * 유저 정보 있을 때 : status(200),<br/>{id:data.dataValues.memberId,<br/>name:data.dataValues.name,<br/>email:data.dataValues.email,<br/>phone:data.dataValues.phone, address:data.dataValues.address,<br/>money:data.dataValues.money,bankName:data.dataValues.bankName,bankNum:data.dataValues.bankNum},<br/>* 토큰 없을 때 : status(401), 'need user session' | 해당 유저의 정보를 응답으로 보냄 |
| POST     | /user/googleSignin | body={memberId, email, name} | * 구글 로그인 아이디가 없을 때 : status(404), 'undefinded memberId'<br/>* 구글 로그인 성공 시 : <br/>status(200), cookie('token', token), {id: data.dataValues.id, memberId: data.dataValues.memberId}<br/>* 토큰 생성 에러 시 : status(500)<br/>* 유저 테이블 데이터 생성 실패 시 : status(404), 'create user error' | 구글 로그인 |
| GET      | /building/news     |  | * 저장된 뉴스 없을 때 : status(404), 'no news'<br/>* 저장된 뉴스 있을 때 : status(200), [{title, day, descriptionUrl, imageUrl, text}] | 크롤링한 뉴스 데이터 전송 |
| GET      | /building/info     |  | * 저장된 빌딩 데이터 없을 때 : status(404), 'no building info'<br/>* 저장된 빌딩 데이터 있을 때 : [{id, b_name, image, b_evaluation, b_invest, b_invest_goal, b_invest_user_num, b_info, b_location, b_use, b_size, b_due, b_views, b_invest_start_date, b_invest_end_date}] | 크롤링한 빌딩 데이터 및 업데이트 된 데이터 전송 |
| POST     | /building/invest   | headers.cookie<br/>body={money, id} | * 로그인이 되어 있지 않을 때 : status(401), 'no login'<br/>* 빌딩 혹은 유저 아이디가 없을 때 : status(401), 'no user data'<br/>* 테이블 정보 변경 에러 시 : status(404), 'err'<br/>* res.status(200).send(resData.dataValues); | 해당 빌딩의 투자 금액 업데이트 |
| GET      | /admin/userList    | headers.cookie | * 회원 정보 없을 때 : status(404), 'no data'<br/>* 'admin' 계정이 아닐 때 : status(401), 'not admin'<br/>* 'admin' 계정 로그인 시 : status(200), [{name, memberId, password, email, phone, address, money, bankName, bankNum}] | 'admin' 계정 접속 시 전체 회원 데이터 전송 |
| GET      | /admin/delUser     | body={memberId} | * 회원가입이 안된 경우 : status(404), 'unvalid user'<br/>* 유저 정보 삭제 시 : status(200), {name, memberId, password, email, phone, address, money, bankName, bankNum}<br/>* 유저 정보 삭제 에러 발생 시 : status(404), 'error' | 회원 정보 삭제 |