import PetCard from "./PetCard";
import { petList } from "../data/data";

function PetList() {
  return (
    <>
      <h1>PetList</h1>
      <div>
        {petList.map((pet, index) => (
          <PetCard
            name={pet.name}
            weight={pet.weight}
            funFact={pet.funFact}
            backstory={pet.backstory}
            img={pet.img}
          />
        ))}
      </div>
    </>
  );
}

export default PetList;
