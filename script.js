//your JS code here. If required.
const main=document.querySelector(".container");
for(let i=0;i<800;i++){
	const square=document.createElement("div")
	 square.classList.add("square");

	square.addEventListener("mouseover",()=>{
		let color=randomColor();
		square.style.backgroundColor=color;
		
		
	})
	 square.addEventListener("mouseout", () => {
        square.style.backgroundColor = "rgb(29, 29, 29)";
    });

	
	 main.appendChild(square);
	
}
function randomColor() {
	const letters="0123456789ABCDEF";
	let color="#";
	for(let i=0;i<6;i++){
		color+=letters[Math.floor(Math.random()*16)]
	}
	return color
	
}
