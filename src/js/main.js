import '../scss/main.scss';

const test = document.getElementById('test');
const test2 = document.getElementById('test2');
const text = document.getElementById('text');

const PageState = function () {
  // let currentState = new stateOne(this);
  let currentState;
  if(window.location.href.includes('stateOne')){
    currentState = new stateOne(this);
  }else{
    currentState = new stateTwo(this);
  }

  this.init = function () {
    if(window.location.href.includes('stateOne')){
      this.change(new stateOne());
    }else if(window.location.href.includes('stateOne')) {
      this.change(new stateTwo());
    }
  };

  this.change = function (state) {
    currentState = state;
  };
};

// State 1
const stateOne = function (page){
  window.history.pushState({'page_id': 1}, '', '/stateOne');

  // text.id = 'state1';
  text.innerHTML = `State 1`;
}

// State 2
const stateTwo = function(page) {
  window.history.pushState({'page_id': 2}, '', '/stateTwo');

  // text.id = 'state2';
  text.innerHTML = `State 2`;
}

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();


// State 1
test.addEventListener('click', (e) => {
  page.change(new stateOne());

  e.preventDefault();
});

// State 2
test2.addEventListener('click', (e) => {
  page.change(new stateTwo());

  e.preventDefault();
});