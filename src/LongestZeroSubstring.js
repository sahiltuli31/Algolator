import React,{useState} from 'react'
import {RiCreativeCommonsZeroFill}  from "react-icons/ri"
import src from "./zero_sum.jpg";


function LongestZeroSubstring() {

    const [string,add_ele] = useState("");
    const [ans,nxt] = useState(false);
    const [array_ans,update_array] = useState("");
    
    function handle_elements(event){
        nxt(false);
        const neww = event.target.value;
        add_ele(neww);
    }

    function find_answers()
    {
        const arr = string.split(",");
        var max_len = 0;
        var n = arr.length;
        // Pick a starting point
        for (var i = 0;;) {
            // Initialize curr_sum
            // for every starting point
            var curr_sum = 0;
   
            // try all subarrays
            // starting with 'i'
            for (let j = i; j < n; j++) {
                curr_sum = curr_sum +  Number(arr[j]);
                console.log(curr_sum);
                // If curr_sum becomes 0,
                // then update max_len
                if (curr_sum == 0)
                    max_len = Math.max(max_len, j - i + 1);
            }
            break;
        }
        console.log(max_len);
         nxt(true);
         update_array(max_len);
    }

    return (
           <div className="content">
        <br />
        <h1 className="introo"> <span className = "heading-icons"> <RiCreativeCommonsZeroFill size = {60} /> </span> <span className = "component-heading"> Longest Zero Sum Substring </span></h1>
        <h3>Given an array of integers, find the length of the longest sub-array with a sum that equals 0. </h3>
        <h3>Naive Approach: This involves the use of brute force where two nested loops are used. The outer loop is 
         used to fix the starting position of the sub-array, and the inner loop is used for the ending position of the sub-array and if the sum of elements is equal to zero, then increase the count.</h3>
         <h3>Complexity: O(N^2).</h3>
        <img  className = "reduce" src={src} alt="" />
        <h2>Efficient Algorithm: </h2>
        <div className = "GreyBox">
        <pre> Create an extra space, an array of length n (prefix), a variable (sum), length (max_len), <br />
         and a hash map (hm) to store the sum-index pair as a key-value pair. <br />
           1. Move along the input array from the start to the end. <br />
           2. For every index, update the value of sum = sum + array[i]. <br />
           3. Check every index, if the current sum is present in the hash map or not. <br />
           4. If present, update the value of max_len to a maximum difference of two indices and max_len. <br />
           5. Else, put the value (sum) in the hash map, with the index as a key-value pair. <br />
           6. Print the maximum length (max_len).
        </pre>
        <div className = "space"></div>      <div className = "space"></div> <div className = "space"></div> <div className = "space"></div>       <h6> source: geeksforgeeks </h6> 
         </div>
         <h3>Complexity: O(N).</h3>
        <h2>Try this yourself:-</h2>
        <input type="text" placeholder="Enter the Elements" onChange = {handle_elements} />
        <h5>[Input Array Elements separated by ',' (e.g: 1,2,3,4,5....)] </h5><br />
        {ans && <h3> Answer : {array_ans} </h3>}
        <button onClick = {find_answers} >Next Permutation</button>
        </div>
    )
}

export default LongestZeroSubstring;
