import '../scss/main.scss';

const sectionPrograms = document.getElementById('section-programs');
const body = document.getElementById('body');

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

// Vars for programs
function createCard(cardTitle = '', cardInfo = ''){
  return `
          <div class="cards__card">
            <div class="card__title">
              <h3 class="h3">${cardTitle}</h3>
            </div>
            ${cardInfo}
            <div class="card__btn">
              <a class="btn btn-primary js-btn-popup">Узнать подробнее</a>
            </div>
          </div>
        `
}

function scrollIntoView(el = ''){

  if(el !== ''){
    el.scrollIntoView(true);
    el.scrollTop;
    // body.scrollIntoView({
    //   behavior: 'auto'
    // });
  }else{
    return;
  }
}

// 💳​ Цена: 
const cardInfo = `
              <div class="card__info">
                <p class="h4 info__hours"><span>🕒</span> <span class="align-helper"><span class="card-info-icon">Объем программы:</span> От 256 часов</span></p>
                <p class="h4 info__learn-time"><span>🕗</span> <span class="align-helper"><span class="card-info-icon">Длительность обучения:</span> От 1.5мес</span></p>
                <p class="h4 info__edu-base"><span>📚</span> <span class="align-helper"><span class="card-info-icon">Обучение на базе:</span> Высшего или средне-профессионального образования</span></p>
              </div>
              `;

// Management
const management = function (page){
  window.history.pushState({'page_id': 1}, '', '/management');

  headingTitle.innerHTML = 'в сфере менеджмента';
  dynamicProgramsTitle.innerHTML = 'в сфере менеджмента';

  dynamicPrograms.innerHTML = createCard('Антикризисное управление', cardInfo);
  dynamicPrograms.innerHTML += createCard('Администрирование в сфере гостиничного сервиса', cardInfo);
  dynamicPrograms.innerHTML += createCard('Администрирование в спортивных клубах и фитнес-центрах', cardInfo);
  dynamicPrograms.innerHTML += createCard('Администрирование в развлекательно-досуговой организации', cardInfo);
  dynamicPrograms.innerHTML += createCard('Руководитель кадровой службы', cardInfo);
  dynamicPrograms.innerHTML += createCard('Руководитель театрального коллектива', cardInfo);
  dynamicPrograms.innerHTML += createCard('Руководитель хореографического коллектива', cardInfo);
  dynamicPrograms.innerHTML += createCard('Менеджер по развитию персонала', cardInfo);
  dynamicPrograms.innerHTML += createCard('Управление персоналом', cardInfo);
  dynamicPrograms.innerHTML += createCard('Менеджер по подбору и адаптации персонала', cardInfo);
  dynamicPrograms.innerHTML += createCard('Специалист по подбору и адаптации персонала', cardInfo);
  dynamicPrograms.innerHTML += createCard('Менеджер по оценке персонала', cardInfo);
  dynamicPrograms.innerHTML += createCard('Директор по персоналу', cardInfo);
  dynamicPrograms.innerHTML += createCard('Специалист по кадровому делопроизводству', cardInfo);
  dynamicPrograms.innerHTML += createCard('Специалист по кадровому аудиту', cardInfo);
  dynamicPrograms.innerHTML += createCard('Менеджер по оплате и нормированию труда', cardInfo);
  dynamicPrograms.innerHTML += createCard('Управление проектами', cardInfo);
  dynamicPrograms.innerHTML += createCard('Управление инновационными проектами', cardInfo);
  dynamicPrograms.innerHTML += createCard('Управление качеством', cardInfo);
  dynamicPrograms.innerHTML += createCard('Стратегический менеджмент', cardInfo);
  dynamicPrograms.innerHTML += createCard('Менеджмент в образовании в условиях реализации ФГОС', cardInfo);
  dynamicPrograms.innerHTML += createCard('Менеджмент в сфере гостиничного сервиса', cardInfo);
  dynamicPrograms.innerHTML += createCard('Менеджмент в сфере общественного питания', cardInfo);
  dynamicPrograms.innerHTML += createCard('Менеджмент в сфере развлекательно-досуговых услуг', cardInfo);
  dynamicPrograms.innerHTML += createCard('Менеджмент в сфере туризма и сервиса', cardInfo);
  dynamicPrograms.innerHTML += createCard('Менеджмент в сфере физической культуры и спорта', cardInfo);
  dynamicPrograms.innerHTML += createCard('Документоведение и архивоведение', cardInfo);
  dynamicPrograms.innerHTML += createCard('Финансовый менеджмент', cardInfo);
  dynamicPrograms.innerHTML += createCard('Организационное и документационное обеспечение управления', cardInfo);
  dynamicPrograms.innerHTML += createCard('Делопроизводство в государственных и муниципальных учреждениях', cardInfo);
  dynamicPrograms.innerHTML += createCard('Менеджмент в спортивных учреждениях', cardInfo);
  dynamicPrograms.innerHTML += createCard('Менеджмент в учреждениях культуры', cardInfo);
  dynamicPrograms.innerHTML += createCard('Менеджер здравоохранения', cardInfo);
  dynamicPrograms.innerHTML += createCard('Менеджер образования', cardInfo);
  dynamicPrograms.innerHTML += createCard('Логистика общая', cardInfo);
  dynamicPrograms.innerHTML += createCard('Складская логистика', cardInfo);
  dynamicPrograms.innerHTML += createCard('Транспортная логистика', cardInfo);
  dynamicPrograms.innerHTML += createCard('Закупочная логистика', cardInfo);
  dynamicPrograms.innerHTML += createCard('Государственное и муниципальное управление', cardInfo);
  dynamicPrograms.innerHTML += createCard('Управление развитием региона', cardInfo);

  scrollIntoView(body);
  addListenersToBtns();
  limitCards();
  limitClients();
}

