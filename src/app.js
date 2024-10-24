/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let value = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let palo = ["♦", "♥", "♠", "♣"];

  // Función para generar una nueva carta
  const generateCard = () => {
    // Random number
    let randomValue = Math.floor(Math.random() * value.length);
    let finalValue = document.querySelector("#number");
    finalValue.innerText = value[randomValue];

    // Random card suit
    let randomPalo = Math.floor(Math.random() * palo.length);
    let finalPalo = document.querySelectorAll(".palo");
    finalPalo.forEach(card => {
      card.innerHTML = palo[randomPalo];
    });

    // Asignar color
    const assignColor = palo => {
      if (palo === "♦" || palo === "♥") {
        finalValue.classList.add("red");
        finalPalo.forEach(card => card.classList.add("red"));
      } else {
        finalValue.classList.remove("red");
        finalPalo.forEach(card => card.classList.remove("red"));
      }
    };
    assignColor(palo[randomPalo]);

    // Rotar el palo de abajo
    document.querySelector("#paloDown").classList.add("rotated");
  };

  // Generar la primera carta al cargar la página
  generateCard();

  // Evento para generar nueva carta al hacer clic en el botón
  document
    .querySelector("#generateCard")
    .addEventListener("click", generateCard);
};
