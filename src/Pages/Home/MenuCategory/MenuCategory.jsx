import Cover from "../../Shared/Cover/Cover";
import Menuitem from "../../Shared/Menuitem/Menuitem";

const MenuCategory = ({ items, title, img}) => {
  return (
    <div className="pt-5">
        { title && <Cover img={img} title={title}/>}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {items.map((item) => (
          <Menuitem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