// Economics
const economics = function (page){
  window.history.pushState({'page_id': 2}, '', '/economics');

  headingTitle.innerHTML = 'в сфере экономики';
  dynamicProgramsTitle.innerHTML = 'в сфере экономики';

  dynamicPrograms.innerHTML = createCard('Бухгалтерский учет, анализ и аудит', cardInfo);
  dynamicPrograms.innerHTML += createCard('Бухгалтерский и налоговый учет в организациях малого бизнеса и ИП', cardInfo);
  dynamicPrograms.innerHTML += createCard('Бухгалтерский учет в некоммерческих организациях', cardInfo);
  dynamicPrograms.innerHTML += createCard('Бухгалтерский учет и налогообложение', cardInfo);
  dynamicPrograms.innerHTML += createCard('Международные отношения', cardInfo);
  dynamicPrograms.innerHTML += createCard('Ведение бухгалтерского учета в бюджетных организациях', cardInfo);
  dynamicPrograms.innerHTML += createCard('Бухгалтерский учёт и калькуляция на предприятиях общественного питания', cardInfo);
  dynamicPrograms.innerHTML += createCard('Налоги и налогообложение', cardInfo);
  dynamicPrograms.innerHTML += createCard('Экономика и управление на предприятии', cardInfo);
  dynamicPrograms.innerHTML += createCard('Организация внутреннего контроля на предприятии', cardInfo);
  dynamicPrograms.innerHTML += createCard('Управленческий учет и анализ организации', cardInfo);
  dynamicPrograms.innerHTML += createCard('Управленческий учет и финансовое планирование в организации', cardInfo);
  dynamicPrograms.innerHTML += createCard('Анализ и диагностика финансово-хозяйственной деятельности организации', cardInfo);
  dynamicPrograms.innerHTML += createCard('Финансы и кредит', cardInfo);
  dynamicPrograms.innerHTML += createCard('Финансовый анализ', cardInfo);
  dynamicPrograms.innerHTML += createCard('Внутренний аудит', cardInfo);
  dynamicPrograms.innerHTML += createCard('Страхование', cardInfo);
  dynamicPrograms.innerHTML += createCard('Экономическая безопасность', cardInfo);
  dynamicPrograms.innerHTML += createCard('Внешнеэкономическая деятельность', cardInfo);
  dynamicPrograms.innerHTML += createCard('Рынок ценных бумаг', cardInfo);
  dynamicPrograms.innerHTML += createCard('Региональная экономика', cardInfo);
  dynamicPrograms.innerHTML += createCard('Экономист по оплате и нормированию труда', cardInfo);

  scrollIntoView(body);
  addListenersToBtns();
  limitCards();
  limitClients();
}

