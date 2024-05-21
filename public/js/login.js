const formcrate = document.getElementById("form-create");

formcrate.addEventListener("submit", function(event){
	event.preventDefault();

	const username = document.getElementById('username').value; // event.target.username
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
	
    const data = {
        username: username,
        email: email,
        password: password,
    }

    axios({
        method: 'post', 
        url: 'http://localhost:3000/users/create',
        data: data,
    }).then( response => {
        console.log('response', response);

        if(response.status === 200){
            
        }
    }).catch( error => {
        console.log('error', error);
    });

});








