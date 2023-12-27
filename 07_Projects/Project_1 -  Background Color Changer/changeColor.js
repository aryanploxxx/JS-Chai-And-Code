const boxes = document.querySelectorAll('.color-boxes');
const body = document.querySelector('body');
boxes.forEach(function(box) {
    box.addEventListener('click', function(e) {
//         // Whenever a event occurs we neet to carry it along, hence named it 'e' could be anything else
//         /*
//             console.log(e);
//                 // MouseEvent
//             console.log(e.target);
//                 // Give from which element/target this event has come from
//                 // We get returned a lot of properties, attributes being one of them in which id class etc. are stored
//         */
        if(e.target.id == 'red') {
            body.style.backgroundColor = e.target.id;
            const msg = document.querySelector('.message');
            msg.innerHTML = `<h2 style="text-align: center;width: 500px; background-color: #ffffff; padding: 10px 15px; border-radius: 10px; color: black; font-family: Gilroy"> Background Color changed to '${e.target.id}'!</h2>`;
        }
        if(e.target.id == 'yellow') {
          body.style.backgroundColor = e.target.id;
          const msg = document.querySelector('.message');
          msg.innerHTML = `<h2 style="text-align: center;width: 500px; background-color: #ffffff; padding: 10px 15px; border-radius: 10px; color: black; font-family: Gilroy"> Background Color changed to '${e.target.id}'!</h2>`;
        }
        if(e.target.id == 'green') {
          body.style.backgroundColor = e.target.id;
          const msg = document.querySelector('.message');
          msg.innerHTML = `<h2 style="text-align: center;width: 500px; background-color: #ffffff; padding: 10px 15px; border-radius: 10px; color: black; font-family: Gilroy"> Background Color changed to '${e.target.id}'!</h2>`;
        }
        if(e.target.id == 'blue') {
          body.style.backgroundColor = e.target.id;
          const msg = document.querySelector('.message');
          msg.innerHTML = `<h2 style="text-align: center;width: 500px; background-color: #ffffff; padding: 10px 15px; border-radius: 10px; color: black; font-family: Gilroy"> Background Color changed to '${e.target.id}'!</h2>`;
        }
    });
});

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const color = document.querySelector('#input').value;
  body.style.backgroundColor = color;
  const msg = document.querySelector('.message');
  msg.innerHTML = `<h2 style="text-align: center;width: 500px; background-color: #ffffff; padding: 10px 15px; border-radius: 10px; color: black; font-family: Gilroy"> Background Color changed to '${color}'!</h2>`;
});

const reset = document.querySelector('#reset').addEventListener('click', function(e) {
  body.style.backgroundColor = 'aliceblue';
  const msg = document.querySelector('.message');
  msg.innerHTML = `<h2 style="text-align: center;width: 500px; background-color: #ffffff; padding: 10px 15px; border-radius: 10px; color: black; font-family: Gilroy"> Background Color Reset!</h2>`;
});