// Pedagogy 
const pedagogy  = function (page){
  window.history.pushState({'page_id': 3}, '', '/pedagogy');

  headingTitle.innerHTML = 'в сфере педагогики';
  dynamicProgramsTitle.innerHTML = 'в сфере педагогики';

  dynamicPrograms.innerHTML = createCard('Педагог высшего образования', cardInfo);
  dynamicPrograms.innerHTML += createCard('Педагог обществознания', cardInfo);
  dynamicPrograms.innerHTML += createCard('Педагог истории', cardInfo);
  dynamicPrograms.innerHTML += createCard('Логопедия', cardInfo);
  dynamicPrograms.innerHTML += createCard('Специальное (дефектологическое) образование', cardInfo);
  dynamicPrograms.innerHTML += createCard('Педагог основ безопасности жизнедеятельности', cardInfo);
  dynamicPrograms.innerHTML += createCard('Педагог среднего профессионального образования', cardInfo);
  dynamicPrograms.innerHTML += createCard('Педагог экологии', cardInfo);
  dynamicPrograms.innerHTML += createCard('Педагог-психолог', cardInfo);
  dynamicPrograms.innerHTML += createCard('Педагогика и психология образования', cardInfo);
  dynamicPrograms.innerHTML += createCard('Психолого-педагогическое сопровождение образовательного процесса', cardInfo);
  dynamicPrograms.innerHTML += createCard('Педагог высшей школы', cardInfo);
  dynamicPrograms.innerHTML += createCard('Педагогика раннего развития', cardInfo);
  dynamicPrograms.innerHTML += createCard('Педагогическая деятельность в области воспитания и социализации личности', cardInfo);
  dynamicPrograms.innerHTML += createCard('Педагогика и методика дошкольного образования с дополнительной подготовкой в области предшкольной подготовки', cardInfo);
  dynamicPrograms.innerHTML += createCard('Дошкольная педагогика и психология в условиях реализации ФГОС ДО', cardInfo);
  dynamicPrograms.innerHTML += createCard('Общая педагогика: теория и методика обучения в рамках реализации ФГОС', cardInfo);
  dynamicPrograms.innerHTML += createCard('Педагогика и методика начального образования в рамках реализации ФГОС', cardInfo);
  dynamicPrograms.innerHTML += createCard('Педагогика и психология дошкольного образования в условиях реализации ФГОС ДО', cardInfo);
  dynamicPrograms.innerHTML += createCard('Подготовка детей к школьному обучению в дошкольной образовательной организации', cardInfo);
  dynamicPrograms.innerHTML += createCard('Физическая культура в дошкольных образовательных организациях в рамках реализации ФГОС (базовая)', cardInfo);
  dynamicPrograms.innerHTML += createCard('Физическая культура в дошкольных образовательных организациях в рамках реализации ФГОС', cardInfo);
  dynamicPrograms.innerHTML += createCard('Физическая культура в образовательных организациях в рамках реализации ФГОС (базовая)', cardInfo);
  dynamicPrograms.innerHTML += createCard('Физическая культура в образовательных организациях в рамках реализации ФГОС', cardInfo);
  dynamicPrograms.innerHTML += createCard('Физкультурно-оздоровительная деятельность по плаванию с детьми дошкольного возраста', cardInfo);
  dynamicPrograms.innerHTML += createCard('Библиотечно-педагогическая деятельность', cardInfo);
  dynamicPrograms.innerHTML += createCard('Инструктор по детскому фитнесу', cardInfo);
  dynamicPrograms.innerHTML += createCard('Тренер-преподаватель по адаптивной физической культуре', cardInfo);
  dynamicPrograms.innerHTML += createCard('Педагогика и методика начального образования', cardInfo);
  dynamicPrograms.innerHTML += createCard('Дошкольная педагогика и психология', cardInfo);
  dynamicPrograms.innerHTML += createCard('Дошкольная педагогика, воспитатель ДОО', cardInfo);
  dynamicPrograms.innerHTML += createCard('Методист дошкольного образования', cardInfo);
  dynamicPrograms.innerHTML += createCard('Методическое обеспечение среднего профессионального образования', cardInfo);
  dynamicPrograms.innerHTML += createCard('Методология и технология педагогической деятельности', cardInfo);
  dynamicPrograms.innerHTML += createCard('Музыкальный руководитель в дошкольной образовательной организации', cardInfo);
  dynamicPrograms.innerHTML += createCard('Музыкальное воспитание и эстетическое развитие детей в дошкольной образовательной организации', cardInfo);
  dynamicPrograms.innerHTML += createCard('Организация и проведение практических занятий по адаптивной физической культуре', cardInfo);
  dynamicPrograms.innerHTML += createCard('Организация и проведение тренировочного процесса', cardInfo);
  dynamicPrograms.innerHTML += createCard('Организация и содержание логопедической работы', cardInfo);

  scrollIntoView(body);
  addListenersToBtns();
  limitCards();
  limitClients();
}

