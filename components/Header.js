import React from "react"

export default function Header(){
    return (
    <header className="Header">
        <img className="Image" src="https://avatars.githubusercontent.com/u/57007690?v=4" />
        <h1 className="Name">Kyronne Parkes</h1>
        <h3 className="Role" >Full Stack Developer</h3>
        <h4 className="Github" ><a href="https://www.kyronne.com">www.kyronne.com</a></h4>
        <div className="Buttons"><a href="mailto:kyronne.parkes@gmail.com"><button className="Button1"><img className="Button2Image"  src="https://img.icons8.com/ios-glyphs/344/filled-message.png"/>Email</button></a><a href="https://www.linkedin.com/in/kyronne/"><button className="Button2"><img className="Button1Image" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />LinkedIn</button></a></div>
    </header>  
    )
}