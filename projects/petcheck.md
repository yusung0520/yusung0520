# PetCheck 백엔드

반려동물의 회피 성분과 사료 라벨을 비교하는 Spring Boot API입니다. 앱에서 등록한 반려동물과 제품 이미지를 기준으로 분석을 만들고, 사용자가 OCR 내용을 확인한 뒤 성분 검색을 요청합니다.

## 분석 요청의 흐름

1. 앱이 이미지 파일과 분석 정보를 multipart 요청으로 보냅니다. 백엔드는 로그인한 사용자 기준으로 분석을 생성하고 OCR을 시작합니다.
2. 사용자가 추출된 문구를 확인하거나 고친 뒤 분석을 확정합니다. 백엔드는 RAG 서비스의 `/api/v1/rag/search`로 성분 검색을 요청합니다.
3. 검색된 성분을 반려동물의 회피 성분과 대조합니다. 분석 상세 조회는 OCR 텍스트와 분석 결과를 별도의 필드로 반환합니다.

| 요청 | 역할 |
| --- | --- |
| `POST /api/v1/analyses` | `data` 및 `image` 파트로 분석 생성 |
| `PUT /api/v1/analyses/{analysisId}/ocr` | OCR 텍스트 수정 |
| `POST /api/v1/analyses/{analysisId}/confirm` | 수정된 내용을 기준으로 분석 확정 |
| `GET /api/v1/analyses/{analysisId}` | 상태, OCR 결과, 맞춤 분석 결과 조회 |
| `POST /api/v1/analyses/{analysisId}/retry` | 분석 재시도 |

[분석 컨트롤러](https://github.com/PetCheckTeam/PetCheck-BackEnd/blob/main/src/main/java/com/petcheck/server/domain/analysis/controller/AnalysisController.java) / [RAG 호출](https://github.com/PetCheckTeam/PetCheck-BackEnd/blob/main/src/main/java/com/petcheck/server/domain/analysis/client/RagClient.java)

## 결과를 문자열 대신 객체로 전달하는 이유

분석 상세 응답의 `aiAnalysisResult`는 전체 성분 수, 회피 성분과 일치한 수, 일치 목록과 전체 성분별 결과를 갖는 객체입니다. 클라이언트는 JSON 문자열을 다시 해석할 필요 없이 필요한 항목을 읽을 수 있습니다. 성분별 결과는 `MATCHED`, `NOT_MATCHED`, `UNKNOWN`을 구분합니다.

DB에는 결과를 JSON 형태로 보관하고, 상세 조회에서 응답 객체로 복원합니다. 이전 RAG 응답 형태로 저장된 결과도 조회 경로에서 변환합니다. [응답 DTO](https://github.com/PetCheckTeam/PetCheck-BackEnd/blob/main/src/main/java/com/petcheck/server/domain/analysis/dto/PersonalizedAnalysisResult.java) / [분석 서비스](https://github.com/PetCheckTeam/PetCheck-BackEnd/blob/main/src/main/java/com/petcheck/server/domain/analysis/service/AnalysisService.java)

## 코드와 테스트

- [분석 서비스 테스트](https://github.com/PetCheckTeam/PetCheck-BackEnd/blob/main/src/test/java/com/petcheck/server/domain/analysis/service/AnalysisServiceTest.java)
- [RAG 클라이언트 테스트](https://github.com/PetCheckTeam/PetCheck-BackEnd/blob/main/src/test/java/com/petcheck/server/domain/analysis/client/RagClientTest.java)
- Java 17, Spring Boot, Spring Data JPA, PostgreSQL. 테스트는 Gradle wrapper로 실행합니다(`./gradlew test`).

> **시연 자료**　OCR 확인과 성분 비교 결과를 보여 줄 화면을 추가할 자리입니다.
<!-- 실제 시연 자료를 준비하면 위 문단을 이미지 또는 GIF와 설명으로 교체합니다. -->
