let p = document.getElementById('demo');
p.textContent = 'Changed!';

document.getElementById('demo').addEventListener('click', function() {
  alert('Paragraph clicked!');
});