let entries = [];
const entriesWrapper = document.querySelector('#entries');

const addNewEntry = (newEntry) => {
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);
    const listItem = document.createElement('li');
    const listValue = document.createTextNode(newEntry);
    listItem.appendChild(listValue);

    entriesWrapper.appendChild(listItem);
}

    let goal = Number(prompt('Enter Your Goal For This Week', 0));
    
    document.getElementById('target').innerText = goal;

const reducer = (total, currentValue) => {
    return total + currentValue
}

const calTotal = () => {
    const totalValue = entries.reduce(reducer).toFixed(1);
    document.getElementById('total').innerText = totalValue;
    document.getElementById('progressTotal').innerText = totalValue;
    let message = document.getElementById('message');
    if (totalValue == goal) {
        document.getElementById('message').innerText = 'Great Job!! You have reached your Weekly Target of ' + goal + 'Miles';
    }else if (totalValue > goal) {
        document.getElementById('message').innerText = 'Wonderful!! You have surpassed your Weekly Target of ' + goal + ' Miles. You have run ' + totalValue + ' Miles';
    }else {
        document.getElementById('message').innerText = 'Keep Pushing';
    }
}

const calcAverage = () => {
    const average = (entries.reduce(reducer) / entries.length).toFixed(1);
    document.getElementById('average').innerText = average;
}

const weeklyHigh = () => {
    const high = Math.max(...entries);
    document.getElementById('high').innerText = high;
}

const calcGoal = () => {
    const totalValue = entries.reduce(reducer).toFixed(1);
    const completedPercent = totalValue / (goal / 100);
    let progressCircle = document.getElementById('progressCircle');
    if (completedPercent > 100) completedPercent === 100;
    progressCircle.style.background = `conic-gradient(#70db70 ${completedPercent}%, #2d3740 ${completedPercent}% 100%)`;
}

const handleSubmit = (event) => {
    event.preventDefault();
    const entry = Number(document.querySelector('#entry').value);
    if (!entry)return; 

    document.querySelector('form').reset();
    entries.push(entry);
    addNewEntry(entry);
    calTotal();
    calcAverage();
    calcGoal();
    weeklyHigh();
}


const form = document.querySelector('form').addEventListener('submit', handleSubmit);