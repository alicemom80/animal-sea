// 동물 데이터: id(그림 파일 이름), en(영어), ko(한글), say(읽을 소리, 없으면 en)
window.A = window.A || {};

A.THEMES = [
  { id: 'sea', ko: '바다', en: 'Sea', icon: '🐳', cover: 'whale', color: '#b7dcf3',
    words: [
      ['whale', 'whale', '고래'], ['dolphin', 'dolphin', '돌고래'], ['octopus', 'octopus', '문어'], ['crab', 'crab', '게'], ['starfish', 'starfish', '불가사리'],
      ['seaotter', 'sea otter', '해달'], ['turtle', 'turtle', '거북이'], ['penguin', 'penguin', '펭귄'], ['polarbear', 'polar bear', '북극곰'], ['walrus', 'walrus', '바다코끼리'],
      ['shark', 'shark', '상어'], ['fish', 'fish', '물고기'], ['jellyfish', 'jellyfish', '해파리'], ['lobster', 'lobster', '바닷가재'], ['shrimp', 'shrimp', '새우'],
      ['orca', 'orca', '범고래'], ['pufferfish', 'pufferfish', '복어'], ['seahorse', 'seahorse', '해마'], ['angelfish', 'angelfish', '엔젤피시'], ['seal', 'seal', '물범'],
    ] },
];

// 5개씩 묶음으로 나누기 (맨 끝 묶음은 5개보다 적을 수 있음)
A.GROUP_SIZE = 5;
A.THEMES.forEach(t => {
  t.words = t.words.map(([id, en, ko, say]) => ({
    id, en, ko, say: say || en,
    art: /^[aeiou]/i.test(en) && !/^uni/i.test(en) ? 'an' : 'a',   // unicorn 은 '유'로 시작하는 소리라 a
  }));
  t.groups = [];
  for (let i = 0; i < t.words.length; i += A.GROUP_SIZE) {
    t.groups.push(t.words.slice(i, i + A.GROUP_SIZE));
  }
});
