
export function dateBel() {
const days = [
    'Нядзеля',
    'Панядзелак',
    'Аўторак',
    'Серада',
    'Чацвер',
    'Пятніца',
    'Субота'
  ];


  const months = [
'cтудня',
'лютага',
'сакавіка',
'красавіка',
'мая',
'чэрвеня',
'ліпня',
'жніўня',
'верасня',
'кастрычніка',
'лістапада',
'снежня'
  ];
let dateString = '';
  let d = new Date();
  let n = d.getDay();
  let m = d.getMonth();
  let num = d.getDate();
//   console.log(days[n]);
//   console.log(months[m]);
  dateString = `${days[n]}` + ', ' + `${ num }` + ' ' + `${months[m]}`;
  return dateString
}