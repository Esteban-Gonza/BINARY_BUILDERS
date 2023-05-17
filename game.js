document.addEventListener('DOMContentLoaded', function() {

    // Add event listeners to button elements
    document.getElementById('button1').addEventListener('click', toggleSwitch);
    document.getElementById('button2').addEventListener('click', toggleSwitch);
  
    // Function to toggle switch state
    function toggleSwitch(event) {
        const switchContainer = event.currentTarget;
        const switchImage = switchContainer.querySelector('img');

        // Toggle the switch state
        switchImage.classList.toggle('on');

        // Update the image source based on the current state
        if (switchImage.classList.contains('on')) {
            switchImage.src = 'switch-on.png';
            console.log('on');
        }else{
            switchImage.src = 'switch-off.png';
            console.log('off');
        }

        // Update the light bulb image
        updateLightBulb();
    }

    // Function to update the light bulb image based on button states
    function updateLightBulb() {
        const switch1 = document.getElementById('button1').querySelector('img');
        const switch2 = document.getElementById('button2').querySelector('img');
        const lightbulbImage = document.getElementById('lightbulb-image');

        if (switch1.classList.contains('on') || switch2.classList.contains('on')) {
            lightbulbImage.src = 'lightbulb-on.png';
        } else {
            lightbulbImage.src = 'lightbulb-off.png';
        }
    }

    // Initial update of the light bulb image
    updateLightBulb();
});