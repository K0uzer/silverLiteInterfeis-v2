
// ФУНКЦИЯ ДЛЯ НАЛОЖЕНИЯ ТРЕБУЕМОГО СТИЛЯ НА ЭЛЕМЕНТ //
function applyInvisabilityOnElement(item, property, meaning) {
  item.style = `${property}: ${meaning}`;
}

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ И ЗАКРЫТИЯ ВСПЛЫВАЮЩЕГО МЕНЮ //
export function getByttonList() {
  const buttonOfOpenMenu = document.querySelector('.page__admin-button-open-menu');
  const menuBlock = document.querySelector('.page__admin-menu');
  const openMenu = () => {
    menuBlock.classList.toggle('page__admin-menu--open');
    buttonOfOpenMenu.classList.toggle('page__admin-button-open-menu--cliked');
  };
  buttonOfOpenMenu.addEventListener('click', openMenu);
};

// ФУНКЦИЯ ДЛЯ ВЫВОДА НОВОГО БЛОКА КОГДА И СКРЫТИЯ СТАРОГО  //
const showNewBlock = (item, array) => function getBlock() {
  console.log(item);
  Array.from(array).forEach((e) => applyInvisabilityOnElement(e, 'display', 'none'));
  console.log(Array.from(array).filter((e) => {
    e.classList.contains('employees-company__wrapper-content') == true;
  }));
};

// ФУНКЦИЯ ДЛЯ СМЕНЫ ТАБЛИЦ В "employees-company"  //
export function changeTable() {
  const employeesCompany = document.querySelector('.employees-company__wrapper-content');
  const worckingEmloyees = document.querySelector('.worcking-emloyees');
  const sittingsUsers = document.querySelector('.sittings-of-users');
  const arrayOfTables = [employeesCompany, sittingsUsers, worckingEmloyees];
  const listButtonsOfGetTable = document.querySelectorAll('.employees-company__navigation-table');
  Array.from(listButtonsOfGetTable).forEach((item) => {
    item.addEventListener('click', showNewBlock(item, arrayOfTables));
  });
}
