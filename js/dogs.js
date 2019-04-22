function randomDog() {
  var dogs = [
    {
      name: 'Bowie',
      parent: 'Becky',
      image: 'img/bowie.jpg'
    },
    {
      name: 'Tonks',
      parent: 'Meghan',
      image: 'img/tonks.jpg'
    },
    {
      name: 'Britta',
      parent: 'Sonia',
      image: 'img/britta.jpg'
    },
    {
      name: 'Stella',
      parent: 'Xtina',
      image: 'img/stella.jpg'
    },
    {
      name: 'Andi & Pepper',
      parent: 'Lisa',
      image: 'img/andi_and_pepper.jpg'
    },
    {
      name: 'Spud',
      parent: 'Kyla',
      image: 'img/spud.jpg'
    },
    {
      name: 'Josie & Lupe',
      parent: 'Bucknam',
      image: 'img/josie_and_lupe.jpg'
    },
    {
      name: 'Winnie',
      parent: 'Cassie',
      image: 'img/winnie.jpg'
    },
    {
      name: 'Basco',
      parent: 'Rachel A',
      image: 'img/basco.jpg'
    },
    {
      name: 'Harper',
      parent: 'Rachel C',
      image: 'img/harper.jpg'
    },
    {
      name: 'Sox',
      parent: 'Karly',
      image: 'img/sox.jpg'
    },
    {
      name: 'Hoku & Malie',
      parent: 'Mom & Dad',
      image: 'img/hoku_and_malie.jpg'
    },
    {
      name: 'Lii',
      parent: 'Mom & Dad',
      image: 'img/lii.jpg'
    },
    {
      name: 'OP',
      parent: 'Aunty Lynne',
      image: 'img/OP.jpg'
    }

  ];
  var i = Math.floor(Math.random() * dogs.length);
  return dogs[i];
}
