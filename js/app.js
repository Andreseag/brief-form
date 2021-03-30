// Variables
const step = document.querySelector('.step');
const nextButton = document.querySelector('#next-button');
const prevButton = document.querySelector('#prev-button');
const buttonsAction = document.querySelector('.buttons-actions');
//
let stepPosition = 1;

prevButton.classList.add('d-none');
//
const validateBtnName = () => {
  if (stepPosition === 8) {
    nextButton.innerHTML = 'Enviar fomulario';
  } else if (stepPosition === 9) {
    buttonsAction.classList.add('d-none');
  } else {
    nextButton.innerHTML = 'Siguiente';
  }
};

//
nextButton.onclick = () => {
  validateBtnName();
  const actualStep = document.querySelector(`.step-${stepPosition}`);
  actualStep.classList.add('d-none');
  stepPosition += 1;
  const nextStep = document.querySelector(`.step-${stepPosition}`);
  nextStep.classList.remove('d-none');
  prevButton.classList.remove('d-none');
};

prevButton.onclick = () => {
  validateBtnName();
  const actualStep = document.querySelector(`.step-${stepPosition}`);
  actualStep.classList.add('d-none');
  stepPosition -= 1;
  const prevStep = document.querySelector(`.step-${stepPosition}`);
  prevStep.classList.remove('d-none');

  if (stepPosition === 1) {
    prevButton.classList.add('d-none');
  }
};
