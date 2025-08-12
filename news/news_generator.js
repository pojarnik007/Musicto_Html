let nicks = ['jerry', 'Zayac',
    'sasuke', 'goru',
    'kiko', 'pandos',
    'cato', 'terminator',
    'negative', 'black rabbit',
    'cool school', 'hikka',
    'sad xxx', 'Commissar',
    'bom-bon', 'waffle', 'MERAGOR']
let dates = ['14 dec in 23:30',
    '16 nov in 20:00',
    '3 mar in 12:55',
    '9 jan in 6:43',
    '7 dec in 5:15', '4 nov in 15:20', '16 mar in 18:00', '18 jan in 2:28']
let text_test = ['Hello, World!!!!',

    'Warhammer 40,000[K 1] — настольная игра-варгейм, ' +
    'разработанная и издаваемая британской компанией Games Workshop.' +
    ' Действие игры происходит в мрачной технофэнтезийной вымышленной вселенной.' +
    ' Игра была создана Риком Пристли и Энди Чамберсом в 1987 году как переработка ' +
    'в духе научной фантастики более старой настольной игры Warhammer Fantasy. Warhammer' +
    ' Fantasy и Warhammer 40,000 объединяют ряд элементов игровой механики, схожие темы.' +
    ' Для правил Warhammer 40,000 периодически выпускаются дополнения, описывающие новые' +
    ' участвующие стороны или необычные формы проведения игры, к примеру, как осада городов' +
    ' или сражения более многочисленных армий, чем допускаются стандартными правилами. ' +
    'Последняя девятая редакция основных правил была выпущена в июле 2020 года[⇨].',

    'Кролики обладают полными, овальными телами. Их уши достигают длины более 10 см, возможно,' +
    ' являются адаптацией к обнаружению хищников,' +
    ' также для охлаждения тела. Размеры и вес кролика колеблются от 20 см в длину и 0,4 кг веса до 50 см',

    'So long physical buttons and hello on-screen controls.',

    'Finally got a personalized hello from Earl.']
let icons = ['../avatars/1.jpg'
    , '../avatars/2.jpg'
    , '../avatars/3.jpg'
    , '../avatars/4.jpg'
    , '../avatars/5.jpg'
    , '../avatars/6.jpg'
    , '../avatars/7.jpg'
    , '../avatars/8.jpg'
    , '../avatars/9.jpg'
    , '../avatars/10.jpg'
    , '../avatars/11.jpg'
    , '../avatars/12.jpg'
    , '../avatars/13.jpg'
    , '../avatars/14.jpg'
    , '../avatars/15.jpg'
    , '../avatars/16.jpg'
    , '../avatars/17.jpg'];

function create_button() {
    let button_container = document.createElement("section");
    button_container.className = 'button_container';
    let button_back = document.createElement('div');
    button_back.className = 'button_background';
    let button1 = document.createElement('button');
    button1.className = 'more'
    button1.type = 'submit';
    button1.innerText = 'Load more';
    button1.addEventListener('click', create_post);
    document.body.append(button_container);
    button_container.append(button_back);
    button_back.append(button1);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function create_text_post() {
    let container = document.createElement('section');
    container.className = 'container';
    let ground = document.createElement('div');
    ground.className = 'ground_post';
    let ico = document.createElement('div');
    ico.className = 'icon';
    let nick = document.createElement('div');
    nick.className = 'nick';
    let date = document.createElement('div');
    date.className = 'date';
    let content = document.createElement('div');
    content.className = 'content';
    let like = document.createElement('div');
    like.className = 'like';
    let comment = document.createElement('div');
    comment.className = 'comment';
    let repost = document.createElement('div');
    repost.className = 'repost';
    let like_img = document.createElement('img')
    like_img.className = 'like_img';
    like_img.src = '../pictures/gray/heart_gray.png';
    let comment_img = document.createElement('img');
    comment_img.src = '../pictures/gray/comment_gray.png';
    let repost_img = document.createElement('img');
    repost_img.src = '../pictures/gray/share_gray.png';
    let nick_font = document.createElement('div');
    nick_font.className = 'nick_font';
    let date_font = document.createElement('div');
    date_font.className = 'date_font';
    let content_font = document.createElement('div');
    content_font.className = 'content_font';
    // вставка
    let o = 0;
    o = getRandomInt(5);
    content_font.innerText = text_test[o];
    ground.style.height = 400 + (text_test[o].length / 42) * 35 + 'px';
    container.style.height = 500 + (text_test[o].length / 42) * 35 + 'px';
    content.style.height = 180 + (text_test[o].length / 42) * 35 + 'px';
    document.body.append(container);
    container.append(ground);
    ground.append(ico);
    ground.append(nick);
    ground.append(date);
    ground.append(content);
    ground.append(like);
    like.append(like_img);
    ground.append(comment);
    comment.append(comment_img);
    ground.append(repost);
    repost.append(repost_img);
    let avatar = document.createElement('img');
    o = getRandomInt(17);
    avatar.src = icons[o];
    nick_font.innerText = nicks[o];
    o = getRandomInt(8);
    date_font.innerText = dates[o];
    ico.append(avatar);
    nick.append(nick_font);
    date.append(date_font);
    content.append(content_font);
}

function create_post() {
    for (let i = 0; i < 100; i++) {
        create_text_post();
    }
    create_button();
}

create_post();


