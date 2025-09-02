const demo = document.getElementById('demo');

demo.textContent = 'Changed!';

document.getElementById('demo').addEventListener('click', function() {
  alert('Paragraph clicked!');
});