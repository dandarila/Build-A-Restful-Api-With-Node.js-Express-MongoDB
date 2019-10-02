
fetch('http://localhost:3000/posts')
.then(result => {
   return result.json();
})
.then (data => {
    console.log(data)
    document.getElementById('header1').innerHTML = data[0].title;
});