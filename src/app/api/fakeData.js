export const listTheaterSystem = JSON.parse(`
[{
    "id": 1,
    "name": "Rhyzio",
    "alias": "JOD",
    "logo": "https://picsum.photos/200/300"
  }, {
    "id": 2,
    "name": "Centimia",
    "alias": "CNY",
    "logo": "https://picsum.photos/200/400"
  }, {
    "id": 3,
    "name": "Rhynoodle",
    "alias": "PEN",
    "logo": "https://picsum.photos/200/200"
  }, {
    "id": 4,
    "name": "Abatz",
    "alias": "RUB",
    "logo": "https://picsum.photos/300/300"
  }, {
    "id": 5,
    "name": "Quatz",
    "alias": "KHR",
    "logo": "https://picsum.photos/300/200"
  }]  
`);

export const listCumRap = () => {
  let data = JSON.parse(`
  [{
    "id": 1,
    "name": "Wolf-Champlin",
    "information": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    "theaterSystemName": "Mydo"
  }, {
    "id": 2,
    "name": "Botsford, Dickens and Hand",
    "information": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "theaterSystemName": "Wordify"
  }, {
    "id": 3,
    "name": "Cruickshank LLC",
    "information": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    "theaterSystemName": "Yozio"
  }, {
    "id": 4,
    "name": "Brown LLC",
    "information": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    "theaterSystemName": "Zooveo"
  }, {
    "id": 5,
    "name": "Predovic and Sons",
    "information": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    "theaterSystemName": "Vitz"
  }, {
    "id": 6,
    "name": "Hartmann-Crooks",
    "information": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    "theaterSystemName": "Brainsphere"
  }, {
    "id": 7,
    "name": "Prosacco-Schmitt",
    "information": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    "theaterSystemName": "Dynabox"
  }, {
    "id": 8,
    "name": "Erdman Group",
    "information": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    "theaterSystemName": "Eamia"
  }, {
    "id": 9,
    "name": "O'Hara-Larkin",
    "information": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    "theaterSystemName": "Skippad"
  }, {
    "id": 10,
    "name": "Morissette, Mayer and Heathcote",
    "information": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    "theaterSystemName": "Browsezoom"
  }]
  `);

  console.log(data);

  for (let i = 0; i < data.length; i++) {
    let r = Math.floor(Math.random() * 10);
    data[i].theaterSystemName = listTheaterSystem[r]?.name;
  }

  return data;
};

export const listMovies = JSON.parse(`
[{
  "id": 1,
  "name": "Learning to Ride",
  "image": "https://picsum.photos/200/300",
  "trailer": "https://youtu.be/TcMBFSGVi1c",
  "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  "premiereDay": "1/25/2021",
  "rate": 4.8
}, {
  "id": 2,
  "name": "Clearing, The",
  "image": "https://picsum.photos/200/100",
  "trailer": "https://youtu.be/TcMBFSGVi1c",
  "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  "premiereDay": "4/3/2021",
  "rate": 8.4
}, {
  "id": 3,
  "name": "Machine Gun Preacher",
  "image": "https://picsum.photos/400/200",
  "trailer": "https://youtu.be/TcMBFSGVi1c",
  "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  "premiereDay": "7/29/2020",
  "rate": 6.1
}, {
  "id": 4,
  "name": "Kiss the Bride",
  "image": "https://picsum.photos/400/300",
  "trailer": "https://youtu.be/TcMBFSGVi1c",
  "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  "premiereDay": "5/28/2020",
  "rate": 4.6
}, {
  "id": 5,
  "name": "Nightmare Before Christmas, The",
  "image": "https://picsum.photos/200/400",
  "trailer": "https://youtu.be/TcMBFSGVi1c",
  "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  "premiereDay": "1/5/2021",
  "rate": 3.7
}, {
  "id": 6,
  "name": "One Nite In Mongkok (Wong gok hak yau)",
  "image": "https://picsum.photos/400/400",
  "trailer": "https://youtu.be/TcMBFSGVi1c",
  "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  "premiereDay": "5/27/2020",
  "rate": 7.2
}, {
  "id": 7,
  "name": "Perifery (Härmä)",
  "image": "https://picsum.photos/400/300",
  "trailer": "https://youtu.be/TcMBFSGVi1c",
  "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  "premiereDay": "8/8/2020",
  "rate": 3.4
}, {
  "id": 8,
  "name": "Rosa Luxemburg",
  "image": "https://picsum.photos/300/400",
  "trailer": "https://youtu.be/TcMBFSGVi1c",
  "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  "premiereDay": "8/24/2020",
  "rate": 9.5
}, {
  "id": 9,
  "name": "Public Enemy, The",
  "image": "https://picsum.photos/300/300",
  "trailer": "https://youtu.be/TcMBFSGVi1c",
  "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  "premiereDay": "10/1/2021",
  "rate": 1.0
}, {
  "id": 10,
  "name": "Crimes and Misdemeanors",
  "image": "https://picsum.photos/200/200",
  "trailer": "https://youtu.be/TcMBFSGVi1c",
  "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  "premiereDay": "9/29/2020",
  "rate": 4.5
}]
`);
