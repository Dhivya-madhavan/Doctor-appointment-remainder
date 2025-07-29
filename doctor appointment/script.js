const form = document.getElementById('appointmentForm');
const appointmentsList = document.getElementById('appointmentsList');

// Load appointments from localStorage
window.onload = function () {
  const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
  appointments.forEach(displayAppointment);
};

// Form submit
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const appointment = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    specialization: document.getElementById('specialization').value,
    doctor: document.getElementById('doctor').value,
    date: document.getElementById('date').value,
    time: document.getElementById('time').value
  };

  // Save to localStorage
  let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
  appointments.push(appointment);
  localStorage.setItem('appointments', JSON.stringify(appointments));

  displayAppointment(appointment);
  form.reset();
});

// Display appointment
function displayAppointment(appointment) {
  const li = document.createElement('li');
  li.innerHTML = `
    <strong>${appointment.name}</strong> (${appointment.phone})<br>
    ${appointment.specialization} - Dr. ${appointment.doctor}<br>
    📅 ${appointment.date} 🕒 ${appointment.time}
  `;
  appointmentsList.appendChild(li);
}
