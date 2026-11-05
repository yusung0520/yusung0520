<p align="center">
  <img src="assets/profile-header.svg" width="100%" alt="나유성 | Backend Portfolio">
</p>

# 나유성 | Backend Developer

서울 정비구역의 사업 이력을 연결하고, 여러 서버를 거치는 API 요청을 추적합니다. Spring Boot와 관계형 데이터베이스를 사용해 사용자의 질문에 필요한 데이터를 제공하는 일을 합니다.

[웹 포트폴리오 소스](docs/)　/　[시연 자료 추가 방법](docs/README.md)

## Selected work

| 프로젝트 | 내가 맡은 일 | 구현 기록 |
| --- | --- | --- |
| **서울 정비구역 지도**<br>개인 프로젝트 | 중복된 구역명은 자동 연결을 보류하고, 매칭된 사업 이력을 14단계 지도 타임라인으로 제공합니다. | [설계와 API](https://github.com/yusung0520/real-estate-redevelopment-platform#주요-api) |
| **Sporty**<br>팀 프로젝트, 인프라 | 7개 서비스의 Docker 이미지를 경량화했습니다. Gateway 이미지는 150.5MiB에서 111.5MiB로 줄었고, 매치 조회 요청을 세 서비스에 걸쳐 추적했습니다. | [요청 추적 PR](https://github.com/batontouch-sporty/backend/pull/81) / [시간대 검증 PR](https://github.com/batontouch-sporty/backend/pull/89) |
| **PetCheck**<br>팀 프로젝트, 백엔드 | 사료 라벨의 OCR 텍스트와 반려동물별 회피 성분을 비교합니다. 클라이언트가 일치한 수와 개별 판정을 바로 읽도록 분석 응답을 구조화했습니다. | [분석 응답](projects/petcheck.md) / [RAG 저장소](https://github.com/PetCheckTeam/Petcheck-RAG) |
| **냉장고를 부탁해**<br>6인 팀, 팀장 및 백엔드 | 같은 이름의 식재료를 구매분별로 구분하도록 추천 요청에 식재료 ID를 담았습니다. 현재 날짜를 고정해 소비기한 당일과 만료 경계를 테스트했습니다. | [소비기한 테스트](https://github.com/amInspireCamp6th-miniProject/server/blob/develop/src/test/java/com/example/server/ingredient/domain/ExpirationPolicyTest.java) / [입력 검증](https://github.com/amInspireCamp6th-miniProject/server/blob/develop/src/test/java/com/example/server/recipe/dto/RecipeRecommendationRequestTest.java) |

## About

순천향대학교 의료IT공학과 4학년, CC Lab 학부연구생입니다. 연구실에서는 표정 분석 API를 독서 화면에 연동했고, 학과 부학회장으로는 ‘마음의 소통함’을 기획해 학생회 소통부와 건의 사항을 논의했습니다.

| 교육 | 프로젝트에 연결한 경험 |
| --- | --- |
| LG CNS AM Inspire Camp | Java, Spring Boot, SQL을 활용한 기능 개발과 팀 서비스의 배포 검증 |
| NAVER Cloud Academy 소버린 AI Literacy | NCP 환경, AI API 및 RAG 연동 실습 |

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
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![Zipkin](https://img.shields.io/badge/Zipkin-4A4A4A?style=flat-square)

RAG, CLOVA OCR, HyperCLOVA X, OpenAI API, Spring Data JPA

<details>
<summary><strong>연구실 프로젝트</strong></summary>

| 연구 및 프로젝트 | 담당하거나 검증한 내용 |
| --- | --- |
| 블루투스 거리 감지 및 경고 시스템 | Android와 Arduino 연동, RSSI 거리 이탈 감지와 백그라운드 알림 |
| 부동산 정보 통합 플랫폼 연구 | 공공데이터 수집, 공간 데이터 가공 및 지도 시각화 |
| 피부질환 이미지 분류 | ResNet50 전이학습, Streamlit 분석 화면. 연구용 독립 테스트 데이터셋에서 분류 정확도 97.35% |
| AI 기반 개인화 도서 추천 | 사용자 입력 화면, 추천 API 연동 및 결과 표시 |
| HopeGrip 비대면 재활 서비스 | React 기반 재활 측정 데이터 시각화와 환자 및 의료진 화면 |

</details>
