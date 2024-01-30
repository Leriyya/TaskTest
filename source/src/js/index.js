const main = () => {
  const tariffs = document.querySelectorAll(".tariffs__card");
  let currentSymbol = 0;
  let isPeriodDay = true;

  tariffs.forEach((price) => {
    const symbol = price.querySelector(".tariffs__symbol");
    const period = price.querySelector(".tariffs__period");

    symbol.addEventListener("click", () => {
      currentSymbol = (currentSymbol + 1) % cardInfo.length;

      tariffs.forEach((tariff) => {
        const symbol = tariff.querySelector(".tariffs__symbol");
        const price = tariff.querySelector(".tariffs__days");
        const cardId = tariff.getAttribute("cardId");

        symbol.textContent = cardInfo[currentSymbol].symbol;
        price.textContent = isPeriodDay
          ? cardInfo[currentSymbol].priceDay[cardId]
          : cardInfo[currentSymbol].priceMonth[cardId];
      });
    });

    period.addEventListener("click", () => {
      isPeriodDay = !isPeriodDay;
      tariffs.forEach((tariff) => {
        const period = tariff.querySelector(".tariffs__period");
        const price = tariff.querySelector(".tariffs__days");
        const cardId = tariff.getAttribute("cardId");

        period.textContent = !isPeriodDay ? "/Months" : "/Days";
        price.textContent = isPeriodDay
          ? cardInfo[currentSymbol].priceDay[cardId]
          : cardInfo[currentSymbol].priceMonth[cardId];
      });
    });
  });

  const cardInfo = [
    {
      symbol: "$",
      priceMonth: [232, 111, 455],
      priceDay: [23, 14, 42],
    },
    {
      symbol: "€",
      priceMonth: [232, 311, 425],
      priceDay: [33, 14, 34],
    },
    {
      symbol: "₽",
      priceMonth: [672, 441, 755],
      priceDay: [63, 44, 32],
    },
  ];
};

document.addEventListener("DOMContentLoaded", main);
