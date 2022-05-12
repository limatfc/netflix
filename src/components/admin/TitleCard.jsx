import TitleItem from "./TitleItem";

export default function TitleCard({ titles }) {
  if (titles.length === 0)
    return <p>Looks like you have 0 titles registered for this type</p>;

  return (
    <div>
      {titles.map((item) => (
        <TitleItem key={item.id} item={item} />
      ))}
    </div>
  );
}
