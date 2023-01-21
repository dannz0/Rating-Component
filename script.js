class App {
  _parentEl = document.querySelector('.rating-box');
  _btnNum = document.querySelectorAll('.btn--num');
  _btnSubmit = document.querySelector('.btn--submit');
  _mainOverlay = document.querySelector('.overlay-main');
  _subOverlay = document.querySelector('.overlay-thankyou');
  _messageEl = document.querySelector('.text-selected');

  constructor() {
    this._parentEl.addEventListener('click', this._selectBtn.bind(this));
    this._parentEl.addEventListener('click', this._submitBtn.bind(this));
  }

  _selectBtn(e) {
    const target = e.target.dataset.num;

    if (!target) return;

    // Removing color / bg color before adding a new one
    this._btnNum.forEach((btn) => {
      btn.style.backgroundColor = 'hsl(212, 19%, 26%)';
      btn.style.color = 'hsl(217, 12%, 63%)';
    });

    // Adding color / bg color for selected btn
    const el = document.querySelector(`.btn[data-num="${target}"]`);
    el.style.backgroundColor = 'hsl(216, 12%, 54%)';
    el.style.color = '#fff';

    // Displaying the thank you msg
    this._message(target);
  }

  _submitBtn(e) {
    const target = e.target.classList.contains('btn--submit');

    if (!target) return;

    // Changing overlays by submitting
    this._subOverlay.style.display = 'grid';
    this._mainOverlay.style.display = 'none';
  }

  _message(data) {
    this._messageEl.textContent = '';
    this._messageEl.textContent = `You selected ${data} out of 5`;
  }
}

new App();
