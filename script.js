"use strict";

const summaryList = document.querySelector(".summary__list");

const summary = [
  "Front-End Developer with 3+ years of professional Angular experience, building scalable web applications. Experienced in modern UI develop- ment, component-based architecture, and Agile teamwork.",
  "Currently pursuing a Master's degree in Informatics in Prague and seeking a Front-End Developer role.",
,"Ready to join immediately"
];

summary.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.classList.add("summary__item");
  listItem.innerText = item;
  summaryList.appendChild(listItem);
});
