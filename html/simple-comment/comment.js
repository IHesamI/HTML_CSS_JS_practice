fetch('count.json')
    .then(
        response => response.json()
    ).then(
        data => {

            const likes = document.getElementById('likes')
            likes.innerHTML=`${data['count']}`
        }
    )