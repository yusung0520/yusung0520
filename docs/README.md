# 웹 포트폴리오

홈과 프로젝트 상세 4페이지는 정적 HTML, CSS, JavaScript로 구성됩니다. 이 폴더를 로컬 정적 서버에서 열거나 GitHub Pages의 게시 소스로 사용할 수 있습니다. 페이지 링크와 리소스 경로는 모두 이 폴더를 기준으로 연결됩니다.

## 시연 이미지 또는 영상 추가

1. 이 폴더에 `media/` 디렉터리를 만들고, 실제 시연 이미지나 영상 파일을 추가합니다.
2. [media.js](media.js)의 `projectMedia`에서 해당 프로젝트의 `null`을 다음처럼 바꿉니다.

```js
redevelopment: { src: 'media/redevelopment.mp4', alt: '지도에서 구역을 선택한 뒤 현재 단계와 이력을 확인하는 과정' },
```

| 키 | 표시되는 곳 |
| --- | --- |
| `redevelopment` | 서울 정비구역 지도 상세 |
| `sporty` | Sporty 상세 |
| `petcheck` | PetCheck 상세 |
| `fridge` | 냉장고를 부탁해 상세 |

MP4와 WebM은 영상 플레이어를 사용합니다. GIF, PNG, JPG 등은 이미지로 표시합니다. `null`이면 파일을 요청하지 않고 시연 자리만 표시합니다.
