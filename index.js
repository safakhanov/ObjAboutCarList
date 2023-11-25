
const cardList =document.querySelector("#cardList");

let cars = [
    {
      make: "Toyota",
      model: "Camry",
      year: 2022,
      color: "Silver",
      mileage: 15000,
      price: 25000,
      img:"./assets/img/Camry.png",

      
    },
    {
      make: "Honda",
      model: "Accord",
      year: 2021,
      color: "Blue",
      mileage: 18000,
      price: 27000,
      img:"./assets/img/Honda.png",

    },
    {
      make: "Ford",
      model: "Mustang",
      year: 2020,
      color: "Red",
      mileage: 22000,
      price: 35000,
      img:"./assets/img/Mustang.png",

    },
    {
      make: "Chevrolet",
      model: "Cruze",
      year: 2022,
      color: "Black",
      mileage: 12000,
      price: 20000,
      img:"./assets/img/Cruze.png",

    },
    {
      make: "Nissan",
      model: "Altima",
      year: 2021,
      color: "Gray",
      mileage: 15000,
      price: 23000,
      img:"./assets/img/Nissan.png",

    },
    {
      make: "BMW",
      model: "X5",
      year: 2023,
      color: "Silver",
      mileage: 8000,
      price: 50000,
      img:"./assets/img/Bmwx5.png",

    },
    {
      make: "Mercedes-Benz",
      model: "E-Class",
      year: 2020,
      color: "White",
      mileage: 25000,
      price: 40000,
      img:"./assets/img/eClass.png",

    },
    {
      make: "Audi",
      model: "A4",
      year: 2022,
      color: "Black",
      mileage: 12000,
      price: 32000,
      img:"./assets/img/Audi.png",

    },
    {
      make: "Lexus",
      model: "RX",
      year: 2021,
      color: "Blue",
      mileage: 18000,
      price: 38000,
      img:"./assets/img/lexus.png",

    },
    {
      make: "Hyundai",
      model: "Elantra",
      year: 2023,
      color: "Red",
      mileage: 5000,
      price: 22000,
      img:"./assets/img/Elantra.png",

    },
    {
      make: "Kia",
      model: "Optima",
      year: 2020,
      color: "Gray",
      mileage: 20000,
      price: 25000,
      img:"./assets/img/kia.png",


    },
    {
      make: "Tesla",
      model: "Model S",
      year: 2021,
      color: "White",
      mileage: 10000,
      price: 60000,
      img:"./assets/img/tesla.png",

    },
    {
      make: "Subaru",
      model: "Outback",
      year: 2022,
      color: "Green",
      mileage: 15000,
      price: 28000,
      img:"./assets/img/subaru.png",

    },
    {
      make: "Mazda",
      model: "CX-5",
      year: 2023,
      color: "Silver",
      mileage: 7000,
      price: 33000,
      img:"./assets/img/mazda.png",

    },
    {
      make: "Volkswagen",
      model: "Golf",
      year: 2020,
      color: "Black",
      mileage: 18000,
      price: 26000,
      img:"./assets/img/golf.png",

    },
    {
      make: "Jeep",
      model: "Wrangler",
      year: 2021,
      color: "Red",
      mileage: 15000,
      price: 38000,
      img:"./assets/img/jeep.png",

    },
    {
      make: "Ram",
      model: "1500",
      year: 2022,
      color: "Blue",
      mileage: 12000,
      price: 32000,
      img:"./assets/img/ram.png",

    },
    {
      make: "Fiat",
      model: "500",
      year: 2023,
      color: "Yellow",
      mileage: 5000,
      price: 18000,
      img:"./assets/img/fiat.png",

    },
    {
      make: "Volvo",
      model: "XC90",
      year: 2020,
      color: "White",
      mileage: 22000,
      price: 45000,
      img:"./assets/img/volvo.png",

    },
    {
      make: "Chrysler",
      model: "Pacifica",
      year: 2021,
      color: "Silver",
      mileage: 15000,
      price: 30000,
      img:"./assets/img/chrysler.png",

    }
  ];


  const newContentData  = cars
 .map((item) => {
    console.log("item:", item);
    return `    
     <div class="card  " style="width:18rem;">
    <img
     width="300", 
     class="img-fluid"
    src="${item.img}"
    
        alt = ""
    <div class="card-body flex-wrap">
        <h5 class="card-title text-center text-primary ">${"Make:" + " " +item.make}</h5>
        <p class="card-text text-center text-warning">${ "Model:" +" "+item.model}</p>
        <p class="card-text text-center text-success ">${"Year :"+" "+item.year}</p>
        <p class="card-text text-center text-secondary">${"Color:"+ " "+item.color}</p>
        <p class="card-text text-center text-info">${"MilAge:"+" "+item.mileage}</p>
        <p class="card-text text-center text-light bg-dark ">${"Price:"+" "+item.price}</p>
        <button class="btn fs-1000  bg-warning">Add Chart</button>


    </div>
    
    
</div>`
});


console.log("newContentData: ",newContentData);

cardList.innerHTML =newContentData;
