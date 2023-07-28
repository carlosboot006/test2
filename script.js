document.getElementById('filePicker').addEventListener('click', function() {
    if ('getFiles' in window) {
      window.getFiles();
    } else {
      alert('O gerenciador de arquivos não está disponível neste dispositivo.');
    }
  });
  