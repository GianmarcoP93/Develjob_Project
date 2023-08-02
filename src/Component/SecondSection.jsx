import hand from "../assets/images/second-section/hand.png";
import jar from "../assets/images/second-section/jar.png";
import orangeWeight from "../assets/images/second-section/orangeWeight.png";
import weights from "../assets/images/second-section/weights.png";

export const SecondSection = () => {
  return (
    <div className="flex justify-center py-16">
      <div className="max-w-section flex justify-center">
        <div className="relative pb-56 pr-40">
          <img src={weights} alt="Weight bench" className="relative z-10" />
          <div className="absolute bottom-30 left-16 z-30">
            <img src={orangeWeight} alt="orange weight" />
          </div>
          <div className="absolute bottom-[12.5rem] left-44 z-0">
            <img src={jar} alt="jar" />
          </div>
          <div className="absolute bottom-2 right-14 z-20">
            <img src={hand} alt="hand" />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-2xl text-yellow-100">
            La soluzione completa per le palestre che desiderano avere una
            presenza online senza complicazioni.
          </h1>
          <p className="text-base text-white-100">
            Inizia subito e porta la tua palestra online. Iscriviti oggi stesso
            e scopri quanto sia facile creare la tua presenza digitale!
          </p>
        </div>
      </div>
    </div>
  );
};
