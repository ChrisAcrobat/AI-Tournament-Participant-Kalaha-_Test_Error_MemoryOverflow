'use strict'
let sleep;
let a = Math.PI.toString();
setInterval(()=>a+=a, 1);
ParticipantHelper.init = settings => {
	sleep = settings.general.timelimit_ms*.9;
}
ParticipantHelper.onmessage = data => {
	setTimeout(()=>{
		let length = (data.length/2) - 1;
		for(let i = 0; 0 < length; i++){
			if(0 < data[i]){
				ParticipantHelper.respond(i);
				return;
			}
		}
	},sleep);
}
