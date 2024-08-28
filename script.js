document.addEventListener('DOMContentLoaded', function() {
    const result = document.getElementById('result');
    const buttons = document.querySelectorAll('button');

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
                result.value += this.innerText;
            }
        });
    });
});