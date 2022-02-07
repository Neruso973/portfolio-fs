import ReactCardFlip from "react-card-flip";

import { front } from "../data/front";
import { back } from "../data/back";

interface Props {
  isFlipped: boolean;
  handleIsFlipped: () => void;
}
function FlippedCard({ isFlipped, handleIsFlipped }: Props) {
  return (
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="bg-white  min-h-96 border border-black my-8 ml-8 rounded-md shadow-black shadow">
                <h2 className="text-center text-2xl">Competences Front-end</h2>
              <div className="flex flex-wrap">
                {front.map((item) => (
                  <img
                    src={item.logo}
                    alt={item.alt}
                    className={item.className}
                  />
                ))}
              </div>
              <button className="bottom-2 ml-[45%]" onClick={handleIsFlipped}>
                Back-end
              </button>
            </div>
            <div className="bg-white max-h-96 border border-black my-8 ml-8 truncate rounded-md shadow-black shadow">
                <h2 className="text-center text-2xl">Competences Back-end</h2>
                <div className="flex flex-wrap ">
                  {back.map((item) => (
                   <img
                      src={item.logo}
                     alt={item.alt}
                     className={item.className}
                    />
                  ))}
                </div>
              <button className="bottom-2 ml-[45%]" onClick={handleIsFlipped}>
                Front-end
              </button>
            </div>
          </ReactCardFlip>
  );
}

export default FlippedCard;
