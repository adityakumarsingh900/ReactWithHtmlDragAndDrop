import {
  setInLocalStorage,
  getFromLocalStorage,
} from "../../../utils/storage";
import ListEntity from "../../../entities/list";
import CardEntity from "../../../entities/card";

function getLocalList() {
    const l = getFromLocalStorage("list");
    if (!l) return [{ name: "Important Things" }, { name: "Things I want to do" }];
    return JSON.parse(l).map(list => new ListEntity(list));
};

function saveListOnLocal(data) {
    setInLocalStorage("list", JSON.stringify(data));
}

function getCardsList(name) {
    const l = getFromLocalStorage(`card_${name}`);
    if (!l) return name === "card_Things I want to do"
      ? [
          { name: "Learn Firebase", desc: "integrate this page with APIs" },
          { name: "Borrow App", desc: "work on idea that Ashu told you" },
          {
            name: "Integrate APIs here",
            desc: "Learn and integrate apis here",
          },
        ]
      : [
          { name: "sidemenu template", desc: "create sidemenu template" },
          { name: "Drag Drop resizable dashboard", desc: "publish its demo" },
        ];
    return JSON.parse(l).map((list) => new CardEntity(list));
}

function saveCardsOnLocal(name, data) {
  setInLocalStorage(`card_${name}`, JSON.stringify(data));
}

function getCardEntity(data) {
    return new CardEntity(data);
}

function getListEntity(data) {
  return new CardEntity(data);
}

export {
  getLocalList,
  saveListOnLocal,
  getCardsList,
  saveCardsOnLocal,
  getListEntity,
  getCardEntity,
};