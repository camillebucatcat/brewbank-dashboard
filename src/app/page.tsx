export default function Home() {
  return (
    <>
      <h1>Primary</h1>
      <div className="bg-primary p-10">
        <p className="font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, corrupti.</p>
      </div>
      <div className="bg-red-100 p-10">
        <p className="text-primary-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, corrupti.</p>
      </div>
      <h1>Secondary</h1>
      <div className="bg-red p-10">
        <p className="font-bold text-success">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, corrupti.</p>
      </div>
      <div className="bg-secondary-50 p-10">
        <p className="text-secondary-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, corrupti.</p>
      </div>
    </>
  );
}