// Psychology
const psychology = function (page){
  window.history.pushState({'page_id': 4}, '', '/psychology');


  headingTitle.innerHTML = 'в сфере психологии';
  dynamicProgramsTitle.innerHTML = 'в сфере психологии';

  dynamicPrograms.innerHTML = createCard('Психология', cardInfo);
  dynamicPrograms.innerHTML += createCard('Психология: Очно-заочная (вечерняя) форма обучения', cardInfo);
  dynamicPrograms.innerHTML += createCard('Клиническая психология', cardInfo);
  dynamicPrograms.innerHTML += createCard('Психология личности', cardInfo);
  dynamicPrograms.innerHTML += createCard('Социальная психология в бизнесе', cardInfo);
  dynamicPrograms.innerHTML += createCard('Социальная психология', cardInfo);
  dynamicPrograms.innerHTML += createCard('Психология служебной деятельности', cardInfo);
  dynamicPrograms.innerHTML += createCard('Спортивная психология', cardInfo);
  dynamicPrograms.innerHTML += createCard('Психолог-тренер', cardInfo);
  dynamicPrograms.innerHTML += createCard('Нейропсихология', cardInfo);
  dynamicPrograms.innerHTML += createCard('Акмеология и психология развития', cardInfo);
  dynamicPrograms.innerHTML += createCard('Школьный психолог', cardInfo);
  dynamicPrograms.innerHTML += createCard('Детская психология', cardInfo);
  dynamicPrograms.innerHTML += createCard('Психология семьи с основами психотерапии', cardInfo);
  dynamicPrograms.innerHTML += createCard('Психология дошкольного образования в условиях реализации ФГОС ДО', cardInfo);
  dynamicPrograms.innerHTML += createCard('Социальная работа', cardInfo);
  dynamicPrograms.innerHTML += createCard('Социальный педагог', cardInfo);
  dynamicPrograms.innerHTML += createCard('Руководитель организации социального обслуживания', cardInfo);
  dynamicPrograms.innerHTML += createCard('Организация социального обслуживания населения', cardInfo);
  dynamicPrograms.innerHTML += createCard('Деятельность органов опеки и попечительства в отношении несовершеннолетних', cardInfo);
  dynamicPrograms.innerHTML += createCard('Политология', cardInfo);
  dynamicPrograms.innerHTML += createCard('Религиоведение', cardInfo);
  dynamicPrograms.innerHTML += createCard('Культурология', cardInfo);
  dynamicPrograms.innerHTML += createCard('Социология', cardInfo);
  dynamicPrograms.innerHTML += createCard('Философия', cardInfo);

  scrollIntoView(body);
  addListenersToBtns();
  limitCards();
  limitClients();
}

