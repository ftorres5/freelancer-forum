const maxFreelancers = 8;
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
]
const freelancerList = [
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];


const addFreelancerIntervalId = setInterval(addFreelancer, 3000);

render();
function render() {
  const list = document.querySelector("ul");
    freelancers.forEach(obj => {
      const listItem = document.createElement('li');
      listItem.textContent = `${obj.name} ${obj.price}  ${obj.occupation}`;
      list.append(listItem);
    });

    const totalPrice = freelancers.reduce((total, price) => {
      return total + price.price
    }, 0);
    const averagePrice = totalPrice / freelancers.length
    
    console.log(averagePrice);
    
    const averagePriceText = document.querySelector("#average-price");
    averagePriceText.textContent = averagePrice;
}

function addFreelancer() {
  const randomItem = Math.floor(Math.random() * freelancerList.length);
  const randomFreelancer = freelancerList[randomItem];
  console.log(randomFreelancer);
  freelancers.push(randomFreelancer);

  render();
  if ( freelancers.length === maxFreelancers) {
    clearInterval(addFreelancerIntervalId);
  }
};

console.log(freelancers)





