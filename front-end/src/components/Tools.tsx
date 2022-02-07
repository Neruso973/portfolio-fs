import { tools } from "../data/tools";


function Tools() {
  return (
  <div>
    <div className="bg-white min-h-60 border border-black my-8 ml-8 rounded-md shadow shadow-black">
        <h2 className="ml-[38%]">Outils utilisés</h2>
            <div className="flex flex-wrap">
                {tools.map((item) => (
                  <img
                    src={item.logo}
                    alt={item.alt}
                    className={item.className}
                  />
                ))}
            </div>
     </div>
  </div>);
}

export default Tools;
