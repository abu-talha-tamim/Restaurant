import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/salad-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../componemts/SectionTitle/SectionTitle";
import MenuCategory from "../../Home/MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro | menu</title>
            </Helmet>
            <Cover img={menuImg}/>
            {/* main cover */}
            <SectionTitle 
            subHeading="Don't Miss" heading="Today's offer"
            />
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>

            {/* desserts menu items */}
            <MenuCategory
            items={desserts}
            title="dessert"
            img={dessertImg}

            />

            {/* pizza menu items */}
            <MenuCategory
            items={pizza}
            title="pizza"
            img={pizzaImg}
            
            />
            {/* pizza menu items */}
            <MenuCategory
            items={soup}
            title="soup"
            img={soupImg}
            
            />
            
            
            
        </div>
    );
};

export default Menu;