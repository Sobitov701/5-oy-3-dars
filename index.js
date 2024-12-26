// const title = document.getElementById("greet");

// greet &&
//   greet.addEventListener("click", function () {
//     title.style.color="black"
//   });

// console.log(title);

//Rangni tasodifiy olish uchun Math.random()ni ishlatish.

// 2-misol
// Vazifa: Foydalanuvchi input maydoniga matn yozadi. "Nusxa olish" tugmasi bosilganda, inputdagi qiymat clipboardga nusxalanadi va sahifada xabar ("Matn nusxalandi!") chiqariladi.

//3-misol
// Vazifa: Sahifada matn yozilgan bo‘lsin. Foydalanuvchi qidiruv maydoniga so‘z kiritadi va "Qidirish" tugmasini bosadi. Sahifada shu so‘z bo‘lsa, uning orqa foni sariq rangga bo‘yaladi.

// const massage = document.getElementById("massage");
// const text = document.getElementById("text");
// const button = document.getElementById("button");

// button &&
//   button.addEventListener("click", function () {
//     if (text.value) {
//       let textMassage = massage.innerHTML.trim();
//       textMassage = textMassage.replaceAll(
//         text.value,
//         `<span style="background-color: yellow">${text.value}</span>`
//       );
//       massage.innerHTML = textMassage;
//     }
//   });

//4-misol
// Vazifa: Sahifada bir nechta paragraflar bo‘lsin. "Yashirish" tugmasi bosilganda, barcha paragraflar yashiriladi. "Ko‘rsatish" tugmasi bosilganda, ular qayta ko‘rinadigan bo‘lsin.

// const text = document.getElementById("text");

// text &&
//   text.addEventListener("click", function () {
//     text.style.display = "block";
//   });

//5-misol
//Vazifa: Sahifada bir nechta tugma joylashtirilgan bo‘lsin. Har bir tugma bosilganda butun sahifaning fon rangi o‘zgaradi. Tugmalar har xil ranglar uchun javob beradi (masalan: qizil, yashil, ko‘k).

// const buttons = document.querySelectorAll("button");

// buttons.length &&
//   buttons.forEach((button) => {
//     button &&
//       button.addEventListener("click", function () {
//         if (this.innerHTML == `qizil`) {
//           document.body.style.backgroundColor = "red";
//         }
//         if (this.innerHTML == `yashil`) {
//           document.body.style.backgroundColor = "green";
//         }
//         if (this.innerHTML == `kok`) {
//           document.body.style.backgroundColor = "blue";
//         }
//       });
//   });

//6-misol
// Vazifa: Sahifada matnlar yozilgan bo‘lsin. Foydalanuvchi matn ustiga bosganda uning shrift o‘lchami kattalashadi.

// const elements = document.querySelectorAll("p");

// elements.length &&
//   elements.forEach((element) => {
//     element &&
//       element.addEventListener("click", function () {
//         element.style.fontSize = "32px";
//       });
//   });

//7-misol
// Vazifa: Sahifada bir input maydoni va bir matn ko‘rsatiladigan bo‘sh joy bo‘lsin. Foydalanuvchi inputga nimadir yozganda, yozilgan matn real vaqt rejimida bo‘sh joyga ko‘chib ko‘rsatiladi.

// const text2 = document.querySelector("#text2");
// const text = document.querySelector("#text");

// text2.addEventListener("input", function () {
//   text.textContent = text2.value;
// });

//8-misol
//Vazifa: Foydalanuvchiga parol maydoni va "Ko‘rsatish/Yashirish" tugmasi ko‘rsatiladi. Tugma bosilganda parol ko‘rinadigan yoki yashirin holatga o‘tadi.

//9-misol
//Vazifa: Sahifada bitta kvadrat shakl bo‘lsin. Foydalanuvchi kvadratni yuqoriga, pastga, chapga yoki o‘ngga ko‘chirish uchun tugmalardan foydalanadi.

// const button = document.querySelector("button");

// button &&
//   button.addEventListener("click", function () {
//     button.style.marginLeft = "100px";
//     button.style.marginRight = "100px";
//     button.style.marginTop = "100px";
//     button.style.marginBottom = "100px";
//   });

//10-misol
//Vazifa: Sahifada "Tasodifiy rasm ko‘rsatish" tugmasi bo‘lsin. Tugma bosilganda tasodifiy rasm (oldindan berilgan URL ro‘yxatidan) sahifada ko‘rsatiladi.

const img = document.querySelector("img");
const button = document.querySelector("button");

const imges = [
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/id/238/200/300",
  "https://picsum.photos/id/239/200/300",
  "https://picsum.photos/id/240/200/300",
  "https://picsum.photos/id/232/200/300",
  "https://picsum.photos/id/235/200/300",
];

button &&
  button.addEventListener("click", function () {
    let random = Math.floor(Math.random() * imges.length);
    img.setAttribute("src", imges[random]);
  });

//11-misol
//Vazifa: Sahifada bir nechta paragraflar bo‘lsin. Har bir paragraf yonida "Yashirish" tugmasi bo‘lsin. Tugma bosilganda faqat o‘sha paragraf yashiriladi.

//12-misol
//Vazifa: Sahifada bir nechta paragraflar yozilgan bo‘lsin. Foydalanuvchi har bir paragrafga bosganda, o‘sha matn "Salom, dunyo!" ga almashtiriladi.

// const text = document.querySelectorAll("p");

// text.forEach((element) => {
//   element &&
//     element.addEventListener("click", function () {
//       if (this.innerHTML == "birinchi") {
//         this.innerHTML = "Salom, dunyo!";
//       }
//       if (this.innerHTML == "ikkinchi") {
//         this.innerHTML = "Salom, dunyo!";
//       }
//       if (this.innerHTML == "uchinchi") {
//         this.innerHTML = "Salom, dunyo!";
//       }
//     });
// });
