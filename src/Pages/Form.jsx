import React from "react";

export default function Form() {
    return(
<>
<p>hello</p>
<div>
    <label>Name</label>
    <input type="text" required />
    <label>Age</label>
    <input type="text" required />
</div>
<div>
    <label>Course</label>
    <input type="text" required/>
    <label >Batch</label>
    <input type="text" required/>
</div>
<button>Cancel</button>
<button>Update</button>
</>
    )
}