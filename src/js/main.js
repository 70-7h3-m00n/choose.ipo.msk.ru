import '../scss/main.scss';
// import '../thankyou/thankyou.html';

const sectionPrograms = document.getElementById('section-programs');
const body = document.getElementById('body');

function getClientUrl(){
  const clientUrlInputs = document.querySelectorAll('.input-client-url');
  const clientUrlInputsArr = Array.prototype.slice.call(clientUrlInputs);
  const clientUrl = window.location.href;
  
  clientUrlInputsArr.forEach(input => {
    input.value = clientUrl;
  })
}

getClientUrl();

// const topBanner = document.getElementById('js-top-banner');
// topBanner.addEventListener('click', () =>{
//   sectionPrograms.scrollIntoView({
//     behavior: 'smooth'
//   })
// })
/////////////////////////////////////////////////////////////////////
// States

// Dynamic elements
const dynamicPrograms = document.getElementById('dynamic-programs');
const dynamicProgramsTitle = document.getElementById('dynamic-programs-title');
const headingTitle = document.getElementById('heading-title');

// Footer links
const managementLink = document.getElementById('management');
const economicsLink = document.getElementById('economics');
const pedagogyLink = document.getElementById('pedagogy');
const psychologyLink = document.getElementById('psychology');
const healthcareLink = document.getElementById('healthcare');
const informaticsLink = document.getElementById('informatics');
const jurisprudenceLink = document.getElementById('jurisprudence');
const marketingLink = document.getElementById('marketing');
const technologyLink = document.getElementById('technology');

// Page state
const PageState = function () {
  let currentState;
  if(window.location.href.includes('management')){
    currentState = new management(this);
  }else if(window.location.href.includes('economics')){
    currentState = new economics(this);
  }else if(window.location.href.includes('pedagogy')){
    currentState = new pedagogy(this);
  }else if(window.location.href.includes('psychology')){
    currentState = new psychology(this);
  }else if(window.location.href.includes('healthcare')){
    currentState = new healthcare(this);
  }else if(window.location.href.includes('informatics')){
    currentState = new informatics(this);
  }else if(window.location.href.includes('jurisprudence')){
    currentState = new jurisprudence(this);
  }else if(window.location.href.includes('marketing')){
    currentState = new marketing(this);
  }else if(window.location.href.includes('technology')){
    currentState = new technology(this);
  }else{
    currentState = new management(this);
    // currentState;
  }

  this.init = function () {
    if(window.location.href.includes('management')){
      this.change(new management());
    }else if(window.location.href.includes('economics')){
      this.change(new economics());
    }else if(window.location.href.includes('pedagogy')){
      this.change(new pedagogy());
    }else if(window.location.href.includes('psychology')){
      this.change(new psychology());
    }else if(window.location.href.includes('healthcare')){
      this.change(new healthcare());
    }else if(window.location.href.includes('informatics')){
      this.change(new informatics());
    }else if(window.location.href.includes('jurisprudence')){
      this.change(new jurisprudence());
    }else if(window.location.href.includes('marketing')){
      this.change(new marketing());
    }else if(window.location.href.includes('technology')){
      this.change(new technology());
    }else{
      this.change(new management());
      // return;
    }
  };

  this.change = function (state) {
    currentState = state;
  };
};

// Vars for programs
function createCard(cardTitle = '', cardHours = '72', cardDuration = '1', cardPrice = '4 900', cardPriceDiscount=''){
  return `
          <div class="cards__card">
            <div class="card__title">
              <h3 class="h3">${cardTitle}</h3>
            </div>
            <div class="card__info">
                <p class="h4 info__hours"><span>🕒</span> <span class="align-helper"><span class="card-info-icon">Объем программы:</span> ${cardHours}ч</span></p>
                <p class="h4 info__learn-time"><span>🕗</span> <span class="align-helper"><span class="card-info-icon">Длительность обучения:</span> До ${cardDuration} мес</span></p>
                <p class="h4 info__edu-base"><span>📚</span> <span class="align-helper"><span class="card-info-icon">Обучение на базе:</span> Высшего или средне-профессионального образования</span></p>
                <p class="h4 info__price"><span class="card-icon">💳​</span> <span class="align-helper"><span class="card-info-icon">Стоимость:</span> От ${cardPrice} руб. за весь курс</span></span></p>
              </div>
            <div class="card__btn">
              <a class="btn btn-primary js-btn-popup">Узнать подробнее</a>
            </div>
          </div>
        `
}

