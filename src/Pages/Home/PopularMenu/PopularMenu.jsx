

import Menuitem from "../../Shared/Menuitem/Menuitem";
import SectionTitle from "../../../componemts/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular');

  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);

  return (
    <section>
      <SectionTitle heading="From Our Menu" subHeading="Popular Items" />
      <div className="grid md:grid-cols-2 gap-4">
        {popular.map((item) => (
          <Menuitem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
