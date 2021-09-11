import React,{useState} from 'react'
import {FcNext}  from "react-icons/fc"
import src from "./next_permutation.PNG";


function NextPermutation() {

    const [string,add_ele] = useState("");
    const [ans,nxt] = useState(false);
    const [array_ans,update_array] = useState([]);
    function handle_elements(event){
        nxt(false);
        const neww = event.target.value;
        add_ele(neww);
    }

    function find_answers()
    {
        const array = string.split(",");

        
         var i = array.length - 1;
         while (i > 0 && array[i - 1] >= array[i]) {
             i--;
         }
     
         if (i <= 0) {
             return false;
         }
     
         var j = array.length - 1;
     
         while (array[j] <= array[i - 1]) {
             j--;
         }
     
         var temp = array[i - 1];
         array[i - 1] = array[j];
         array[j] = temp;
     
         j = array.length - 1;
     
         while (i < j) {
             temp = array[i];
             array[i] = array[j];
             array[j] = temp;
             i++;
             j--;
         }
         nxt(true);
         update_array(array);
    }

    return (
           <div className="content">
        <br />
        <h1 className="introo"> <span className = "heading-icons"> <FcNext size = {50} /> </span> <span className = "component-heading"> Next Permutation </span></h1>
        <h3>Given a number n, find the smallest number that has same set of digits as n and is greater than n. <br/>
         If it is the greatest permutation give the smallest permutation.</h3>
        <br />
        <img src={src} alt="" />
        <h2>Algorithm: </h2>
        <div className = "GreyBox">
        <pre> For a sequence which is not sorted in descending order, we can follow below steps.<br />
         a) Traverse from right and find the first item that is not following the descending order.<br />
         [elements which are dicreasing from behind are already in <br /> increasing order from front,
          that means they are in highest permutation possible] <br />
         b) Swap the found character with closest greater element on right side of it.<br />
         c) After swapping, sort the string after the position of character found in step a.<br />
        </pre>
        <div className = "space"></div>      <div className = "space"></div> <div className = "space"></div> <div className = "space"></div>       <h6> source: geeksforgeeks </h6> 
         </div>
         <h3>Complexity: O(NlogN).</h3>
        <h2>Try this yourself:-</h2>
        <input type="text" placeholder="Enter the Elements" onChange = {handle_elements} />
        <h5>[Input Non Dicreasing Array Elements separated by ',' (e.g: 1,2,3,4,5....)] </h5><br />
        {ans && <h3> Answer : {array_ans.toString()} </h3>}
        <button onClick = {find_answers} >Next Permutation</button>
        </div>
    )
}

export default NextPermutation;
