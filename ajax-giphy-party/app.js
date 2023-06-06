console.log("Let's get this party started!");



async function searchGif(input) {
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
        params: {
            api_key: 'i29JAVySRXjVSVhNiRShf0xuBDq8uWFN',
            q: `${input}`
        }
    });
    const resLength = (res.data.data.length)
    const rnd = Math.floor(Math.random() * resLength)
    const url = (res.data.data[`${rnd}`].images.fixed_height.url)
    addGif(url);
    console.log(res.data.data[0].images.fixed_height.url)
}

function addGif(search) {  
    const gif = $('<img>');
    gif.attr('src', `${search}`)
    $('#gifSpace').append(gif)
}

$('#search').on('click', function(e){
    e.preventDefault();
    const input = $('#user-input').val();
    console.log(input);
    searchGif(input);
  });
  
$('#remove').on('click', function(e){
    e.preventDefault();
    $('#gifSpace').empty()
})
