import React ,{useState} from 'react';
import {BiBarChart} from "react-icons/bi"

function BuyAndSellStocks() {


    const [string,add_ele] = useState("");
    const [ans,nxt] = useState(false);
    const [array_ans,update_array] = useState("");
    const [buy,b] = useState("");
    const [sell,s] = useState("");
    function handle_elements(event){
        nxt(false);
        const neww = event.target.value;
        add_ele(neww);
    }

    function find_answers()
    {
        const prices = string.split(",");

        const bb = 1;
        const ss = -1;
        let maxProfit = 0;
        let minPrice = prices[0];
        let maxProft = 0;
      
        for (const price of prices) {
          const currentProfit = price - minPrice;
         if(minPrice < price)
         {
             minPrice = price;
         }
          maxProft = Math.max(maxProft, price - minPrice);
        }
         nxt(true);
         update_array(maxProfit);
    }



    return (
        <div className="content">
        <br />
        <h1 className="introo"> <span className = "heading-icons">  <BiBarChart size= {61}/> </span> <span className = "component-heading"> Buy and Sell Stocks </span></h1>
        <h3>The cost of a stock on each day is given in an array, find the max profit that you can make by buying and selling atmost once in those days. <br /> <br /> Naive approach:
         A simple approach is to try buying the stocks and selling them on every single day when profitable and keep updating the maximum profit so far.</h3>
        <h3>Complexity: O(n^2)</h3>
        <br />
        <div className = "GreyBox">
        <pre>Efficient Algorithm: <br />
        Instead of taking difference of the picked element with every other element,<br /> we take the difference with the minimum element found so far. So we need to keep track of 2 things: <br />
        1) Maximum difference found so far (max_diff). <br />
        2) Minimum number visited so far (min_element).
        </pre>
        <div className = "space"></div>      <div className = "space"></div> <div className = "space"></div> <div className = "space"></div>       <h6> source: geeksforgeeks </h6> 
        </div>
        <h3>Complexity: O(n) [Linear] (Single Traversal of Array)</h3>
        <h2>Try this yourself:-</h2>
        <input type="text" placeholder="Enter the Elements" onChange = {handle_elements} />
        <h5>[Input Array Elements separated by ',' (e.g: 1,2,3,4,5....)] </h5><br />
        {ans && <h3> Answer : {array_ans} </h3>}
        <button onClick = {find_answers} >Next Permutation</button>

        </div>
    )
}

export default BuyAndSellStocks;
