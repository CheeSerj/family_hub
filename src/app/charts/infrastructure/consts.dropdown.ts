export interface DropDownItems {
  name: string;
  key: string;
}
export const chartsDropDown: DropDownItems[] = [
  { name: 'Не выбранно', key: 'notSelected' },
  { name: 'Рост', key: 'growth' },
  { name: 'Вес', key: 'weight' }
];

export const monthDropDown: DropDownItems[] = [
  { name: 'Не выбранно', key: 'notSelected' },
  { name: 'Январь', key: 'Jan' },
  { name: 'Февраль', key: 'Feb' },
  { name: 'Март', key: 'Mar' },
  { name: 'Апрель', key: 'Apr' },
  { name: 'Май', key: 'May' },
  { name: 'Июнь', key: 'Jun' },
  { name: 'Июль', key: 'Jul' },
  { name: 'Август', key: 'Aug' },
  { name: 'Сентрябь', key: 'Sep' },
  { name: 'Октябрь', key: 'Oct' },
  { name: 'Ноябрь', key: 'Nov' },
  { name: 'Декабрь', key: 'Dec' }
];
