let charts_data;
let selectedBar = 0
const datafetcher = async () => {
    await fetch('./data.json')
        .then(
            response => response.json())
        .then(
            data => charts_data = data
        )
        .catch(
            error => console.log(error)
        )
    const continer = document.querySelector('div.chart');

    const chart_flex = document.createElement('div');
    chart_flex.className = 'bars-continaer';
    continer.appendChild(chart_flex);

    document.querySelector('div.label-x').innerText = charts_data.labels.x;
    document.querySelector('div.label-y').innerText = charts_data.labels.y;
    const sorted_array = charts_data.items.sort((a, b) => b.value - a.value);
    const the_most_value = sorted_array[0].value;
    const width_of_bar = 100 / sorted_array.length;
    sorted_array.forEach((item, index) => {
        const item_height = (item.value / the_most_value) * 90;
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        bar.dataset.index = index;
        bar.classList.add('hoverable');
        
        if(index==0){
            selectedBar=index
            bar.classList.add('hover')
            changeinfo(
                item.title,
                item.value,
                item.description,)
        }
        bar.addEventListener('mouseover', () => {
            const old_bar = document.querySelector(`[data-index='${selectedBar}']`)
            old_bar.classList.remove('hover');
            selectedBar=index
            bar.classList.add('hover')
            changeinfo(
                item.title,
                item.value,
                item.description,)
        });
        // bar.addEventListener('mouseout', () => {
        //     // bar.classList.remove('hover');
        // })
        bar.style.height = item_height + "%";
        bar.style.width = width_of_bar + "%";
        bar.style.backgroundColor = item.color;
        chart_flex.appendChild(bar);

    });
}
function changeinfo(
    title,
    value,
    description,
) {
    const info = document.querySelector('.info');
    const infoTitle = info.querySelector('h2');
    const infoDes = info.querySelector('p');
    const infoValue = info.querySelector('pre');
    infoTitle.innerText = title;
    infoValue.innerText = value.toLocaleString();
    infoDes.innerText = description;
}
document.addEventListener('keydown', event => {
    const old_bar = document.querySelector(`[data-index='${selectedBar}']`)
    old_bar.classList.remove('hover');
    console.log(selectedBar)
    if (event.key === 'ArrowLeft') {
        selectedBar -= 1

    } else if (event.key === 'ArrowRight') {
        selectedBar += 1
    }
    if (selectedBar < 0) {
        selectedBar = charts_data.items.length - 1;
    }
    else if (selectedBar >= charts_data.items.length) {
        selectedBar = 0
    }
    const new_bar = document.querySelector(`[data-index='${selectedBar}']`)
    new_bar.classList.add('hover');
    changeinfo(
        charts_data.items[selectedBar].title,
        charts_data.items[selectedBar].value,
        charts_data.items[selectedBar].description,
    )
    // }
});
datafetcher();