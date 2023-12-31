function generateBBCode() {
  const currentUTCDate = new Date();
  const month = currentUTCDate
    .toLocaleString("default", { month: "long", timeZone: "UTC" })
    .toUpperCase();
  const year = currentUTCDate
    .toLocaleString("default", { year: "numeric", timeZone: "UTC" })
    .toUpperCase();

  let inputTextArea = document.getElementById("input-textarea");

  let bbcode = `[altspoiler=${month} ${year} - OFFICER RECORD]\n`;

  if (inputTextArea.value.includes(bbcode)) {
    return;
  }

  bbcode += inputTextArea.value;

  bbcode += "\n[/altspoiler]";

  document.getElementById("input-textarea").value = bbcode;
}

function copyToClipboard() {
  const outputTextarea = document.getElementById("input-textarea");
  const textarea = document.createElement("textarea");
  textarea.value = outputTextarea.value;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}
