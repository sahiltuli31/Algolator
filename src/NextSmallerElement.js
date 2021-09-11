import React,{useState}  from 'react'
import {FiBox} from "react-icons/fi";
import src from "./Next_Smaller.png";

function NextSmallerElement() {


    const [string,add_ele] = useState("");
    const [res,find_res] = useState([]);
    const ans = [];
    const [findd,change] = useState(false);

    const ans1 = [];
    function handle_elements(event){
        const neww = event.target.value;
        add_ele(neww);
        change(false);
      
    }

    function find_answers()
    {
        var arr = string.split(",");
        var n = arr.length;
        console.log(arr);
        var next, i, j;
        for (i = 0; i < n; i++)
        {
            next = -1;
            for (j = i + 1; j < n; j++)
            {
                if (arr[i] > arr[j])
                {
                    next = arr[j];
                    j = n;
                }
            }
            ans.push(next);
        }
          
        
        change(true);
        console.log(ans);
        find_res(ans);

    }


    

    return (
        <div className="content">
        <br />
        <h1 className="introo"> <span className = "heading-icons"> <FiBox size = {60} /> </span> <span className = "component-heading"> Next Smaller Element </span></h1>
        <h3>Given an array, print the Next Smaller Element (NSE) for every element. The Smaller smaller Element for an element x is the first smaller element on the right 
        side of x in array. Elements for which no smaller element exist (on right side), consider next smaller element as -1. </h3>
        <h3>Naive Method: <br /> 
        Use two loops: The outer loop picks all the elements one by one. The inner loop looks for the first smaller element for the element picked by outer loop. <br />
        If a smaller element is found then that element is printed as next, otherwise, -1 is printed.</h3>
        <h3>Complexity: O(n^2) (Double Traversal of Array).</h3>
        <br />
        <img src={src} alt="" />
        <h2>Efficient Algorithm (Using Stack): </h2>
        <div className = "GreyBox">
        <pre>This problem is similar to next greater element. Here we maintain items in increasing order in the stack. <br />
        1) Push the first element to stack. <br />
        2) Pick rest of the elements one by one and follow following steps in loop. <br /> 
                    a) Mark the current element as next. <br />
                    b) If stack is not empty, then pop an element from stack and compare it with next. <br />
                    c) If next is smaller than the popped element, next is the next smaller element for popped element. <br />
                    d) Keep popping from the stack while the popped element is greater than next. next becomes <br />
                       the next smaller element for all such popped elements  <br />
        3) After the loop in step 2 is over, pop all the elements from stack and print -1 as next element for them.

        </pre>
        <div className = "space"></div>      <div className = "space"></div> <div className = "space"></div> <div className = "space"></div>       <h6> source: geeksforgeeks </h6> 
        </div>
        <h3>Complexity: O(n) [Linear] (Single Traversal of Array).</h3>
        <h2>Try this yourself:-</h2>
        <h2>Enter the size of Array:</h2>
        <div  className = "answer">{findd && <h2> Answer: {res.toString()} </h2> } </div>
        <input type="text" placeholder="Enter the Elements" onChange = {handle_elements} />
        <h5>[Input Elements separated by ',' (e.g: 1,2,3,4,5....)] </h5><br />
        <button onClick = {find_answers} >Find Answer</button>
        </div>
    );
}

export default NextSmallerElement;
