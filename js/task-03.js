
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryEl = document.querySelector('.gallery')
const galleryitem = images.map(image => `<li><img src="${image.url}"/></li>`).join('');
galleryEl.insertAdjacentHTML("beforeend", galleryitem)


const style = `
  <style>
    .gallery {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      padding: 0;
      }

      .gallery li { 
      margin: 5px;
      }

      .gallery img {
      max-width: 50%;
      }
  </style>`;

    document.head.insertAdjacentHTML('beforeend', style);