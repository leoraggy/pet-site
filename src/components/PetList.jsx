import PetCard from "./PetCard";
import Section from "./Section";
import { petList } from "../data/data";

const categories = [
  { type: "dog", title: "Dogs" },
  { type: "cat", title: "Cats" },
  { type: "hamster", title: "Hamsters" },
];

function PetList() {
  return (
    <>
      {categories.map(({ type, title }) => (
        <Section key={type} title={title}>
          {petList
            .filter((pet) => pet.type === type)
            .map((pet) => (
              <PetCard
                key={pet.name}
                name={pet.name}
                weight={pet.weight}
                funFact={pet.funFact}
                backstory={pet.backstory}
                img={pet.img}
              />
            ))}
        </Section>
      ))}
    </>
  );
}

export default PetList;

