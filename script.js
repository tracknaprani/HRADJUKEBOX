function addMessage() {
    var input = document.getElementById("text-input");
    var text = input.value;
    if (text.trim() !== "") {
      var messageList = document.getElementById("message-list");
      var li = document.createElement("li");
      var checkboxContainer = document.createElement("label");
      checkboxContainer.classList.add("checkbox-container");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("checkbox");
      checkbox.addEventListener("click", function() {
        // Zde můžete přidat akci po kliknutí na zaškrtávací čtvereček
      });
      var checkboxLabel = document.createElement("span");
      checkboxLabel.classList.add("checkbox-label");
      checkboxContainer.appendChild(checkbox);
      checkboxContainer.appendChild(checkboxLabel);
      li.appendChild(checkboxContainer);
      li.appendChild(document.createTextNode(text));
      messageList.appendChild(li);
      input.value = "";
    } else {
      alert("Napište prosím text zprávy.");
    }
  }
  
  