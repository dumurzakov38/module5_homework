		let num = prompt('Введите значение, от 1 до 10');

		num = Number(num);
		
		typeof num;

		let result = num;

			switch (result) {
    			case 0:
        			alert("результат равен 0")
        			break;
    			case 1:
        			alert("НЕ четное число")
    		    	break;
    			case 2:
    		    	alert("Четное число")
    		    	break;
 				case 3:
        			alert("НЕ четное число")
        			break;
        		case 4:
        			alert("Четное число")
        			break;
 				case 5:
        			alert("НЕ четное число")
        			break;
        		case 6:
        			alert("Четное число")
        			break;
 				case 7:
        			alert("НЕ четное число")
        			break;
        		case 8:
        			alert("Четное число")
        			break;
 				case 9:
        			alert("НЕ четное число")
        			break;
        		case 10:
        			alert("Четное число")
        			break;
    			default:
        			alert('Упс, кажется, вы ошиблись');
			}