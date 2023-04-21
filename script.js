//your JS code here. If required.
let input = prompt("Enter a string");
for(let i = 0;i<input.length;i++) {
	let flag = 0;
	for(let j = 0;j<input.length;j++) {
		if(j!=i) {
			if(input.charAt(i)==input.charAt(j)) {
				flag = 1;
			}
		}
	}
	if(flag==0) {
		return input.charAt(i);
	}
}


