import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi.js'
import MenuCard from './MenuCard.js'
import Navbar from './Navbar.js'





const uniqueList = [
 ...new Set(Menu.map( (currEle) =>{
 return currEle.category
} )
),'all'
]




console.log(uniqueList)

const Restaurant = () => {

  const [menuData, setmenuData] = useState(Menu);
  const[menuList, setmenuList] = useState(uniqueList)


  const filterItem = (category)=>{

    if(category === 'all'){
      setmenuData(Menu)
      return
    }

    const updatedList = Menu.filter((currEle)=>{
      return currEle.category === category
    })

    setmenuData(updatedList)

  }


  return (
    <>
    <Navbar filterItem={filterItem} menuList={menuList} ></Navbar>
    <MenuCard menuData = {menuData}></MenuCard>
    </>
  )
}

export default Restaurant