function scrollIntoView(el = ''){

  if(el !== ''){
    // el.scrollIntoView(true);
    // el.scrollTop;
    window.scrollTo(0, 0);
    // window.location.hash = el.id;
    // window.location.href = window.location.href.split('#')[0];
    // body.scrollIntoView({
    //   behavior: 'auto'
    // });

    // window.scroll({
    //   top: 0, 
    //   left: 0, 
    //   behavior: 'smooth'
    // });
    
  }else{
    return;
  }
}

// Management
const management = function (page){
  window.history.pushState({'page_id': 1}, '', '/management');

  headingTitle.innerHTML = 'в сфере менеджмента';
  dynamicProgramsTitle.innerHTML = 'в сфере менеджмента';

  dynamicPrograms.innerHTML = createCard('Менеджер по развитию персонала');
  dynamicPrograms.innerHTML += createCard('Управление персоналом');
  dynamicPrograms.innerHTML += createCard('Менеджер по подбору и адаптации персонала');
  dynamicPrograms.innerHTML += createCard('Менеджер по оценке персонала');
  dynamicPrograms.innerHTML += createCard('Менеджер по оплате и нормированию труда');
  dynamicPrograms.innerHTML += createCard('Управление проектами');
  dynamicPrograms.innerHTML += createCard('Управление инновационными проектами');
  dynamicPrograms.innerHTML += createCard('Управление качеством');
  dynamicPrograms.innerHTML += createCard('Стратегический менеджмент');
  dynamicPrograms.innerHTML += createCard('Антикризисное управление');
  dynamicPrograms.innerHTML += createCard('Документоведение и архивоведение');
  dynamicPrograms.innerHTML += createCard('Финансовый менеджмент');
  dynamicPrograms.innerHTML += createCard('Менеджмент в спортивных учреждениях');
  dynamicPrograms.innerHTML += createCard('Менеджмент в учреждениях культуры');
  dynamicPrograms.innerHTML += createCard('Менеджер здравоохранения');
  dynamicPrograms.innerHTML += createCard('Менеджер образования');
  dynamicPrograms.innerHTML += createCard('Логистика общая');
  dynamicPrograms.innerHTML += createCard('Складская логистика');
  dynamicPrograms.innerHTML += createCard('Транспортная логистика');
  dynamicPrograms.innerHTML += createCard('Закупочная логистика');
  dynamicPrograms.innerHTML += createCard('Государственное и муниципальное управление');
  dynamicPrograms.innerHTML += createCard('Управление развитием региона');

  scrollIntoView(body);
  addListenersToBtns();
  limitCards();
  showMoreClients();
  changeThankyouPage();
  dynamicBg('management');
}

// Economics
const economics = function (page){
  window.history.pushState({'page_id': 2}, '', '/economics');

  headingTitle.innerHTML = 'в сфере экономики';
  dynamicProgramsTitle.innerHTML = 'в сфере экономики';

  dynamicPrograms.innerHTML = createCard('Бухгалтерский учет, анализ и аудит');
  dynamicPrograms.innerHTML += createCard('Налоги и налогообложение');
  dynamicPrograms.innerHTML += createCard('Экономика и управление на предприятии');
  dynamicPrograms.innerHTML += createCard('Финансы и кредит');
  dynamicPrograms.innerHTML += createCard('Финансовый анализ');
  dynamicPrograms.innerHTML += createCard('Страхование');
  dynamicPrograms.innerHTML += createCard('Экономическая безопасность');
  dynamicPrograms.innerHTML += createCard('Внешнеэкономическая деятельность');
  dynamicPrograms.innerHTML += createCard('Рынок ценных бумаг');
  dynamicPrograms.innerHTML += createCard('Региональная экономика');
  dynamicPrograms.innerHTML += createCard('Экономист по оплате и нормированию труда');

  scrollIntoView(body);
  addListenersToBtns();
  limitCards();
  showMoreClients();
  changeThankyouPage();
  dynamicBg('economics');
}

