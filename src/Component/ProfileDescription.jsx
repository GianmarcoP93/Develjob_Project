import proPic from "../assets/images/gymPropicBig.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProfileDescription = ({
  name,
  email,
  address,
  isGym,
  workoutPlan,
  subscription,
}) => {
  return (
    <div className="flex p-10 bg-gray rounded-2xl justify-between">
      <div className="flex flex-col gap-4">
        <p className="text-secondary-100 font-bold text-2xl">{name}</p>
        <div className="flex gap-20 justify-center items-center">
          <div className="flex flex-col justify-center gap-2 h-full">
            {isGym && (
              <>
                <p className="flex items-center text-green gap-3 ml-[-3px]">
                  <span className="block">
                    <FontAwesomeIcon
                      icon="fa-solid fa-clock"
                      size="xl"
                      style={{ color: "#ffffff" }}
                    />
                  </span>
                  Aperto
                </p>
                <p className="flex items-center text-white-100 gap-3">
                  <span className="block">
                    <FontAwesomeIcon
                      icon="fa-solid fa-location-dot"
                      size="xl"
                      style={{ color: "#ffffff" }}
                    />
                  </span>
                  {address}
                </p>
              </>
            )}
            {!isGym && (
              <>
                <button className="w-fit font-montserrat flex items-center text-white-100 gap-3 font-normal underline underline-offset-4 hover:text-secondary-300">
                  <span className="block">
                    <FontAwesomeIcon
                      icon="fa-solid fa-dumbbell"
                      size="xl"
                      style={{ color: "#ffffff" }}
                    />
                  </span>
                  Scheda
                </button>
                <p className="flex items-center text-white-100 gap-3">
                  <span className="block">
                    <FontAwesomeIcon
                      icon="fa-solid fa-calendar-xmark"
                      size="xl"
                      style={{ color: "#ffffff" }}
                    />
                  </span>
                  Scadenza abbonamento: {subscription}
                </p>
              </>
            )}
          </div>
          <div className="flex flex-col justify-center gap-2 h-full">
            <p className="flex items-center text-white-100 gap-3">
              <span className="block">
                <FontAwesomeIcon
                  icon="fa-solid fa-envelope"
                  size="xl"
                  style={{ color: "#ffffff" }}
                />
              </span>
              {email}
            </p>
            <p className="flex items-center text-white-100 gap-3">
              <span className="block">
                <FontAwesomeIcon
                  icon="fa-solid fa-phone"
                  size="xl"
                  style={{ color: "#ffffff" }}
                />
              </span>
              +39 3333333333
            </p>
          </div>
        </div>
      </div>
      <button className="w-24 h-24 rounded-full hover:opacity-60">
        <img src={proPic} alt="profile picture" />
      </button>
    </div>
  );
};
