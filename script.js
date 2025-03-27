// Simple interactivity for demonstration purposes
document.addEventListener('DOMContentLoaded', function() {
    // Temperature controls
    const tempButtons = document.querySelectorAll('.temp-btn');
    const tempDisplay = document.querySelector('.temp-controls .big-stat');
    let currentTemp = 70;
    
    tempButtons.forEach(button => {
      button.addEventListener('click', function() {
        if (button.textContent === '+') {
          currentTemp++;
        } else {
          currentTemp--;
        }
        tempDisplay.textContent = `${currentTemp}°F`;
      });
    });
    
    // Toggle switches
    const toggleSwitches = document.querySelectorAll('.toggle-switch input');
    
    toggleSwitches.forEach(toggle => {
      toggle.addEventListener('change', function() {
        const deviceItem = this.closest('.device-item');
        const statusIndicator = deviceItem.querySelector('.status-indicator');
        
        if (statusIndicator) {
          if (this.checked) {
            statusIndicator.classList.replace('status-off', 'status-on');
            deviceItem.querySelector('.device-status span').textContent = 'On';
          } else {
            statusIndicator.classList.replace('status-on', 'status-off');
            deviceItem.querySelector('.device-status span').textContent = 'Off';
          }
        }
      });
    });
  });