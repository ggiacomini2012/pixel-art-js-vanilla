import f from '.';

export const loadingAction = () => {
  setTimeout(() => {
    let loadingCount = 0;
    document.body.style.backgroundColor = '#000000';
    document.body.innerHTML = `
    <div id="loading-container">
        <div id="loading" display="none">LOADING</div>
        <div id="loading-count">0%</div>
    </div>
    `;
    setTimeout(() => {
      f.selectById('loading').style.color = '#ffffff';
      f.selectById('loading-count').style.color = '#ffffff';
      setTimeout(() => {
        f.selectById('loading-container').style.transform = 'scale(1.1)';
        f.selectById('loading').style.opacity = '0';
        f.selectById('loading-count').style.opacity = '0';
      }, 800);
    }, 50);

    const introLoadginCount = setInterval(() => {
      loadingCount += 1;
      if (f.selectById('loading')) {
        f.innerHTML('loading-count', `${loadingCount}%`);
      }
      if (loadingCount === 100) clearInterval(introLoadginCount);
    }, 5);
  }, 800);
};
