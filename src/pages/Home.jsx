import bg_main from "../assets/bg-main.jpg";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <img
        className="animate__animated animate__fadeInDown w-full h-full absolute"
        src={bg_main}
        alt="all games"
      />
    </div>
  );
}
