import './sass/styles.scss';
import component from './js/scripts';

let demoComponent = component();

document.body.appendChild(demoComponent);

// HMR interface
if(module.hot) {
  // Capture hot update
  module.hot.accept('./js/scripts', () => {
    const nextComponent = component();

    // Replace old content with the hot loaded one
    document.body.replaceChild(nextComponent, demoComponent);

    demoComponent = nextComponent;
  });
}