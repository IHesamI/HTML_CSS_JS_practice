document.addEventListener('keydown',
(e)=>{
    console.log(e.keyCode)
        const square=document.getElementById('square')
        let addvalue=1;
        if (e.shiftKey){
            addvalue=10;
        }
        switch(e.keyCode) {

            case 37: // Left arrow key
                square.style.setProperty('left',parseInt(getComputedStyle(square).getPropertyValue('left'))-addvalue +'px');
                break;
                case 38: // Up arrow key
                square.style.setProperty('top',parseInt(getComputedStyle(square).getPropertyValue('top'))-addvalue +'px');
                break;
                case 39: // Right arrow key
                square.style.setProperty('left',parseInt(getComputedStyle(square).getPropertyValue('left'))+addvalue +'px');
                break;
                case 40: // Down arrow key
                square.style.setProperty('top',parseInt(getComputedStyle(square).getPropertyValue('top'))+addvalue +'px');
                break;
            default:
            // Do something else
            break;
    }})
