import f from '.';

export const tutorial = () => {
  const hideTutorial = () => {
    f.selectById('info').style.fontSize = '0';
    f.selectById('info').style.height = '0vh';
    f.selectById('tutorial').style.backgroundColor = '#f6f6f600';
    f.selectById('tutorial').style.padding = '0';
    f.selectById('hide-tutorial').innerHTML = '?';
  };
  const showTutorial = () => {
    f.selectById('info').style.height = '26vh';
    f.selectById('info').style.fontSize = '2vh';
    f.selectById('tutorial').style.backgroundColor = 'aliceblue';
    f.selectById('tutorial').style.padding = '1%';
    f.selectById('hide-tutorial').innerHTML = 'x';
  };
  const toggleTutorial = (event) => {
    const tutorialIsUP = f.selectById('hide-tutorial').innerHTML === '?';
    const checkKeyDown = (event.key === 't');
    if (checkKeyDown && !tutorialIsUP) {
      hideTutorial();
    }
    if (checkKeyDown && tutorialIsUP) {
      showTutorial();
    }
  };
  const toggleTutorialClick = (event) => {
    const tutorialIsUP = f.selectById('hide-tutorial').innerHTML === '?';
    const checkClick = (event.type === 'click');
    if (checkClick && !tutorialIsUP) {
      hideTutorial();
    }
    if (checkClick && tutorialIsUP) {
      showTutorial();
    }
  };
  f.selectById('hide-tutorial').addEventListener('click', toggleTutorialClick);
  document.addEventListener('keydown', toggleTutorial);
};
