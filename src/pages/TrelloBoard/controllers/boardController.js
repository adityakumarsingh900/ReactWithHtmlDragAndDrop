import {
  setInLocalStorage,
  getFromLocalStorage,
} from "../../../utils/storage";
import ListEntity from "../../../entities/list";
import CardEntity from "../../../entities/card";

function getLocalList() {
    const l = getFromLocalStorage("list");
    if (!l) return [];
    return JSON.parse(l).map(list => new ListEntity(list));
};

function saveListOnLocal(data) {
    setInLocalStorage("list", JSON.stringify(data));
}

function getCardsList(name) {
    const l = getFromLocalStorage(`card_${name}`);
    if (!l) return [];
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