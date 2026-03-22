"use strict";
const infoContainer = document.querySelector(".info__container");
const summaryList = document.querySelector(".summary__list");

const infoData = [
  {
    class: "location",
    icon: "assets/icons/location.svg",
    text: "Prague, Czech Republic",
    href: "https://maps.app.goo.gl/erVmpaMeQLgwVgtt5",
  },
  {
    class: "phone",
    icon: "assets/icons/phone.svg",
    text: "+420 776 735 013",
    href: "tel:+420776735013",
  },
  {
    class: "email",
    icon: "assets/icons/envelop.svg",
    text: "Bishoyrafat@yahoo.com",
    href: "mailto:Bishoyrafat@yahoo.com",
  },
  {
    class: "linkedin",
    icon: "assets/icons/linkedin2.svg",
    text: "LinkedIn.com/in/aziz-bishoy",
    href: "https://www.linkedin.com/in/aziz-bishoy/",
  },
  {
    class: "github",
    icon: "assets/icons/github.svg",
    text: "GitHub.com/bishoyrafat",
    href: "https://www.GitHub.com/bishoyrafat",
  },
];

const summaryData = [
  "Front-End Developer with 3+ years of experience specializing in Angular, delivering scalable andhigh-performance web applications. Strong background in modern UI development, componentbased architecture, and collaborating in Agile environments",
  "Currently pursuing a Master’s degree in Informatics in Prague and seeking a Front-End Developer rolewhere I can contribute to building efficient, user-focused interfaces while continuing to growtechnically. Available to start immediately",
];

infoData.forEach((el) => {
  console.log("info__box--" + el.class);
  const infoHtml = `
               <div class="${"info__box  info__box--" + el.class}">
                    <svg class="info__icon">
                        <use xlink:href="${el.icon}"></use>
                    </svg>
                    <a class="${"info__" + el.class}" target="_blank" href="${el.href}"> ${el.text} </a>
                </div>
`;

  infoContainer.insertAdjacentHTML("beforeend", infoHtml);
});

summaryData.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.classList.add("summary__item");
  listItem.innerText = item;
  summaryList.appendChild(listItem);
});
