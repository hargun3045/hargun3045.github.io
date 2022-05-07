class TypeWriter {
    constructor(txtElement, words, wait = 1000,stop=false) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex=0;
        this.wait = parseInt(wait,10);
        this.type();
        this.isDeleting = false;
        this.stop = stop;
    }


    type() {

        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
            // Remove a character
            this.txt = fullTxt.substring(0,this.txt.length - 1)
        } else {
            // Add a character
            this.txt = fullTxt.substring(0,this.txt.length + 1)
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`
        // Initial Type Speed
        let typeSpeed = 100;
        // What does () => mean ? 

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // if word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 250;
        };
        
        // No idea what this line does
        if (!this.stop) {
        setTimeout(() =>  this.type(),typeSpeed)
        }
    }
}

// Init on DOM Load

document.addEventListener('DOMContentLoaded',init);

// Init function

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Initialize the typewriter
    writer  = new TypeWriter(txtElement, words, wait,false); 
    // console.log(`The value for stop is ${newtype.stop}`)
    // newtype.stop = true;
    // console.log(`The value for stop is ${newtype.stop}`)
}

document.addEventListener('DOMContentLoaded', stop);

function stop() {
    let stop = document.querySelector('#stop-txt');
    stop.addEventListener('click', function () {
        if (writer.stop==false) {
        writer.stop = true;
        stop.innerHTML = 'Start talking'
        } else {
            const txtElement = document.querySelector('.txt-type');
            const words = JSON.parse(txtElement.getAttribute('data-words'));
            const wait = txtElement.getAttribute('data-wait');
            writer = new TypeWriter(txtElement,words,wait);
            stop.innerHTML = 'Stop talking!'
        }
    })


}

document.addEventListener('DOMContentLoaded', edit_info);

function edit_info() {
    let user_response = document.querySelectorAll('#info-btn');
    user_response[0].addEventListener('click', function() {
        document.querySelector('#info-input').innerHTML = 'Email id: hargun3045@gmail.com'});
    user_response[1].addEventListener('click',function(){
            document.querySelector('#info-input').innerHTML = 'Ph.no: +91 7775978947'});}

        