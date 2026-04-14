function PetCard({ name, weight, funFact, backstory, img }) {
  return (
    <div className="pet-card-container">
      <img src={img} alt="image of pet" width={300} />
      <section className="pet-card">
        <h2>{name}</h2>
        <p>Weight: {weight}</p>
        <p>Fun fact: {funFact}</p>
        <p>Backstory: {backstory}</p>
      </section>
    </div>
  );
}

export default PetCard;
