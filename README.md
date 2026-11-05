# 나유성 | Backend Developer

Java와 Spring Boot로 서비스에 필요한 데이터를 설계하고 API를 개발합니다. 서울 정비구역의 사업 이력, 사료의 회피 성분, 식재료의 소비기한을 다룬 세 프로젝트입니다.

## 대표 프로젝트

### [서울 정비구역 지도](https://github.com/yusung0520/real-estate-redevelopment-platform)

**개인 프로젝트** — 정비사업 정보 수집과 구역 매칭, 조회 API, React 지도 연동을 담당했습니다. 비슷한 사업명이 여러 구역에 대응하면 자동 연결을 보류합니다. 지도에서 구역을 선택하면 사업장 정보와 단계별 이력을 하나의 상세 응답으로 읽고, 14단계 타임라인에 현재 단계와 확인된 날짜를 표시합니다.

[구현 과정과 조회 API](https://github.com/yusung0520/real-estate-redevelopment-platform#주요-api)

### [PetCheck](https://github.com/PetCheckTeam/PetCheck-BackEnd)

**팀 프로젝트** — 사료 라벨의 OCR 결과를 RAG 서비스에 전달하고, 반려동물별 회피 성분과 검색 결과를 비교하는 백엔드를 구현했습니다. 분석 결과를 구조화된 응답으로 제공해 프론트에서 일치한 성분 수와 성분별 판정을 직접 읽을 수 있게 했습니다.

[분석 API와 응답 구조](projects/petcheck.md) / [RAG 저장소](https://github.com/PetCheckTeam/Petcheck-RAG)

### [냉장고를 부탁해](https://github.com/amInspireCamp6th-miniProject/server/tree/develop)

**LG CNS AM Inspire Camp 6인 팀 프로젝트, 팀장** — 소비기한 관리와 레시피 백엔드를 담당했습니다. 같은 식재료라도 구매분에 따라 소비기한이 다를 수 있어, 프론트엔드와 추천 요청에 선택한 식재료 ID를 담기로 했습니다. 소비기한이 0~5일 남으면 임박으로 분류하며, 날짜를 고정한 테스트로 경계 조건을 검증합니다.

[소비기한 정책 테스트](https://github.com/amInspireCamp6th-miniProject/server/blob/develop/src/test/java/com/example/server/ingredient/domain/ExpirationPolicyTest.java) / [추천 요청 검증](https://github.com/amInspireCamp6th-miniProject/server/blob/develop/src/test/java/com/example/server/recipe/dto/RecipeRecommendationRequestTest.java)

[웹 포트폴리오 소스와 시연 자료 추가 방법](docs/README.md)

## 👨‍💻 About Me

| 구분 | 내용 |
| :--- | :--- |
| **소속** | 순천향대학교 의료IT공학과 4학년 |
| **연구 활동** | CC Lab 학부연구생 (2025.06 ~ 현재) |
| **관심 분야** | Backend, REST API, 데이터베이스 설계, 데이터 처리 |
| **교육** | LG CNS AM Inspire Camp, NAVER Cloud Academy 소버린 AI Literacy |

## 🛠 Tech Stack

**Backend**

![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)

**Database**

![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=flat-square&logo=mariadb&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![pgvector](https://img.shields.io/badge/pgvector-4169E1?style=flat-square&logo=postgresql&logoColor=white)

**Frontend**

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=flat-square&logo=javascript&logoColor=F7DF1E)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=flat-square&logo=streamlit&logoColor=white)

**Tools & AI**

![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black)

RAG, CLOVA OCR, HyperCLOVA X, OpenAI API, Spring Data JPA

## 📚 Research & Other Projects

**CC Lab 학부연구생 (2025.06 ~ 현재)**

| 프로젝트 및 연구 | 주요 내용 |
| :--- | :--- |
| **블루투스 기반 실시간 거리 감지 및 경고 시스템** | Android, Arduino 연동과 RSSI 기반 거리 이탈 감지, 백그라운드 알림 기능 |
| **부동산 정보 통합 플랫폼 연구** | 공공데이터 수집, 공간 데이터 가공과 지도 시각화, 중개인 정보 연계 |
| **ResNet50 기반 피부질환 이미지 분류** | 전이학습 기반 3개 클래스 분류, Streamlit 웹 분석 시스템. 연구 데이터셋의 독립 테스트 정확도 **97.35%** |
| **AI 기반 개인화 도서 추천** | 사용자 입력 UI, 추천 API 연동 및 결과 화면 구현 |
| **HopeGrip 비대면 재활 서비스** | React 기반 재활 측정 데이터 시각화 및 환자, 의료진 화면 구성 |

> 피부질환 분류 정확도는 연구 데이터셋의 모델 평가 결과이며 의료적 진단 정확도를 의미하지 않습니다.

## 🎓 Education & Leadership

- **LG CNS AM Inspire Camp:** Java, Spring Boot, React, SQL 및 팀 프로젝트 중심의 웹 서비스 개발
- **NAVER Cloud Academy 소버린 AI Literacy:** NCP 인프라, REST API, Vector DB, AI API 및 RAG 실습
- **의료IT공학과 부학회장:** '마음의 소통함' 사업 직접 기획 및 실행, 학생 의견 수렴과 학생회 소통부 협력

---

<div align="center">

**서비스의 데이터 흐름을 이해하고 안정적인 API를 구현하는 개발자로 성장하고 있습니다.**

</div>
