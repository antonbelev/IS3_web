function parser(expr, index){
	var stack = expr.split(" ");
	if(stack.length < 3 || stack.length%2 == 0){
		throw ("Invalid expression");
	}
	var result = 0;
	while (stack.length > 1){
		var arg1 = stack[0];
		var arg2 = stack[1];
		var opp = stack[2];
		var num1 = parseFloat(arg1);
		var num2 = parseFloat(arg2);
		if (isNaN(num1)){
			num1 = parseFloat(json[index][arg1]);
		}
		if (isNaN(num2)){
			num2 = parseFloat(json[index][arg2]);
		}
		stack.shift();
		stack.shift();
		switch(opp){
			case "+":
				stack[0] = num1 + num2;
				break;
			case "-":
				stack[0] = num1 - num2;
				break;
			case "*":
				stack[0] = num1 * num2;
				break;
			case "/":
				stack[0] = num1 / num2;
				break;
			default:
				throw "invalid expression";
		}
	}
	return stack[0];
}

function insertCustomAttribute(expr, attributeName) {
	for (var i = 0; i < json.length; i++) {
		json[attributeName] = parseFloat(parser(expr, i));
	}
}