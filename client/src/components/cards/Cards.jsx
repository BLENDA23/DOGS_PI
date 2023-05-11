import Card from "../card/Card";
export default function Cards(props) {
  const { dogs } = props;
  // characters --> [{}], onClose
  return (
    <div>
      {dogs.map(({ id, name, bred_for, breed_group, life_span,image }) => (
        <Card
          id={id}
          key={id}
          name={name}
          bred_for={bred_for}
          breed_group={breed_group}
          life_span={life_span}
          image={image}
        />
      ))}
    </div>
  );
}
