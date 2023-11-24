const cardLikeList = document.querySelectorAll(".card__icons_like");
const missCardLikeList = document.querySelectorAll(
  ".miss__card-icons_type_like"
);

cardLikeList.forEach((like) => {
  like.addEventListener("click", function () {
    this.classList.toggle("card__icons_like-fill");
    this.classList.toggle("card__icons_like");
  });
});

missCardLikeList.forEach((like) => {
  like.addEventListener("click", function () {
    this.classList.toggle("card__icons_miss-like-fill");
    this.classList.toggle("miss__card-icons_type_like");
  });
});
