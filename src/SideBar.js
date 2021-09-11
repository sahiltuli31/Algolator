import React from "react";
import NextPermutation from "./NextPermutation";
import Kadanes from "./Kadanes";
import BuyAndSellStocks from "./BuyAndSellStocks";
import LongestZeroSubstring from "./LongestZeroSubstring";
import Home from "./Home";
import NextSmallerElement from "./NextSmallerElement";
import { MdGraphicEq, MdImportExport } from 'react-icons/md';
import {AiOutlineStock} from "react-icons/ai";
import {TiHome} from "react-icons/ti";
import {BiSkipNext} from "react-icons/bi";
import {FiArrowRightCircle} from "react-icons/fi";
import {BsGraphDown,BsFillGridFill} from "react-icons/bs";



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function SideBar(){

    return (
      
    <Router>
      <div className = "SideMenu">
      <h1 className = "heading"> <span className = "head">A</span> lgolater</h1>     
          <ul>
            <li>
              <Link to="/Home"><h1 className= "index"> <TiHome className = "icons"/>  Home </h1></Link>
            </li>
            <li>
              <Link to="/Kadanes"> <h1 className= "index">  <MdGraphicEq className = "icons" /> Kadane's </h1> </Link>
            </li>
            <li>
             <Link to="/NextPermutation"> <h1 className= "index">  <BiSkipNext className = "icons"/>    Next  Permutation </h1> </Link>
            </li>
            <li>
             <Link to="/BuyAndSellStocks"> <h1 className= "index">  <AiOutlineStock className = "icons"/>    Buy and Sell Stock </h1> </Link>
            </li>
            <li>
             <Link to="/LongestZeroSubstring"> <h1 className= "index">  <FiArrowRightCircle className = "icons"/>    Longest Zero Sum <br/> <span className = "space"></span> Substring </h1> </Link>
            </li>
            <li>
             <Link to="/NextSmallerElement"> <h1 className= "index">   <BsGraphDown className = "icons"/>    Next Smaller  <br/>  <span className = "space"></span> Element </h1> </Link>
            </li>
          </ul>
          </div>
        <Switch>
          <Route exact path="/NextPermutation">
            <NextPermutation />
          </Route>
          <Route exact path="/Kadanes">
            <Kadanes />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/BuyAndSellStocks">
            <BuyAndSellStocks />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/LongestZeroSubstring">
            <LongestZeroSubstring />
          </Route>
          <Route exact path="/NextSmallerElement">
            <NextSmallerElement />
          </Route>
        </Switch>

  </Router>
    );

}

export default SideBar;