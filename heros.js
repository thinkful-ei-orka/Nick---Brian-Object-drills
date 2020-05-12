const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
  ];

  function findOne(arr, query){
      
      for (i=0;i<=7;i++){
       // console.log(query.id)
          if (query.id === i){
              console.log (i)
            //console.log (arr[1]);
              if (query.name){
                  if (query.name === arr[i].name){
                     // console.log (arr[i]);
                  }

              }
              //console.log (arr[i]);
          }
         // console.log(null);
      }
  }

  findOne(HEROES, { id: 1 });