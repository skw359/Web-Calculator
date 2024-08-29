document.addEventListener('DOMContentLoaded', function() {
    const result = document.getElementById('result');
    const buttons = document.querySelectorAll('button');
    const title = document.getElementById('title');
    const text = "The classic simple calculator.";
    const duration = 1500;
    let index = 0;
    const interval = duration / text.length;

    function typeWriter() {
        if (index < text.length) {
            title.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, interval);
        } else {
            title.style.borderRight = 'none';
        }
    }

    typeWriter();

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.innerText === '=') {
                try {
                    result.value = eval(result.value);
                } catch (error) {
                    result.value = 'Error';
                }
            } else if (this.innerText === 'C') {
                result.value = '';
            } else {
                const currentValue = result.value;
                const newValue = currentValue + this.innerText;
                animateNumber(currentValue, newValue);
            }
        });
    });

    function animateNumber(oldValue, newValue) {
        result.value = oldValue;
        result.classList.remove('animate-pop');
        setTimeout(() => {
            result.value = newValue;
            result.classList.add('animate-pop');
        }, 10);
    }
});