// Healthcare
const healthcare = function (page){
  window.history.pushState({'page_id': 5}, '', '/healthcare');

  headingTitle.innerHTML = 'в сфере медицины';
  dynamicProgramsTitle.innerHTML = 'в сфере медицины';

  dynamicPrograms.innerHTML = createCard('Клиническая фармакология', cardInfo);
  dynamicPrograms.innerHTML += createCard('Психиатрия', cardInfo);
  dynamicPrograms.innerHTML += createCard('Психотерапия', cardInfo);
  dynamicPrograms.innerHTML += createCard('Сестринский уход в физиотерапевтической практике', cardInfo);
  dynamicPrograms.innerHTML += createCard('Акушерское дело', cardInfo);
  dynamicPrograms.innerHTML += createCard('Сестринское дело', cardInfo);
  dynamicPrograms.innerHTML += createCard('Организация сестринского дела', cardInfo);
  dynamicPrograms.innerHTML += createCard('Сестринское дело в косметологии', cardInfo);
  dynamicPrograms.innerHTML += createCard('Сестринское дело в педиатрии', cardInfo);
  dynamicPrograms.innerHTML += createCard('Сестринское дело в онкологии', cardInfo);
  dynamicPrograms.innerHTML += createCard('Сестринское дело в терапии', cardInfo);
  dynamicPrograms.innerHTML += createCard('Сестринское дело в хирургии', cardInfo);
  dynamicPrograms.innerHTML += createCard('Лабораторное дело', cardInfo);
  dynamicPrograms.innerHTML += createCard('Операционное дело', cardInfo);
  dynamicPrograms.innerHTML += createCard('Общая практика', cardInfo);
  dynamicPrograms.innerHTML += createCard('Медицинская сестра врача общей практики', cardInfo);
  dynamicPrograms.innerHTML += createCard('Медико-социальная помощь', cardInfo);
  dynamicPrograms.innerHTML += createCard('Организация здравоохранения и общественное здоровье', cardInfo);
  dynamicPrograms.innerHTML += createCard('Медицинская статистика', cardInfo);
  dynamicPrograms.innerHTML += createCard('Судебно-медицинская экспертиза(СМП)', cardInfo);
  dynamicPrograms.innerHTML += createCard('Судебно-медицинская экспертиза', cardInfo);
  dynamicPrograms.innerHTML += createCard('Диетология', cardInfo);
  dynamicPrograms.innerHTML += createCard('Наркология', cardInfo);
  dynamicPrograms.innerHTML += createCard('Онкология', cardInfo);
  dynamicPrograms.innerHTML += createCard('Остеопатия', cardInfo);
  dynamicPrograms.innerHTML += createCard('Ревматология', cardInfo);
  dynamicPrograms.innerHTML += createCard('Рентгенология', cardInfo);
  dynamicPrograms.innerHTML += createCard('Паразитология', cardInfo);
  dynamicPrograms.innerHTML += createCard('Стоматология', cardInfo);
  dynamicPrograms.innerHTML += createCard('Стоматология общей практики', cardInfo);
  dynamicPrograms.innerHTML += createCard('Стоматология детская', cardInfo);
  dynamicPrograms.innerHTML += createCard('Стоматология хирургическая', cardInfo);
  dynamicPrograms.innerHTML += createCard('Стоматология ортопедическая', cardInfo);
  dynamicPrograms.innerHTML += createCard('Стоматология терапевтическая', cardInfo);
  dynamicPrograms.innerHTML += createCard('Педиатрия', cardInfo);
  dynamicPrograms.innerHTML += createCard('Патологическая анатомия', cardInfo);
  dynamicPrograms.innerHTML += createCard('Сексология', cardInfo);
  dynamicPrograms.innerHTML += createCard('Фтизиатрия', cardInfo);
  dynamicPrograms.innerHTML += createCard('Гистология', cardInfo);
  dynamicPrograms.innerHTML += createCard('Эпидемиология', cardInfo);
  dynamicPrograms.innerHTML += createCard('Эндоскопия', cardInfo);
  dynamicPrograms.innerHTML += createCard('Бактериология', cardInfo);
  dynamicPrograms.innerHTML += createCard('Фельдшер', cardInfo);
  dynamicPrograms.innerHTML += createCard('Дезинфекционное дело', cardInfo);
  dynamicPrograms.innerHTML += createCard('Травматология и ортопедия', cardInfo);
  dynamicPrograms.innerHTML += createCard('Анестезиология и реаниматология', cardInfo);
  dynamicPrograms.innerHTML += createCard('Гигиеническое воспитание', cardInfo);
  dynamicPrograms.innerHTML += createCard('Лечебная физкультура и спортивная медицина', cardInfo);

  scrollIntoView(body);
  addListenersToBtns();
  limitCards();
  limitClients();
}

// Informatics
const informatics = function (page){
  window.history.pushState({'page_id': 6}, '', '/informatics');

  headingTitle.innerHTML = 'в сфере информатики';
  dynamicProgramsTitle.innerHTML = 'в сфере информатики';

  dynamicPrograms.innerHTML = createCard('Информатика и вычислительная техника', cardInfo);
  dynamicPrograms.innerHTML += createCard('Вычислительные машины, комплексы, системы и сети', cardInfo);
  dynamicPrograms.innerHTML += createCard('Технология разработки программного обеспечения', cardInfo);
  dynamicPrograms.innerHTML += createCard('Технология разработки мобильного приложения', cardInfo);
  dynamicPrograms.innerHTML += createCard('Программное обеспечение средств вычислительной техники и автоматизированных систем', cardInfo);
  dynamicPrograms.innerHTML += createCard('Информационные управляющие комплексы систем безопасности объектов', cardInfo);
  
  scrollIntoView(body);
  addListenersToBtns();
  limitCards();
  limitClients();
}

