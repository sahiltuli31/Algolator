import React,{useState}  from 'react'
import {MdViewArray} from "react-icons/md";
import src from "./kadanes.png";

function Kadanes() {


    const [sizee,set_size] = useState("0");
    const [string,add_ele] = useState("");
    const [error,set_error] = useState(false);
    const [ans,find_ans] = useState("");

    const errors = "Error! Check Input Instructions...";
    function handle_size(event){
        const new_size = event.target.value;
        set_error(false);
        find_ans("");
        set_size(new_size);
    }

    function handle_elements(event){
        const neww = event.target.value;
        add_ele(neww);
    }

    function find_answers()
    {
        const array = string.split(",");
         
        const ss = Number(string.length);
        const k = Number(array.length);
        const s = Number(sizee);
        if(k !== s || k === 0 || s === 0 || ss === 0)
        {
            set_error(true);
        }
        else
        {
            show_answers(array);
        }
    }

    function show_answers(arr){
            var max_cur=Number(arr[0]), max_global = Number(arr[0]);
            for (var i = 1; i < Number(arr.length); i++) {
                max_cur = Math.max(Number(arr[i]), max_cur + Number(arr[i]));
                max_global = Math.max(max_cur, max_global);
            }  
            find_ans(max_global);
        }

    

    return (
        <div className="content">
        <br />
        <h1 className="introo"> <span className = "heading-icons"> <MdViewArray size = {60} /> </span> <span className = "component-heading"> Kadane's Algorithm </span></h1>
        <h3>The simple idea of Kadane’s algorithm is to look for all positive contiguous segments of the array. And keep track of maximum sum contiguous segment among all positive segments .</h3>
        <br />
        <img src={src} alt="" />
        <h2>Algorithm: </h2>
        <div className = "GreyBox">
        <pre>Loop for each element of the array <br />
                (a) max_ending_here = max_ending_here + a[i] <br />
                (b) if(max_so_far &lt; max_ending_here) <br />
                     <div className = "space"></div>       max_so_far = max_ending_here <br />
                (c) if(max_ending_here &lt; 0) <br />
                <div className = "space"></div>       max_ending_here = 0 

        </pre>
        <div className = "space"></div>      <div className = "space"></div> <div className = "space"></div> <div className = "space"></div>       <h6> source: geeksforgeeks </h6> 
        </div>
        <h3>Complexity: O(n) [Linear] (Single Traversal of Array).</h3>
        <h2>Try this yourself:-</h2>
        <h2>Enter the size of Array:</h2>
        <div  className = "answer">{ans && <h2> Answer: {ans} </h2> } </div>
        <input type="text" placeholder="Size of Array" onChange= {handle_size}   />
        <input type="text" placeholder="Enter the Elements" onChange = {handle_elements} />
        <h5>[Input Elements separated by ',' (e.g: 1,2,3,4,5....)] </h5><br />
        {error && <div className = "errorr"> {errors}</div>}
        <button onClick = {find_answers} >Find Answer</button>
        </div>
    );
}

export default Kadanes;
