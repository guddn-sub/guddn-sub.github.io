// 허브 설정 — 깃허브 아이디나 저장소 이름이 바뀌면 이 파일만 고치면 됩니다.
//   사이트 주소는 https://{id}.github.io/{repo}/ 로 만들어집니다.
//   허브 자신은 저장소 이름이 {id}.github.io 여야 https://{id}.github.io/ 첫 화면이 됩니다.
//   사이트를 추가하려면 sites 에 한 줄을 넣으세요. (적은 순서대로 목록에 나옵니다)
//
//   title  : 허브 제목 (헤더 경로·페이지 제목)
//   version: 헤더 오른쪽 끝에 보이는 버전. 작업할 때마다 올리고 CHANGELOG.md 에도 적습니다.
//   folder : 내 PC 에서 html 을 그냥 열었을 때(file://) 쓸 폴더 이름.
//            허브 폴더와 나란히 있는 폴더 이름을 적으면, 링크가 ../{folder}/index.html 로 갑니다.
window.HUB_CONFIG = {
  id: "guddn-sub",
  title: "작업실 모음",
  version: "0.4.0",
  sites: [
    { repo: "motion_product", folder: "for_claude", title: "모션 작업실", desc: "프롬프트로 손글씨·젤리·동전·그물·불릿타임 장면을 만들고 영상으로 뽑는 과정 (sonnet)." },
    { repo: "technique_reference", folder: "for_claude_reference", title: "참고 작업실", desc: "초중급반 프로젝트에서 나온 결과물 모음." },
  ],
};
