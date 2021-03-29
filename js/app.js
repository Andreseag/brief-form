// Variables
const step = document.querySelector('.step');
const nextButton = document.querySelector('#next-button');
const prevButton = document.querySelector('#prev-button');
//
let stepPosition = 1;

prevButton.classList.add('d-none');
//
nextButton.onclick = () => {
  const actualStep = document.querySelector(`.step-${stepPosition}`);
  actualStep.classList.add('d-none');
  stepPosition += 1;
  const nextStep = document.querySelector(`.step-${stepPosition}`);
  nextStep.classList.remove('d-none');
  prevButton.classList.remove('d-none');

  if (stepPosition === 9) {
    debugger;
    nextButton.innerHTML = 'Enviar fomulario';
  } else {
    nextButton.innerHTML = 'Siguiente';
  }
};

prevButton.onclick = () => {};
