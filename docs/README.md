# 나유성 풀스택 개발 포트폴리오

홈과 프로젝트 상세 4페이지는 정적 HTML, CSS, JavaScript로 구성됩니다. 이 폴더를 로컬 정적 서버에서 열거나 GitHub Pages의 게시 소스로 사용할 수 있습니다.

## 실제 실행 화면

서울 정비구역 지도의 검색 결과와 상세 캡처는 `media/redevelopment-search.webp`, `media/redevelopment-detail.webp`에 있습니다. 원본 PNG와 픽셀이 같은 무손실 WebP로 저장했습니다.

홈의 대표 이미지와 `redevelopment.html`의 실행 화면에 반영했습니다. 상세 페이지에서는 각 이미지를 선택하면 원본 크기로 열립니다. 상세 캡처는 14개 기준 단계 중 1~10단계가 보이는 구간이며, 모든 날짜는 2026-03-19 백업 기준입니다.

## 다른 프로젝트의 시연 이미지 또는 영상 추가

1. `media/`에 실제 이미지나 영상 파일을 추가합니다.
2. `media.js`의 `projectMedia`에서 해당 프로젝트의 `null`을 파일 정보로 바꿉니다.

```js
sporty: { src: 'media/sporty.mp4', alt: '매칭 요청의 서비스 간 추적' },
```

`sporty`, `petcheck`, `fridge`는 각각 해당 상세 페이지에 표시됩니다. MP4와 WebM은 영상 플레이어, PNG·JPG·WebP 등은 이미지로 표시합니다. `null`이면 파일을 요청하지 않고 시연 자리만 표시합니다.

서울 정비구역 지도는 두 장의 캡처를 HTML에 직접 배치했습니다. 교체할 때는 해당 HTML의 이미지 경로와 원본 링크, 설명을 함께 바꿉니다.
