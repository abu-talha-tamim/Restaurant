import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import Menuitem from "../../Shared/Menuitem/Menuitem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-5">
      {title && <Cover img={img} title={title} />}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {items.map((item) => (
          <Menuitem key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 text-white mt-4">
        Order Now
      </button></Link>
    </div>
  );
};

export default MenuCategory;
