import './css/WebPage.css';
import React from 'react'

//class Function
const WebPage = () =>       
<div class="Entry">    
    <p>
        <img src="https://media.giphy.com/media/13twUEuUnCrEju/giphy.gif" width="20%"></img>
    </p>
    <h1>Log Into Atomic Network</h1>
    <br></br>
    <p>
        <form id="DataEntry">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>        
                <label for="exampleInputEmail1">Select if you not a robot</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </p>
</div>

export default WebPage;