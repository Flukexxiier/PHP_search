const searchType = document.getElementById('srFetch');
const btnFetch = document.getElementById('btnFetch');

const options = {
    method: 'GET', headers: {
        'X-RapidAPI-Key': 'b94548483cmsh33da8bcc7b4ae7ap1e3491jsn72af3efb9d89',
        // 'X-RapidAPI-Host': 'youtube-search6.p.rapidapi.com'
        // 'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        // 'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        'X-RapidAPI-Host': 'ytube-videos.p.rapidapi.com'
    }
};

let params = ''
function callParams() {

    params = searchType.value
    // console.log(searchType.value)
    fetch(`https://ytube-videos.p.rapidapi.com/search-video?q=${params}`, options)
    .then(response => response.json())
    .then(data => {
        let output = '';
        data.map(() => {
            
                output +=`

                <div class="root grid-items no_margin-top elements_box">

                    <div class="box">
                        <div class="preview"><img src='${('').thumbnail}' /></div>
                    </div>

                    <div class="box box_padding_lft">
                        <div class="box_title"><a href="content.php?data=${('').id}"><span class="title"> ${('').title} </span></a></div>
                    </div>

                    <div class="box">
                        <div class="box_time"><span class="time"> ${('').duration} </span></div>
                    </div>

                    <div class="box" style="text-align: right;">
                        <div class="action"> <a href="content.php?data=${('').id}" class="btnLoad"><i class="fa-solid fa-download"></i> ดาวน์โหลด</a> </div>
                    </div>

                </div>
                
            `;

        })
        document.querySelector('.contents').innerHTML = output;
    })
    .catch(err => console.error(err));
    // searchType.value = '';
}

btnFetch.addEventListener('click', callParams)