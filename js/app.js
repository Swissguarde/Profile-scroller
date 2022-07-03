const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'Male',
        location : 'Boston MA',
        lookingfor: 'Female',
        image: 'https://randomuser.me/api/portraits/men/72.jpg'
    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'Female',
        location : 'Miami FL',
        lookingfor: 'Male',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'William Johnson',
        age: 39,
        gender: 'Male',
        location : 'Boston MA',
        lookingfor: 'Female',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    }

]

const profiles = profileIterator(data)
// Call first profile
nextProfiile()
// Next Event
document.getElementById('next').addEventListener('click', nextProfiile)

// Next Profile display
function nextProfiile(){
    const currentProfile = profiles.next().value
    if(currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender}</li>
            <li class="list-group-item">Looking For: ${currentProfile.lookingfor}</li>
        </ul>
    `
    document.getElementById('imgDisplay').innerHTML =  `<img src="${currentProfile.image}">`
    }else{
        window.location.reload()
    }
}

// Profile Iterator
function profileIterator(profiles){
    let nextIndex = 0

    return {
        next: function(){
            return nextIndex < profiles.length ? {value: profiles[nextIndex++], done:false} : {done: true}
        }
    }
}