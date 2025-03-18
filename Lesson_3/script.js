const images = [
  {
      url: "img/pic01.jpg",
      title: "Белый орёл",
  },
  {
      url: "img/pic02.jpg",
      title: "Африка",
  },
  {
      url: "img/pic03.jpg",
      title: "Пейзаж",
  },
  {
      url: "img/pic04.jpg",
      title: "Море",
  },
  {
      url: "img/pic05.jpg",
      title: "Пляж",
  },
  {
      url: "img/pic06.jpg",
      title: "Лес",
  },
  {
      url: "img/pic07.jpg",
      title: "Природа",
  },
  {
      url: "img/pic08.jpg",
      title: "Чайка",
  },
];

function createimageList() {
  
    const appDiv = document.querySelector('.app');

    const ul = document.createElement('ul');
    ul.style.width = '1200px';
    ul.style.margin = '0 auto';

    ul.style.display = 'flex';
    ul.style.gap = '100px';
    ul.style.flexWrap = 'wrap';
    ul.style.alignContent = 'center';
    ul.style.listStyleType = 'none';

    images.forEach(image => {
        const li = document.createElement('li');
        li.style.maxWidth = '50%';
        li.style.maxWidth = '300px';
        li.style.maxHeight = '300px';
        
        
        const img = document.createElement('img');
        img.src = image.url;
        img.alt = image.title;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        
    
        const title = document.createElement('p');
        title.textContent = image.title;
        title.style.color = '#555';
        title.style.fontSize = '18px';


        li.appendChild(img);
        li.appendChild(title);
        ul.appendChild(li);
    });

    appDiv.appendChild(ul);
}

createimageList();
