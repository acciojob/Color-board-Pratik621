//your JS code here. If required.
const main=document.querySelector(".container");
for(let i=0;i<800;i++){
	const squares=document.createElement("div")
	 squares.classList.add("sqaure");

	squares.addEventListener("mouseenter",()=>{
		let color=randomColor();
		squares.style.backgroundColor=color;
		setTimeout(()=>{
			squares.style.backgroundColor="#111";
			
	},1000)
		
	})
	
	
	 main.appendChild(squares);
	
}
function randomColor() {
	const letters="0123456789ABCDEF";
	let color="#";
	for(let i=0;i<6;i++){
		color+=letters[Math.floor(Math.random()*16)]
	}
	return color
	
}
