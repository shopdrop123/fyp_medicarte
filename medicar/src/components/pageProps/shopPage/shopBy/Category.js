import React, { useEffect, useState } from "react";
// import { FaPlus } from "react-icons/fa";
import { ImPlus } from "react-icons/im";
import NavTitle from "./NavTitle";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategory } from "../../../../redux/orebiSlice";
import axios from "../../../axios";

const Category = () => {
  const [showSubCatOne, setShowSubCatOne] = useState(false);

  const checkedCategorys = useSelector(
    (state) => state.orebiReducer.checkedCategorys
  );
  const dispatch = useDispatch();
  const [category, setCategories] = useState([]);


  // const category = [
  //   {
  //     _id: 9006,
  //     title: "Imprimante",
  //   },
  //   {
  //     _id: 9007,
  //     title: "Encre",
  //   },
  //   {
  //     _id: 9008,
  //     title: "Ruban",
  //   },
  //   {
  //     _id: 9009,
  //     title: "Bac de dechet",
  //   },
  // ];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleToggleCategory = (category) => {
    dispatch(toggleCategory(category));
  };

  return (
    <div className="w-full">
      <NavTitle title="Shop by Category" icons={true} />
      <div>
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {category.map((item) => (
            <li
              key={item._id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
            >
              <input
                type="checkbox"
                id={item._id}
                checked={checkedCategorys.some((b) => b._id === item._id)}
                onChange={() => handleToggleCategory(item)}
              />
              {item.categoryName}
              {item.icons && (
                <span
                  onClick={() => setShowSubCatOne(!showSubCatOne)}
                  className="text-[10px] lg:text-xs cursor-pointer text-gray-400 hover:text-primeColor duration-300"
                >
                  <ImPlus />
                </span>
              )}
            </li>
          ))}
          {/* <li onClick={() => console.log(checkedCategorys)}>test</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Category;
