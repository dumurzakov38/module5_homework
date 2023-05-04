		let x = Object;

		const result = x;

		switch (result) {
    		case Number:
        		console.log('X - Число');
        		break;
    		case String:
        		console.log('X - Строка');
        		break;
    		case Boolean:
        		console.log('X - Логический Тип');
        		break;
    		default:
        		console.log('Тип x не определён')
			}