const people = [
    {
      id: 1,
      name: "Victor",
      age: 32,
      occupation: "Frisør",
      image: `https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80`,
    },

    {
      id: 2,
      name: "Siri",
      age: 28,
      occupation: "Vekter",
      image: `https://images.unsplash.com/photo-1590649880765-91b1956b8276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80`,
    },
    {
      id: 3,
      name: "Leif",
      age: 35,
      occupation: "Butikkmedarbeider",
      image: `https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80`,
    },
    {
      id: 4,
      name: "Espen",
      age: 35,
      occupation: "Daglig leder",
      image: `https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80`,
    },
    {
      id: 5,
      name: "Heidi",
      age: 19,
      occupation: "Danser",
      image: `https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60`,
    },
    {
      id: 6,
      name: "Ragnhild",
      age: 35,
      occupation: "Kunstner",
      image: `https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60`,
    },]

    const cardsContainer = document.getElementById("cards-container");
    people.map((people) =>{
        const card = `
        <img src="${people.image}" alt="${people.name}s profile picture">
        <div class="card-content">
        <h2>${people.name}</h2>
        <p>Age: ${people.age}</p>
        <p>Occation: ${people.occupation}</p>
        </div>`;

     const newCard = document.createElement("div");
  newCard.innerHTML = card;
  cardsContainer.appendChild(newCard);
});