// Pedagogy 
const pedagogy  = function (page){
  window.history.pushState({'page_id': 3}, '', '/pedagogy');

  headingTitle.innerHTML = 'в сфере педагогики';
  dynamicProgramsTitle.innerHTML = 'в сфере педагогики';

  dynamicPrograms.innerHTML = createCard('Педагог высшего образования');
  dynamicPrograms.innerHTML += createCard('Методика обучения ритмике детей дошкольного возраста');
  dynamicPrograms.innerHTML += createCard('Педагог обществознания');
  dynamicPrograms.innerHTML += createCard('Педагог истории');
  dynamicPrograms.innerHTML += createCard('Педагог основ безопасности жизнедеятельности');
  dynamicPrograms.innerHTML += createCard('Педагог экологии');
  dynamicPrograms.innerHTML += createCard('Педагог-психолог');
  dynamicPrograms.innerHTML += createCard('Педагогика и методика начального образования');
  dynamicPrograms.innerHTML += createCard('Дошкольная педагогика и психология');
  dynamicPrograms.innerHTML += createCard('Дошкольная педагогика, воспитатель ДОО');
  dynamicPrograms.innerHTML += createCard('Основы религиозных культур и светской этики в контексте ФГОС НОО');
  dynamicPrograms.innerHTML += createCard('Современные образовательные технологии в начальной школе');
  dynamicPrograms.innerHTML += createCard('Социальный педагог');
  dynamicPrograms.innerHTML += createCard('Социальная работа');

  scrollIntoView(body);
  addListenersToBtns();
  limitCards();
  showMoreClients();
  changeThankyouPage();
  dynamicBg('pedagogy');
}

// Psychology
const psychology = function (page){
  window.history.pushState({'page_id': 4}, '', '/psychology');


  headingTitle.innerHTML = 'в сфере психологии';
  dynamicProgramsTitle.innerHTML = 'в сфере психологии';

  dynamicPrograms.innerHTML = createCard('Психология');
  dynamicPrograms.innerHTML += createCard('Социальная психология в бизнесе');
  dynamicPrograms.innerHTML += createCard('Психология семьи с основами психотерапии');

  scrollIntoView(body);
  addListenersToBtns();
  limitCards();
  showMoreClients();
  changeThankyouPage();
  dynamicBg('psychology');
}

