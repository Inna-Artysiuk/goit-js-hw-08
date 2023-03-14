// Add imports above this line
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
// Change code below this line

// пошук галереї на сторінці
const gallery = document.querySelector('.gallery');

// створення пустого масиву для додавання елементів
const items = [];

// перебирання масиву об'єктів з файлу './gallery-items.js'
galleryItems.forEach(element => {
  // створення тегу посилання
  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = element.original;

  // створення тегу зображення
  const galleryImage = document.createElement('img');

  // додавання класу до зображення
  galleryImage.classList.add('gallery__image');

  // додавання малого зображення з властивості об'єкта './gallery-items.js'
  galleryImage.src = element.preview;

  // додавання атрибуту title з властивості об'єкта './gallery-items.js'
  galleryImage.setAttribute('title', element.description);

  // додавання тексту для alt з властивості об'єкта './gallery-items.js'
  galleryImage.alt = element.description;

  galleryLink.append(galleryImage); // вставлення зображення в посилання
  items.push(galleryLink); // вставлення посилання в масив елементів
});

// додавання створених елементів до галереї через розпилення
gallery.append(...items);

// додавання затримки для опису зображення
new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
