# login-jwt-back

## API 종류
### 회원가입 API
  1. POST, /register</br>
  2. post의 body에 json타입으로 회원가입 정보 전송</br>
  3. 기능: email이 중복되지 않는지 확인, tbl_user 테이블에 정보 저장</br>
  
### 사용자 조회 API
  1. GET, /user</br>
  2. header에 x-access-token 키 값으로 json web token을 같이 보내기</br>
  3. jwt미들웨어를 이용해서 접근 가능한 지 확인</br>
  4. jwt의 u_id값을 이용해서 데이터 조회하기, 정보전송</br>
  
### 사용자 정보 수정 API
  1. POST, /update</br>
  2. header에 x-access-token 키 값으로 json web token을 같이 보내기</br>
  3. post의 body에 수정할 칼럼, 새로운 데이터를 적어서 보냄 {"수정할 칼럼": "새로운 데이터"}</br>
  4. jwt미들웨어를 이용해서 접근 가능한 지 확인</br>
  5. req.body값을 바탕으로 정보 수정</br>
  
### 관리자 회원정보 조회 API
  1. GET, /admin/?page=N&limit=N   (페이징을 위해서 쿼리스트링에 page, limit값 포함)</br>
  2. header에 x-access-token 키 값으로 json web token을 같이 보내기</br>
  3. admin일 경우 jwt에 role: admin 정보도 포함</br>
  4. jwt미들웨어를 이용해서 admin인지 확인</br>
  5. limit, offset을 계산해서 json타입으로 정보 전송</br>
 
### 관리자 회원정보 조회의 검색필터
  1. 회원정보는 u_id, u_email, u_nm, u_pwd, u_mobile_no, reg_dt, mod_dt, last_login_dt가 있다</br>
  2. 조회할 데이터를 쿼리스트링의 filter값으로 넣어준다</br>
  3. 예) u_email과 u_nm만 조회할 경우: /admin/?page=1&limit=5&filter=u_email&filter=u_nm</br>
  4. *filter값이 없으면 모든 정보를 조회한다*</br>
  
### 사용한 npm모듈
  1. body-parser, express, sequelize, mysql2</br>
  2. jsonwebtoken: json web token 기능 이용
