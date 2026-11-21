# 나유성 풀스택 개발 포트폴리오

홈과 프로젝트 상세 4페이지는 정적 HTML, CSS, JavaScript로 구성됩니다. 이 폴더를 로컬 정적 서버에서 열거나 GitHub Pages의 게시 소스로 사용할 수 있습니다.

## 실제 시연 자료

서울 정비구역 지도 상세 페이지에는 약 27초의 실제 브라우저 영상과 캡처 4장을 배치했습니다.

| 파일 | 내용 |
| --- | --- |
| `media/redevelopment-demo.mp4` | 45초 원본에서 시작 대기 18초를 줄인 약 27초 영상. H.264, 1920×848, 30fps |
| `media/redevelopment-search.webp` | 성수 검색 결과와 지도 |
| `media/redevelopment-detail.webp` | 제3구역 상세와 날짜, 타임라인 1~9단계 |
| `media/redevelopment-timeline.webp` | 타임라인 7~14단계 및 빈 브리핑 |
| `media/redevelopment-empty.webp` | 검색 결과 없음 안내와 선택 해제 |

캡처는 원본 PNG와 픽셀이 같은 무손실 WebP이며, 각 이미지를 선택하면 원본 크기로 열립니다. 데이터는 2026-03-19 백업 기준입니다. 영상의 원본 UI와 진행 순서는 유지했습니다.

`Na_Yusung_Fullstack_Portfolio.pdf`는 13쪽 제출용 문서이며 실제 화면, 영상 링크와 최신 실행 검증 결과를 포함합니다.

## Sporty 서비스 소개와 시연

Sporty 상세 페이지는 서비스 소개, 팀 서비스 시연, 개인 담당 작업, 배포 구성, 요청 추적, 팀 장애·복구 시연 순서입니다.

| 파일 | 내용 |
| --- | --- |
| `media/sporty-service-demo.mp4` | 팀 서비스 시연 1분 33초. 원본 영상·음성 유지, 웹 재생용 메타데이터 위치만 조정 |
| `media/sporty-recovery-demo.mp4` | 팀 장애·복구 시연 2분 20초. 원본 영상·음성 유지 |
| `media/sporty-service.webp` | 서비스 시연의 AI 검색 장면 |
| `media/sporty-recovery.webp` | 알림 서비스 복구 시연 장면 |
| `media/sporty-deployment.png` | 팀 발표자료 15쪽의 배포 구성 |
| `media/sporty-zipkin-facility.jpeg` | Gateway → Facility 요청 추적 원본 캡처 |

영상 속 팀 기능과 개인 인프라·배포 기여를 구분했습니다. 단일 Zipkin 요청의 57.312ms를 평균 성능이나 개선율로 표시하지 않습니다. 서비스 소개와 배포 내용은 제출용 PDF에도 포함됩니다.

## 다른 프로젝트의 시연 이미지 또는 영상 추가

PetCheck와 냉장고를 부탁해는 `media.js`의 해당 항목에 실제 파일 경로와 설명을 넣으면 시연 자리에서 표시됩니다. `null`이면 기존 자리를 유지합니다. 서울 정비구역 지도와 Sporty는 영상과 캡처를 HTML에 직접 배치합니다.
