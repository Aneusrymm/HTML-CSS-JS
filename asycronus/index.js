async function getUser(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    console.log(data.address.street);
}

getUser();

async function showDogImage() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await res.json();
  const img = document.createElement("img");
  img.src = data.message;
  img.width = 300;
  document.body.appendChild(img);
}

showDogImage();




