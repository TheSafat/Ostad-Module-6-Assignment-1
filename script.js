const inp = document.getElementById('input');
const img = document.getElementById('img');
const btn = document.getElementById('btn');
const out = document.getElementById('out');

let age = inp.value;

if(!isNaN(age))
{
    age = JSON.parse(localStorage.getItem('age'));
    age = parseInt(age);
}

out.innerText = age;

if(age<18)
{
    out.innerText = 'You are a child';
    img.setAttribute('src', 'https://images.unsplash.com/photo-1526634332515-d56c5fd16991?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
}
else
{
    out.innerText = 'You are an Adult';
    img.setAttribute('src', 'https://images.unsplash.com/photo-1594814028668-9b44cea6a5ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
}

function age_scale()
{
    age = inp.value;
    localStorage.setItem('age', JSON.stringify(age));
}

