document.getElementById('processBtn').addEventListener('click', handleFile, false);

function handleFile() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const text = e.target.result;
      displayContent(text);
    };
    reader.readAsText(file);
  } else {
    alert("Please select a file.");
  }
}

function displayContent(text) {
  const originalContentElement = document.getElementById('originalContent');
  const manipulatedContentElement = document.getElementById('manipulatedContent');

  // Display the original content
  originalContentElement.textContent = text;

  // Manipulate the content
  const manipulatedStringText = manipulatedString(text);
  manipulatedContentElement.textContent = manipulatedStringText;
}

function manipulatedString(text) {
  // Convert to uppercase
  let result = text.toUpperCase();

  // Slice the string (for example, take the first 50 characters)
  result = result.slice(0, 50);

  // You can add more manipulations here (e.g., lowercase, replace, etc.)
  return result;
}
