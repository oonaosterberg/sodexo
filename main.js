const pad2 = (number) => {

  return (number < 10 ? '0' : '') + number;

};

const date = new Date;
//const day = pad2(date.getDate());
const day = 13;
const month = pad2(date.getMonth() + 1);
const year = pad2(date.getFullYear());
const weekday = pad2(date.getDay());

console.log(day);
console.log(month);
console.log(year);

getLunch = () => {

  console.log(document.querySelector('#buttons'));
  document.querySelector('#buttons').addEventListener('click', function() {

    const url = 'https://www.sodexo.fi/ruokalistat/output/daily_json/' +
        event.target.id + '/' + year + '/' + month + '/' + day + '/fi';
    console.log(url);
    console.log(event.target.id);

      document.querySelector('h1').innerHTML = 'Lounaslista tänään';

    if (event.target.id == 16363 || event.target.id == 16435 ||
        event.target.id == 16365) {

      fetch(url).
          then((response) => {
            return response.json();
          }).
          then((result) => {

            const lunch = result;
            console.log(lunch);

            const lunch1 = lunch.courses[0];
            const lunch2 = lunch.courses[1];
            const veglunch = lunch.courses[2];
            const premiumlunch = lunch.courses[3];
            const baguette = lunch.courses[4];
            const soup = lunch.courses[5];
            const dessert = lunch.courses[6];

            document.getElementById('lunch').innerHTML = lunch1.title_fi +
                ' / ' + lunch1.title_en + ' ' + lunch1.price + ' ' +
                lunch1.properties + '<br>' + '<br>' +
                lunch2.title_fi + ' / ' + lunch2.title_en + ' ' + lunch2.price +
                ' ' + lunch2.properties + '<br>' + '<br>' +
                veglunch.title_fi + ' / ' + veglunch.title_en + ' ' +
                veglunch.price + ' ' + veglunch.properties + '<br>' +
                '<br>' +
                premiumlunch.title_fi + ' / ' + premiumlunch.title_en + ' ' +
                premiumlunch.price + ' ' + premiumlunch.properties + '<br>' +
                '<br>' +
                baguette.title_fi + ' / ' + baguette.title_en + ' ' +
                baguette.price + ' ' + baguette.properties + '<br>' +
                '<br>' +
                soup.title_fi + ' / ' + soup.title_en + ' ' + soup.price + ' ' +
                soup.properties + '<br>' + '<br>' +
                dessert.title_fi + ' / ' + dessert.title_en + ' ' +
                dessert.price + ' ' + dessert.properties;
          });

    } else {

      fetch(url).
          then((response) => {
            return response.json();
          }).
          then((result) => {

            const lunch = result;
            console.log(lunch);

            const lunch1 = lunch.courses[0];
            const veglunch = lunch.courses[1];
            const soup = lunch.courses[2];
            const dessert = lunch.courses[3];

            document.getElementById('lunch').innerHTML = lunch1.title_fi +
                ' / ' + lunch1.title_en + ' ' + lunch1.price + ' ' +
                lunch1.properties + '<br>' + '<br>' +
                veglunch.title_fi + ' / ' + veglunch.title_en + ' ' +
                veglunch.price + ' ' + veglunch.properties + '<br>' + '<br>' +
                soup.title_fi + ' / ' + soup.title_en + ' ' + soup.price + ' ' +
                soup.properties + '<br>' +
                '<br>' +
                dessert.title_fi + ' / ' + dessert.title_en + ' ' +
                dessert.price + ' ' + dessert.properties;
          });
    }

    if (weekday == 0 || weekday == 6) {
        document.getElementById('lunch').innerHTML = 'Tämä ravintola ei tarjoile lounasta viikonloppuisin.';
    }
  });
};

document.addEventListener('DOMContentLoaded', getLunch);



