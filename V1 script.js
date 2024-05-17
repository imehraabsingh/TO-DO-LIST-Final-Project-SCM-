 function addTask() {
                var taskInput = document.getElementById("taskInput");
                var taskList = document.getElementById("taskList");

                if (taskInput.value === "") {
                    alert("Please enter a task!");
                    return;
                }

                // Create a new list item
                var li = document.createElement("li");
                li.innerHTML = taskInput.value + '<button onclick="removeTask(this)">Remove</button>';
                li.addEventListener("click", function() {
                    this.classList.toggle("completed");
                });

                // Add the new item to the list
                taskList.appendChild(li);

                // Clear the input field
                taskInput.value = "";
            }

            // Function to remove a task
            function removeTask(button) {
                var li = button.parentNode;
                li.parentNode.removeChild(li);
            }
