import React from 'react';
import './css/Header.css';

//class Function
const Header = () =>    
<div id="Header">    
    <div class="btn-extra" type="button">
        <button id="GitHubSlides">
            Show me some Projects
        </button>
    </div>
    <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
    Main Options
    </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Reference 1</a></li>
            <li><a class="dropdown-item" href="#">Reference 2</a></li>
            <li><a class="dropdown-item" href="#">Reference 3</a></li>
        </ul>
    </div>
    
    <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
    Tutorials
    </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Reference 1</a></li>
            <li><a class="dropdown-item" href="#">Reference 2</a></li>
            <li><a class="dropdown-item" href="#">Reference 3</a></li>
        </ul>
    </div>
    <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
    About
    </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Reference 1</a></li>
            <li><a class="dropdown-item" href="#">Reference 2</a></li>
            <li><a class="dropdown-item" href="#">Reference 3</a></li>
        </ul>
    </div>
</div>

{/* <div id="Header">
    <table class="Table">
        <tr>
            <th>
                <a>Tutorials</a>
            </th>
            <th>
                <a>References</a>
            </th>
            <th>
                <a>About</a>
            </th>
        </tr>        
    </table>
</div> */}

export default Header;