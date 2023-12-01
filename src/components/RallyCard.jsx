import style from "../css/RallyCard.module.css";

function RallyCard({ title, content, image, isActive }) {
  return (
    <div
      className={`flex-column items-center w-56 rounded overflow-hidden shadow-lg bg-black gap-5 ${
        isActive ? style.active : style.notActive
      }`}
    >
      <img className="w-3/4" src={image} alt="rally" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content.slice(0, 50)}...</p>
      </div>
    </div>
  );
}

export default RallyCard;
