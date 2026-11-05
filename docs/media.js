// Use paths relative to the page, e.g. { src: 'media/map.webm', alt: '구역 선택과 단계 조회' }.
// The empty entries intentionally make no network requests.
const projectMedia = {
  redevelopment: null,
  petcheck: null,
  fridge: null,
};

for (const figure of document.querySelectorAll('.media[data-project]')) {
  const asset = projectMedia[figure.dataset.project];
  if (!asset?.src) continue;
  const isVideo = /\.(mp4|webm)$/i.test(asset.src);
  const element = document.createElement(isVideo ? 'video' : 'img');
  if (isVideo) {
    element.controls = true;
    element.playsInline = true;
    element.preload = 'metadata';
    element.setAttribute('aria-label', asset.alt);
  } else {
    element.alt = asset.alt;
  }
  const viewport = figure.querySelector('.viewport');
  const placeholder = Array.from(viewport.childNodes);
  element.addEventListener('error', () => viewport.replaceChildren(...placeholder), { once: true });
  viewport.replaceChildren(element);
  element.src = asset.src;
}
