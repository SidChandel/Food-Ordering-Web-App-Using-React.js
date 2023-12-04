import { useState } from "react";
const Section = ({ title, discription, isVisible, setIsVisible }) => {
  return (
    <div className=" border border-black m-2">
      <h1 className="font-bold text-xl m-2">{title}</h1>
      {isVisible ? (
       <div> <button
          className="m-2 p-1 bg-purple-700 text-white rounded-md shadow-2xl"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      <p className="m-2"> {discription}</p> </div> ): (
        <button
          className="m-2 p-1 bg-purple-700 text-white rounded-md shadow-2xl"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}

      
    </div>
  );
};
const Instamart = () => {
  const [section, setSection] = useState("about");
  return (
    <div className="m-2 h-screen">
      <h1 className="font-bold text-2xl">Instamart</h1>
      <Section
        title={"About Instamart"}
        discription={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores beatae illo nihil ut labore sed iure reprehenderit pariatur libero officiis, facilis autem ratione laudantium? Error commodi delectus sint porro. Vitae repellendus earum, error veritatis voluptas, facere nostrum aspernatur hic molestiae, corporis cum libero. Quas quos, deserunt voluptatum quae rerum facilis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores beatae illo nihil ut labore sed iure reprehenderit pariatur libero officiis, facilis autem ratione laudantium? Error commodi delectus sint porro. Vitae repellendus earum, error veritatis voluptas, facere nostrum aspernatur hic molestiae, corporis cum libero. Quas quos, deserunt voluptatum quae rerum facilis? "
        }
        isVisible={section == "about"}
        setIsVisible={ (() => setSection("about"))}
      />

      <Section
        title={"Careers instamart"}
        discription={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores beatae illo nihil ut labore sed iure reprehenderit pariatur libero officiis, facilis autem ratione laudantium? Error commodi delectus sint porro. Vitae repellendus earum, error veritatis voluptas, facere nostrum aspernatur hic molestiae, corporis cum libero. Quas quos, deserunt voluptatum quae rerum facilis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores beatae illo nihil ut labore sed iure reprehenderit pariatur libero officiis, facilis autem ratione laudantium? Error commodi delectus sint porro. Vitae repellendus earum, error veritatis voluptas, facere nostrum aspernatur hic molestiae, corporis cum libero. Quas quos, deserunt voluptatum quae rerum facilis? "
        }
        isVisible={section == "careers"}
        setIsVisible={() => setSection("careers")}
      />

      <Section
        title={"Details instamart"}
        discription={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores beatae illo nihil ut labore sed iure reprehenderit pariatur libero officiis, facilis autem ratione laudantium? Error commodi delectus sint porro. Vitae repellendus earum, error veritatis voluptas, facere nostrum aspernatur hic molestiae, corporis cum libero. Quas quos, deserunt voluptatum quae rerum facilis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores beatae illo nihil ut labore sed iure reprehenderit pariatur libero officiis, facilis autem ratione laudantium? Error commodi delectus sint porro. Vitae repellendus earum, error veritatis voluptas, facere nostrum aspernatur hic molestiae, corporis cum libero. Quas quos, deserunt voluptatum quae rerum facilis? "
        }
        isVisible={section == "details "}
        setIsVisible={() => setSection("details ")}
      />
    </div>
  );
};

export default Instamart;