// Healthcare
const healthcare = function (page){
  window.history.pushState({'page_id': 5}, '', '/healthcare');

  headingTitle.innerHTML = 'в сфере медицины';
  dynamicProgramsTitle.innerHTML = 'в сфере медицины';

  dynamicPrograms.innerHTML = createCard('Клиническая фармакология');
  dynamicPrograms.innerHTML += createCard('Психиатрия');
  dynamicPrograms.innerHTML += createCard('Психотерапия');
  dynamicPrograms.innerHTML += createCard('Сестринский уход в физиотерапевтической практике');
  dynamicPrograms.innerHTML += createCard('Акушерское дело');
  dynamicPrograms.innerHTML += createCard('Сестринское дело');
  dynamicPrograms.innerHTML += createCard('Организация сестринского дела');
  dynamicPrograms.innerHTML += createCard('Сестринское дело в косметологии');
  dynamicPrograms.innerHTML += createCard('Сестринское дело в педиатрии');
  dynamicPrograms.innerHTML += createCard('Сестринское дело в онкологии');
  dynamicPrograms.innerHTML += createCard('Сестринское дело в терапии');
  dynamicPrograms.innerHTML += createCard('Сестринское дело в хирургии');
  dynamicPrograms.innerHTML += createCard('Лабораторное дело');
  dynamicPrograms.innerHTML += createCard('Операционное дело');
  dynamicPrograms.innerHTML += createCard('Общая практика');
  dynamicPrograms.innerHTML += createCard('Медицинская сестра врача общей практики');
  dynamicPrograms.innerHTML += createCard('Медико-социальная помощь');
  dynamicPrograms.innerHTML += createCard('Организация здравоохранения и общественное здоровье');
  dynamicPrograms.innerHTML += createCard('Медицинская статистика');
  dynamicPrograms.innerHTML += createCard('Судебно-медицинская экспертиза(СМП)');
  dynamicPrograms.innerHTML += createCard('Судебно-медицинская экспертиза');
  dynamicPrograms.innerHTML += createCard('Диетология');
  dynamicPrograms.innerHTML += createCard('Наркология');
  dynamicPrograms.innerHTML += createCard('Онкология');
  dynamicPrograms.innerHTML += createCard('Остеопатия');
  dynamicPrograms.innerHTML += createCard('Ревматология');
  dynamicPrograms.innerHTML += createCard('Рентгенология');
  dynamicPrograms.innerHTML += createCard('Паразитология');
  dynamicPrograms.innerHTML += createCard('Стоматология');
  dynamicPrograms.innerHTML += createCard('Стоматология общей практики');
  dynamicPrograms.innerHTML += createCard('Стоматология детская');
  dynamicPrograms.innerHTML += createCard('Стоматология хирургическая');
  dynamicPrograms.innerHTML += createCard('Стоматология ортопедическая');
  dynamicPrograms.innerHTML += createCard('Стоматология терапевтическая');
  dynamicPrograms.innerHTML += createCard('Педиатрия');
  dynamicPrograms.innerHTML += createCard('Патологическая анатомия');
  dynamicPrograms.innerHTML += createCard('Сексология');
  dynamicPrograms.innerHTML += createCard('Фтизиатрия');
  dynamicPrograms.innerHTML += createCard('Гистология');
  dynamicPrograms.innerHTML += createCard('Эпидемиология');
  dynamicPrograms.innerHTML += createCard('Эндоскопия');
  dynamicPrograms.innerHTML += createCard('Бактериология');
  dynamicPrograms.innerHTML += createCard('Фельдшер');
  dynamicPrograms.innerHTML += createCard('Дезинфекционное дело');
  dynamicPrograms.innerHTML += createCard('Травматология и ортопедия');
  dynamicPrograms.innerHTML += createCard('Анестезиология и реаниматология');
  dynamicPrograms.innerHTML += createCard('Гигиеническое воспитание');
  dynamicPrograms.innerHTML += createCard('Лечебная физкультура и спортивная медицина');

  scrollIntoView(body);
  addListenersToBtns();
  limitCards();
  showMoreClients();
  changeThankyouPage();
  dynamicBg('healthcare');
}

// Informatics
const informatics = function (page){
  window.history.pushState({'page_id': 6}, '', '/informatics');

  headingTitle.innerHTML = 'в сфере информатики';
  dynamicProgramsTitle.innerHTML = 'в сфере информатики';

  dynamicPrograms.innerHTML = createCard('Информатика и вычислительная техника', '256', '1.5', '9 900', '6 930');
  dynamicPrograms.innerHTML += createCard('Вычислительные машины, комплексы, системы и сети');
  dynamicPrograms.innerHTML += createCard('Технология разработки программного обеспечения');
  dynamicPrograms.innerHTML += createCard('Технология разработки мобильного приложения');
  dynamicPrograms.innerHTML += createCard('Программное обеспечение средств вычислительной техники и автоматизированных систем');
  dynamicPrograms.innerHTML += createCard('Информационная безопасность');
  
  scrollIntoView(body);
  addListenersToBtns();
  limitCards();
  showMoreClients();
  changeThankyouPage();
  dynamicBg('informatics');
}

