'use strict'
onmessage = messageEvent => {
	let length = (messageEvent.data.gameboard.length/2) - 2;
	for(let i = length; 0 <= i; i--){
		if(0 < messageEvent.data.gameboard[i]){
			postMessage(i);
			break;
		}
	}
};