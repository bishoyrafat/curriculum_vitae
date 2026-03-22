"use strict";

const summaryList = document.querySelector(".summary__list");

const summary = [

  "Front-End Developer with 3+ years of experience specializing in Angular, delivering scalable andhigh-performance web applications. Strong background in modern UI development, componentbased architecture, and collaborating in Agile environments",
"Currently pursuing a Master’s degree in Informatics in Prague and seeking a Front-End Developer rolewhere I can contribute to building efficient, user-focused interfaces while continuing to growtechnically. Available to start immediately"
];


summary.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.classList.add("summary__item");
  listItem.innerText = item;
  summaryList.appendChild(listItem);
});