// Jurisprudence
const jurisprudence = function (page){
  window.history.pushState({'page_id': 7}, '', '/jurisprudence');

  headingTitle.innerHTML = 'в сфере юриспруденции';
  dynamicProgramsTitle.innerHTML = 'в сфере юриспруденции';

  dynamicPrograms.innerHTML = createCard('Юриспруденция');
  dynamicPrograms.innerHTML += createCard('Сделки с недвижимостью');
  dynamicPrograms.innerHTML += createCard('Специалист договорного отдела');
  
  scrollIntoView(body);
  addListenersToBtns();
  limitCards();
  showMoreClients();
  changeThankyouPage();
  dynamicBg('jurisprudence');
}

// Marketing 
const marketing = function (page){
  window.history.pushState({'page_id': 8}, '', '/marketing');

  headingTitle.innerHTML = 'в сфере маркетинга';
  dynamicProgramsTitle.innerHTML = 'в сфере маркетинга';

  dynamicPrograms.innerHTML = createCard('Менеджер по маркетингу');
  dynamicPrograms.innerHTML += createCard('Интернет-маркетинг');
  dynamicPrograms.innerHTML += createCard('Директор по маркетингу');
  dynamicPrograms.innerHTML += createCard('Журналистика');
  dynamicPrograms.innerHTML += createCard('Реклама и PR (Рссо)');
  dynamicPrograms.innerHTML += createCard('PR менеджер');
  dynamicPrograms.innerHTML += createCard('Основы брендинга и рекламы');
  
  scrollIntoView(body);
  addListenersToBtns();
  limitCards();
  showMoreClients();
  changeThankyouPage();
  dynamicBg('marketing');
}

// Technology
const technology = function (page){
  window.history.pushState({'page_id': 9}, '', '/technology');

  headingTitle.innerHTML = 'в технической сфере';
  dynamicProgramsTitle.innerHTML = 'в технической сфере';

  dynamicPrograms.innerHTML = createCard('Продукты питания: виноделие и технология бродильных производств', 'От 72 до 144');
  dynamicPrograms.innerHTML += createCard('Продукты питания: технология производства хлеба, кондитерских и макаронных изделий', 'От 72 до 144');
  dynamicPrograms.innerHTML += createCard('Промышленное и гражданское строительство', 'От 72 до 144');
  dynamicPrograms.innerHTML += createCard('Проектирование зданий и сооружений', 'От 72 до 144');
  dynamicPrograms.innerHTML += createCard('Электроэнергетические системы и сети', 'От 72 до 144');
  dynamicPrograms.innerHTML += createCard('Электрооборудование и электрохозяйство предприятий, организаций и учреждений', 'От 72 до 144');
  dynamicPrograms.innerHTML += createCard('Теплоэнергетика и теплотехника', 'От 72 до 144');
  dynamicPrograms.innerHTML += createCard('Промышленная теплоэнергетика', 'От 72 до 144');
  dynamicPrograms.innerHTML += createCard('Охрана труда', 'От 72 до 144');
  dynamicPrograms.innerHTML += createCard('Охрана труда и техносферная безопасность', 'От 72 до 144');
  dynamicPrograms.innerHTML += createCard('Пожарно-технический минимум для руководителей и ответственных за пожарную безопасность в учреждениях (офисах)', 'От 72 до 144');
  dynamicPrograms.innerHTML += createCard('Пожарно-технический минимум для руководителей и ответственных за пожарную безопасность пожароопасных производств', 'От 72 до 144');

  scrollIntoView(body);
  addListenersToBtns();
  limitCards();
  showMoreClients();
  changeThankyouPage();
  dynamicBg('technology');
}


// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();


// Management state
managementLink.addEventListener('click', (e) => {
  page.change(new management());

  e.preventDefault();
});

// Economics state
economicsLink.addEventListener('click', (e) => {
  page.change(new economics());

  e.preventDefault();
});

// Pedagogy state
pedagogyLink.addEventListener('click', (e) => {
  page.change(new pedagogy());

  e.preventDefault();
});

// Psychology state
psychologyLink.addEventListener('click', (e) => {
  page.change(new psychology());

  e.preventDefault();
});

// Healthcare state
healthcareLink.addEventListener('click', (e) => {
  page.change(new healthcare());

  e.preventDefault();
});

// Informatics state
informaticsLink.addEventListener('click', (e) => {
  page.change(new informatics());

  e.preventDefault();
});

// Jurisprudence state
jurisprudenceLink.addEventListener('click', (e) => {
  page.change(new jurisprudence());

  e.preventDefault();
});

// Marketing state
marketingLink.addEventListener('click', (e) => {
  page.change(new marketing());

  e.preventDefault();
});

// Technology state
technologyLink.addEventListener('click', (e) => {
  page.change(new technology());

  e.preventDefault();
});

// /States
/////////////////////////////////////////////////////////////////////

function addListenersToBtns(){
  const btns = document.querySelectorAll('.js-btn-popup');
  const btnsArr = Array.prototype.slice.call(btns);
  
  btnsArr.forEach(btn => {
    btn.addEventListener('click', showPopUpForm);
  });
  
}

function showPopUpForm(e){
  const formPopUp = document.getElementById('module-1');
  const userNumber = document.getElementById('popup-form-user-number');
  formPopUp.classList.add('show');
  
  const clickedProgram = e.target.parentNode.parentNode;
  const clickedProgramTitle = clickedProgram.firstElementChild.firstElementChild.innerHTML;

  const choosenProgramInputs = document.querySelectorAll('.choosen-program');
  const choosenProgramInputsArr = Array.prototype.slice.call(choosenProgramInputs);

  if(clickedProgram.classList.contains('cards__card')){
    choosenProgramInputsArr.forEach(input => {
      input.value = clickedProgramTitle;
    })
  }else{
    choosenProgramInputsArr.forEach(input => {
      input.value = '';
    })
  }

  userNumber.focus();

  document.body.addEventListener('click', closePopUpForm);
}

function closePopUpForm(e){
  const formPopUp = document.getElementById('module-1');
  if(e.target === formPopUp && formPopUp.contains(e.target)){
    formPopUp.classList.remove('show');
  }
}

// Display only 5 cards at the time
function limitCards(){
  const cards = document.querySelectorAll('#dynamic-programs .cards__card');
  const cardsArr = Array.prototype.slice.call(cards);
  const loadMoreBtn = document.getElementById('load-more-cards__btn');
  let cardsTotal = 0;

  cardsArr.forEach((card) => {
    if(cardsTotal >= 5){
      return;
    }else{
      card.classList.add('show');
      cardsTotal++;
    }
  })
  
  if(cardsTotal >= cardsArr.length){
    loadMoreBtn.style.display = 'none';
  }else{
    loadMoreBtn.style.display = 'block';
  }
  loadMoreBtn.addEventListener('click', () => {
    // console.log(cardsArr.length);
    cardsTotal = cardsTotal+5;
    cardsArr.forEach((card, index) => {
      if(index >= cardsTotal){
        return;
      }else{
        card.classList.add('show');
      }
    })
    if(cardsTotal >= cardsArr.length){
      loadMoreBtn.style.display = 'none';
    }else{
      loadMoreBtn.style.display = 'block';
    }
  })
}

