
// styling the themes for the background color

const hot = document.getElementById('hot');

hot.addEventListener('click', function onClick(event) {
  // change background color
  document.body.style.backgroundColor = 'salmon';
  console.log(event.target);

  //  change background color
  event.target.style.backgroundColor = 'salmon';

  localStorage.setItem('hot', 'salmon');

});

const blue = document.getElementById('blue');

blue.addEventListener('click', function onClick(event) {
  // change background color
  document.body.style.backgroundColor = 'rgb(171, 130, 121)';

  event.target.style.backgroundColor = 'rgb(171, 130, 121)';

});

const pink = document.getElementById('pink');

pink.addEventListener('click', function onClick(event) {
  // change background color
  document.body.style.backgroundColor = 'hotpink';

  event.target.style.backgroundColor = 'hotpink'
});

// styling the list white
const white = document.getElementById('white');

white.addEventListener('click', function onClick(white) {
  // change background color
  const backgroundColor = listBlock.style.backgroundColor;

  if (backgroundColor === 'white') {
    listBlock.style.backgroundColor = 'salmon';

    //   change text color
    listBlock.style.color = 'white';
  } else {
    listBlock.style.backgroundColor = 'white';

    //  optionally change text color
    listBlock.style.color = 'grey';
  }
  localStorage.setItem('white', 'white');
  localStorage.getItem ('white')
  
});

// styling the list-styles grey

const grey = document.getElementById('grey');

grey.addEventListener('click', function onClick(grey) {
  // change background color
  const backgroundColor = listBlock.style.backgroundColor;

  if (backgroundColor === 'grey') {
    listBlock.style.backgroundColor = 'ash';

    //   change text color
    listBlock.style.color = 'white';
  } else {
    listBlock.style.backgroundColor = 'grey';

    //  optionally change text color
    listBlock.style.color = 'grey';
  }

  
  localStorage.setItem('grey', 'grey');
  localStorage.getItem ('grey')
});

// styling the list-styles grey

const funky = document.getElementById('funky');

funky.addEventListener('click', function onClick(funky) {
  // change background color
  const backgroundColor = listBlock.style.backgroundColor;

  if (backgroundColor === 'wheat') {
    listBlock.style.backgroundColor = 'blue';

    //   change text color
    listBlock.style.color = 'white';
  } else {
    listBlock.style.backgroundColor = 'wheat';

    //  optionally change text color
    listBlock.style.color = 'hotpink';
  }

  
  localStorage.setItem('funky', 'wheat');
  localStorage.getItem ('wheat')
});



