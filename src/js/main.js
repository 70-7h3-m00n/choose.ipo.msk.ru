import '../scss/main.scss';

const sectionPrograms = document.getElementById('section-programs');

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
    }
  };

  this.change = function (state) {
    currentState = state;
  };
};

// Management
const management = function (page){
  window.history.pushState({'page_id': 1}, '', '/management');

  headingTitle.innerHTML = 'в сфере менеджмента';
  dynamicProgramsTitle.innerHTML = 'в сфере менеджмента';
  dynamicPrograms.innerHTML = `
    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Антикризисное управление😎</h3>
      </div>
      <!-- <div class="card__info">
        <p class="h4">Наш институт имеет бессрочную лицензию на образовательную деятельность. Нашу лицензию можно проверить на сайте Рособрнадзор</p>
      </div> -->
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Администрирование в сфере гостиничного сервиса</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Администрирование в спортивных клубах и фитнес-центрах</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Администрирование в развлекательно-досуговой организации</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Руководитель кадровой службы</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>
  `;
  sectionPrograms.scrollIntoView({
    behavior: 'smooth'
  });
}

// Economics
const economics = function (page){
  window.history.pushState({'page_id': 2}, '', '/economics');

  headingTitle.innerHTML = 'в сфере экономики';
  dynamicProgramsTitle.innerHTML = 'в сфере экономики';
  dynamicPrograms.innerHTML = `
    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Бухгалтерский учет, анализ и аудит</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Бухгалтерский и налоговый учет в организациях малого бизнеса и ИП</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Бухгалтерский учет в некоммерческих организациях</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Бухгалтерский учет и налогообложение</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Международные отношения</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>
  `;
  sectionPrograms.scrollIntoView({
    behavior: 'smooth'
  });
}

// Pedagogy 
const pedagogy  = function (page){
  window.history.pushState({'page_id': 3}, '', '/pedagogy');

  headingTitle.innerHTML = 'в сфере педагогики';
  dynamicProgramsTitle.innerHTML = 'в сфере педагогики';
  dynamicPrograms.innerHTML = `
    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Педагог высшего образования</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Педагог обществознания</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Педагог истории</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Логопедия</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Специальное (дефектологическое) образование</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>
  `;
  sectionPrograms.scrollIntoView({
    behavior: 'smooth'
  });
}

// Psychology
const psychology = function (page){
  window.history.pushState({'page_id': 4}, '', '/psychology');


  headingTitle.innerHTML = 'в сфере психологии';
  dynamicProgramsTitle.innerHTML = 'в сфере психологии';
  dynamicPrograms.innerHTML = `
    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Психология</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Психология: Очно-заочная (вечерняя) форма обучения</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Клиническая психология</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Психология личности</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Социальная психология в бизнесе</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>
  `;
  sectionPrograms.scrollIntoView({
    behavior: 'smooth'
  });
}

// Healthcare
const healthcare = function (page){
  window.history.pushState({'page_id': 5}, '', '/healthcare');

  headingTitle.innerHTML = 'в сфере медицины';
  dynamicProgramsTitle.innerHTML = 'в сфере медицины';
  dynamicPrograms.innerHTML = `
    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Клиническая фармакология</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Психиатрия</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Психотерапия</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Сестринский уход в физиотерапевтической практике</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Акушерское дело</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>
  `;
  sectionPrograms.scrollIntoView({
    behavior: 'smooth'
  });
}

// Informatics
const informatics = function (page){
  window.history.pushState({'page_id': 6}, '', '/informatics');

  headingTitle.innerHTML = 'в сфере информатики';
  dynamicProgramsTitle.innerHTML = 'в сфере информатики';
  dynamicPrograms.innerHTML = `
    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Информатика и вычислительная техника</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Вычислительные машины, комплексы, системы и сети</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Технология разработки программного обеспечения</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Технология разработки мобильного приложения</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Программное обеспечение средств вычислительной техники и автоматизированных систем</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>
  `;
  sectionPrograms.scrollIntoView({
    behavior: 'smooth'
  });
}

// Jurisprudence
const jurisprudence = function (page){
  window.history.pushState({'page_id': 7}, '', '/jurisprudence');

  headingTitle.innerHTML = 'в сфере юриспруденции';
  dynamicProgramsTitle.innerHTML = 'в сфере юриспруденции';
  dynamicPrograms.innerHTML = `
    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Юриспруденция</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Сделки с недвижимостью</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Специалист договорного отдела</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Юриспруденция: гражданско-правовой профиль</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Правовое сопровождение социального обеспечения граждан Р.Ф.</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>
  `;
  sectionPrograms.scrollIntoView({
    behavior: 'smooth'
  });
}

// Marketing 
const marketing = function (page){
  window.history.pushState({'page_id': 8}, '', '/marketing');

  headingTitle.innerHTML = 'в сфере маркетинга';
  dynamicProgramsTitle.innerHTML = 'в сфере маркетинга';
  dynamicPrograms.innerHTML = `
    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Менеджер по маркетингу</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Интернет-маркетинг</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Директор по маркетингу</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Реклама и PR (Рссо)</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">PR менеджер</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Основы брендинга и рекламы</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>

    <div class="cards__card">
      <div class="card__title">
        <h3 class="h3">Журналистика</h3>
      </div>
      <div class="card__half">
        <div class="half__left">
          <p class="h4">От 246 часов</p>
        </div>
        <div class="half__right">
          <p class="h4">От 14000руб</p>
        </div>
      </div>
      <div class="card__btn">
        <a class="btn btn-primary">Узнать подробнее</a>
      </div>
    </div>
  `;
  sectionPrograms.scrollIntoView({
    behavior: 'smooth'
  });
}

// Technology
const technology = function (page){
  window.history.pushState({'page_id': 9}, '', '/technology');

  headingTitle.innerHTML = 'в технической сфере';
  dynamicProgramsTitle.innerHTML = 'в технической сфере';
  dynamicPrograms.innerHTML = `
    здесь будут программы технической сферы
  `;
  sectionPrograms.scrollIntoView({
    behavior: 'smooth'
  });
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