// Display only 5 clients at the time
function showMoreClients(){
  const clietns = document.querySelectorAll('.section-our-clients .carousel__item');
  const clietnsArr = Array.prototype.slice.call(clietns);
  const loadMoreBtn = document.getElementById('load-more-clients__btn');
  let clientsTotal = 0;

  clietnsArr.forEach((client) => {
    if(clientsTotal >= 6){
      return;
    }else{
      client.classList.add('show');
      clientsTotal++;
    }
  })
  
  loadMoreBtn.addEventListener('click', () => {
    clientsTotal += 6;
    clietnsArr.forEach((card, index) => {
      if(index >= clientsTotal){
        return;
      }else{
        card.classList.add('show');
      }
    })
    // showLessClients();
    if(clientsTotal >= clietnsArr.length){
      loadMoreBtn.style.display = 'none';
    }
  })
}

function showLessClients(){
// Check for an end of an array
if(clientsTotal >= clietnsArr.length){
  // console.log('TRUE');
  loadMoreBtn.innerHTML = 'Свернуть';

  loadMoreBtn.addEventListener('click', () => {
    const ourClientsSection = document.getElementById('section-our-clients');
      ourClientsSection.scrollIntoView({
        behavior: 'smooth'
      });

    loadMoreBtn.innerHTML = 'Ещё';

    // clietnsArr.forEach((card, index) => {
    //   if(index >= 6){
    //     card.classList.remove('show');
    //   }
    // })
    showMoreClients();

    // Start over
    // clientsTotal = 0;
    // loadMoreBtn.addEventListener('click', () => {
    //   clientsTotal += 6;
    //   clietnsArr.forEach((card, index) => {
    //     if(index >= clientsTotal){
    //       return;
    //     }else{
    //       card.classList.add('show');
    //     }
    //   })
    // })
    })
  }
}

function showNameInput(){
  const numInputs = document.querySelectorAll('.input-user-number');
  const nameInputs = document.querySelectorAll('.input-user-name');
  const nameInputsArr = Array.prototype.slice.call(nameInputs);
  const numInputsArr = Array.prototype.slice.call(numInputs);
  let timesPressed = 0;
  
  numInputsArr.forEach(input => {
    input.addEventListener('keydown', () =>{
      timesPressed++;
      if(timesPressed > 3){
        nameInputsArr.forEach(input => {
          input.classList.add('show');
        })
      }
    })
  })
}

// function validateForm(){
//   const numberInputs = document.querySelectorAll('.input-user-number');
//   const numberInputsArr = Array.prototype.slice.call(numberInputs);

//   const submitBtns = document.querySelectorAll('.input--submit');
//   const submitBtnsArr = Array.prototype.slice.call(submitBtns)

//   submitBtnsArr.forEach(btn => {
//     btn.addEventListener('click', () =>{
//       console.log(this);
//     })
//   })
// }

// validateForm();

function changeThankyouPage(){
  const inputThankyou = document.querySelectorAll('.input-thankyou');
  const inputThankyouArr = Array.prototype.slice.call(inputThankyou);
  
  inputThankyouArr.forEach(input => {
    input.value = window.location.origin+`/thankyou`+`?program=${window.location.pathname.substring(1)}`;
  });
}

// Prevent smooth scroll
// source: http://stackoverflow.com/a/35611393/992504
document.getElementsByTagName("body")[0].addEventListener("wheel",function (event) {
  // exception for ACE Editor, JS text editor used by sites like GitHub
  if (event.target.classList.contains('ace_content')) {
    return;
  }
  event.stopPropagation();
}, true);

function dynamicBg(currentClass){
  const headingBg = document.getElementById('js-section-heading');
  headingBg.classList.remove('management');
  headingBg.classList.remove('economics');
  headingBg.classList.remove('pedagogy');
  headingBg.classList.remove('psychology');
  headingBg.classList.remove('healthcare');
  headingBg.classList.remove('informatics');
  headingBg.classList.remove('jurisprudence');
  headingBg.classList.remove('marketing');
  headingBg.classList.remove('technology');
  headingBg.classList.add(currentClass);
}

// showNameInput();
limitCards();
showMoreClients();