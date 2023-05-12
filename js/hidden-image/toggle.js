function toggle_btn_img() {
    const element = document.getElementById('avatar');
    if (element.classList.contains('w3-hide')) {
        document.getElementById('btn').innerText = 'Hide!';
        element.classList.toggle('w3-hide')
    }
    else {
        document.getElementById('btn').innerText = 'Show!';
        element.classList.add('w3-hide')

    }
}