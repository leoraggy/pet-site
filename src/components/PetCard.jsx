function PetCard({ name, weight, funFact, backstory, img }) {
  return (
    <div className="pet-card">
      <h2>{name}</h2>
      <p>Weight: {weight}</p>
      <p>Fun fact: {funFact}</p>
      <p>Backstory: {backstory}</p>
      <img src={img} alt="image of pet" width={300} />
    </div>
  );
}

export default PetCard;
