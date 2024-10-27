const galleryDisplay = document.querySelector(".gallery");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

const imageUrls = [
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
];

galleryDisplay.setAttribute("src", imageUrls[0]);

let count = 0;

class Gallery {
  previous() {
    count--;
    if (count < 0) {
      count = imageUrls.length - 1;
    }
    galleryDisplay.setAttribute("src", imageUrls[count]);
  }

  next() {
    count++;
    if (count >= imageUrls.length) {
      count = 0;
    }
    galleryDisplay.setAttribute("src", imageUrls[count]);
  }
}

const gallery = new Gallery();

next.addEventListener("click", () => gallery.next());
previous.addEventListener("click", () => gallery.previous());
