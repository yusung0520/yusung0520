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

`Na_Yusung_Fullstack_Portfolio.pdf`는 11쪽 제출용 문서이며 실제 화면, 영상 링크와 최신 실행 검증 결과를 포함합니다.

## 다른 프로젝트의 시연 이미지 또는 영상 추가

1. `media/`에 실제 이미지나 영상 파일을 추가합니다.
2. `media.js`의 `projectMedia`에서 해당 프로젝트의 `null`을 파일 정보로 바꿉니다.

```js
sporty: { src: 'media/sporty.mp4', alt: '매칭 요청의 서비스 간 추적' },
```

`sporty`, `petcheck`, `fridge`는 각각 해당 상세 페이지에 표시됩니다. MP4와 WebM은 영상 플레이어, PNG·JPG·WebP 등은 이미지로 표시합니다. `null`이면 시연 자리만 표시합니다. 서울 정비구역 지도는 영상과 캡처를 HTML에 직접 배치합니다.
