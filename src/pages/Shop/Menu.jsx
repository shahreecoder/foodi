import React, { useState, useEffect } from 'react'
import CatCard from '../../components/CatCard';
import { FaFilter } from 'react-icons/fa';

function Menu() {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setfilteredItems] = useState([]);
  const [selectedCategory, setselectedCategory] = useState("all");
  const [sortOption, setsortOption] = useState("Default");
  const [currentPage, setcurrentPage] = useState(1);
  const [itemPerPage, setitemPerPage] = useState(9);
  
  // Loading Data
  useEffect(() => {
    // Fatching Data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:6001/api/menu/fatchallmenu");
        console.log(response);
        const data = await response.json();
        setMenu(data);
        setfilteredItems(data);
        setcurrentPage(1);
      } catch (error) {
        console.log({ "Error": error });
      }
    }
    fetchData();
  }, [])

  const filterItem = (category) => {
    const filterd = category === "all"
      ? menu
      : menu.filter((item) => item.category === category);

    setfilteredItems(filterd);
    setselectedCategory(category);
    setcurrentPage(1);

  }

  // Show all data
  const showAll = () => {
    setfilteredItems(menu);
    setselectedCategory("all");
    setcurrentPage(1);
  }


  const handelSortChange = (option) => {
    setsortOption(option);
    let sortedItem = [...filteredItems];

    // sort Logic 
    switch (option) {
      case "A-Z":
        sortedItem.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItem.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItem.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItem.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setfilteredItems(sortedItem);
    setcurrentPage(1);
  }


  // Pagination logic
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItem = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setcurrentPage(pageNumber);


  return (
    <>
      <div className='section-container bggradient'>
        <div className='py-20 flex flex-col  justify-center items-center gap-8'>
          {/* {Text} */}
          <div className=" text-center px-4 space-y-7 pt-20">
            <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>Dive into Delights Of Delectable <span className='text-green'>Food</span></h2>
            <p className='text-xl text-[#4A4A4A]'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
            <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
          </div>
        </div>
      </div>
      <div className='section-container bggradient'>
        {/* Fillter and Sort Buttons */}
        <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>
          <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
            <button onClick={showAll}
              className={selectedCategory === "all" ? "active" : ""}
            >All</button>
            <button onClick={() => filterItem("salad")}
              className={selectedCategory === "salad" ? "active" : ""}
            >Salad</button>
            <button onClick={() => filterItem("pizza")}
              className={selectedCategory === "pizza" ? "active" : ""}
            >Pizza</button>
            <button onClick={() => filterItem("soup")}
              className={selectedCategory === "soup" ? "active" : ""}
            >Soups</button>
            <button onClick={() => filterItem("dessert")}
              className={selectedCategory === "dessert" ? "active" : ""}
            >Desserts</button>
            <button onClick={() => filterItem("drinks")}
              className={selectedCategory === "drinks" ? "active" : ""}
            >Drinks</button>
            <button onClick={() => filterItem("offered")}
              className={selectedCategory === "offered" ? "active" : ""}
            >Offered</button>
          </div>
          <div className='flex'>
            <div className='bg-black p-2 mb-3'>
              <FaFilter className='h-4 w-4 text-white' />
            </div>
            <div className='flex justify-end mb-3 rounded-sm'>
              <select name="sort" id="sort"
                className='bg-black text-white '
                onChange={(e) => handelSortChange(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="low-to-high">Low To High</option>
                <option value="high-to-low">High To Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className='flex flex-wrap flex-col-3 gap-x-10 gap-y-5 justify-center items-start mt-5'>
          {
            currentItem.map((item) => (
              <CatCard key={item._id} item={item} />

            ))
          }
        </div>

        {/* Pagination  */}
        <div className='flex justify-center py-4'>
          {
            Array.from({length:Math.ceil(filteredItems.length/itemPerPage)}).map((_,index)=>(
              <button key={index+1} onClick={() =>paginate(index+1)} 
              className={`mx-1 px-3 py-1 rounded-full ${currentPage === index+1 ?"bg-green text-white":"bg-gray-200"}`}>
                {index+1}
              </button>
            ))
          }
        </div>
      </div>
    </>

  )
}

export default Menu