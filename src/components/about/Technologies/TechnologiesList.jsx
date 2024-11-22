import { TechnologyCard } from "./TechnologyCard";
import styles from "./Technology.module.css";

export const TechlogiesList = ({ items }) => {
  return (
    <div className="container w-full my-20 h-[50vh] flex items-center justify-center">
      {/* <div className="relative  w-full my-20 flex items-center justify-center">
        {Array.from({ length: numCards }).map((_, index) => {
          return (
            <TechnologyCard
              styleCard={{
                position: "absolute",
                left: `${
                  radius * Math.cos((2 * Math.PI * index) / numCards)
                }px`,
                top: `${radius * Math.sin((2 * Math.PI * index) / numCards)}px`,
                transform: "translate(-50%, -50%)",
              }}
            />
          );
        })}
      </div> */}

      <div className={styles.circle}>
        {items.map((item, index) => {
          return (
            <div
              className={styles.segment}
              key={index}
              style={{
                transform: `rotate(${
                  (360 / items.length) * index
                }deg) translateX(200px) rotate(-${
                  (360 / items.length) * index
                }deg)`,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={70}
                height={70}
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path d="M12 18.1778L7.38083 16.9222L7.0517 13.3778H9.32156L9.48045 15.2222L12 15.8889L14.5195 15.2222L14.7806 12.3556H6.96091L6.32535 5.67778H17.6747L17.4477 7.88889H8.82219L9.02648 10.1444H17.2434L16.6192 16.9222L12 18.1778ZM3 2H21L19.377 20L12 22L4.62295 20L3 2ZM5.18844 4L6.48986 18.4339L12 19.9278L17.5101 18.4339L18.8116 4H5.18844Z"></path>
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
};