// Jurisprudence
const jurisprudence = function (page){
  window.history.pushState({'page_id': 7}, '', '/jurisprudence');

  headingTitle.innerHTML = 'в сфере юриспруденции';
  dynamicProgramsTitle.innerHTML = 'в сфере юриспруденции';

  dynamicPrograms.innerHTML = createCard('Юриспруденция', cardInfo);
  dynamicPrograms.innerHTML += createCard('Сделки с недвижимостью', cardInfo);
  dynamicPrograms.innerHTML += createCard('Специалист договорного отдела', cardInfo);
  dynamicPrograms.innerHTML += createCard('Юриспруденция: гражданско-правовой профиль', cardInfo);
  dynamicPrograms.innerHTML += createCard('Правовое сопровождение социального обеспечения граждан Р.Ф.', cardInfo);
  
  scrollIntoView(body);
  addListenersToBtns();
  limitCards();
  limitClients();
}

// Marketing 
const marketing = function (page){
  window.history.pushState({'page_id': 8}, '', '/marketing');

  headingTitle.innerHTML = 'в сфере маркетинга';
  dynamicProgramsTitle.innerHTML = 'в сфере маркетинга';

  dynamicPrograms.innerHTML = createCard('Менеджер по маркетингу', cardInfo);
  dynamicPrograms.innerHTML += createCard('Интернет-маркетинг', cardInfo);
  dynamicPrograms.innerHTML += createCard('Директор по маркетингу', cardInfo);
  dynamicPrograms.innerHTML += createCard('Реклама и PR (Рссо)', cardInfo);
  dynamicPrograms.innerHTML += createCard('PR менеджер', cardInfo);
  dynamicPrograms.innerHTML += createCard('Основы брендинга и рекламы', cardInfo);
  dynamicPrograms.innerHTML += createCard('Журналистика', cardInfo);
  
  scrollIntoView(body);
  addListenersToBtns();
  limitCards();
  limitClients();
}

// Technology
const technology = function (page){
  window.history.pushState({'page_id': 9}, '', '/technology');

  headingTitle.innerHTML = 'в технической сфере';
  dynamicProgramsTitle.innerHTML = 'в технической сфере';

  dynamicPrograms.innerHTML = createCard('Промышленное и гражданское строительство', cardInfo);
  dynamicPrograms.innerHTML += createCard('Проектирование зданий и сооружений', cardInfo);
  dynamicPrograms.innerHTML += createCard('Эксплуатация зданий и сооружений', cardInfo);
  dynamicPrograms.innerHTML += createCard(' Электроэнергетические системы и сети', cardInfo);
  dynamicPrograms.innerHTML += createCard('Электрооборудование и электрохозяйство предприятий, организаций и учреждений', cardInfo);
  dynamicPrograms.innerHTML += createCard('Теплоэнергетика и теплотехника', cardInfo);
  dynamicPrograms.innerHTML += createCard('Промышленная теплоэнергетика', cardInfo);
  dynamicPrograms.innerHTML += createCard('Охрана труда', cardInfo);
  dynamicPrograms.innerHTML += createCard('Организация системы управления охраной труда', cardInfo);
  dynamicPrograms.innerHTML += createCard('Охрана труда и техносферная безопасность', cardInfo);
  dynamicPrograms.innerHTML += createCard('Управление охраной труда и обеспечение безопасности на рабочих местах', cardInfo);
  dynamicPrograms.innerHTML += createCard('Техносферная безопасность', cardInfo);
  dynamicPrograms.innerHTML += createCard('Технология транспортных процессов в области организации и безопасности дорожного движения', cardInfo);

  scrollIntoView(body);
  addListenersToBtns();
  limitCards();
  limitClients();
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

  choosenProgramInputsArr.forEach(input => {
    input.value = clickedProgramTitle;
  })

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
  
  loadMoreBtn.addEventListener('click', () => {
    cardsTotal = cardsTotal+5;
    cardsArr.forEach((card, index) => {
      if(index >= cardsTotal){
        return;
      }else{
        card.classList.add('show');
      }
    })
  })
}

// Display only 5 clients at the time
function limitClients(){
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
    clientsTotal = clientsTotal+6;
    clietnsArr.forEach((card, index) => {
      if(index >= clientsTotal){
        return;
      }else{
        card.classList.add('show');
      }
    })
  })
}

limitCards();
limitClients();

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

showNameInput();

// Prevent smooth scroll
// source: http://stackoverflow.com/a/35611393/992504
document.getElementsByTagName("body")[0].addEventListener("wheel",function (event) {
  // exception for ACE Editor, JS text editor used by sites like GitHub
  if (event.target.classList.contains('ace_content')) {
    return;
  }
  event.stopPropagation();
}, true);