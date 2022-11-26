import React from "react";

 const TLight = ({color,lit,setlit}) => {
	
	return (
		<div>
			<div className="TLight">
				style={{ background:color === lit ? color: "grey"}}
				onClick={() => setlit(color)}
			
		</div>
		</div>
	);
};
export default TLight;