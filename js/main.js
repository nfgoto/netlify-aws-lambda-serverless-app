const userList = document.getElementById('users');

const fetGithubUsers = async () => {
    const res = await fetch('/.netlify/functions/getUsers');
    return await res.json();
};


fetGithubUsers()
    .then(data => {
        data.forEach(user => {
            const li = document.createElement('li');
            li.className = 'list-group-item  d-flex justify-content-between align-items-center';
            const userLink = document.createElement('a');
            userLink.appendChild(document.createTextNode(user.login));
            userLink.href = user.html_url;
            userLink.target = '_blank';
            li.appendChild(userLink);

            userList.appendChild(li);
        });
    })
    .catch(err => console.log(err));