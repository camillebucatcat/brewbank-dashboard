import { Heart } from "@/assets/svg/index";

export default function Home() {
  return (
    <>
      <Heart height="30" width="30"></Heart>
      <h1>Primary</h1>
      <div className="bg-brand p-10">
        <p className="font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, corrupti.</p>
      </div>
      <div className="bg-red-100 p-10">
        <p className="text-brand-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, corrupti.</p>
      </div>
      <h1>Secondary</h1>
      <div className="bg-red p-10">
        <p className="font-bold text-success">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio,
          corrupti.
        </p>
      </div>
      <div className="bg-secondary-50 p-10">
        <p className="text-secondary-800">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio,
          corrupti.
        </p>
      </div>
    </>
  );
}
