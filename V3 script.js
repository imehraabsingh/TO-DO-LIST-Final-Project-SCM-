  document.getElementById("taskForm").addEventListener("submit", function (event) {
            event.preventDefault();
            addTask();
        });

        function addTask() {
            var title = document.getElementById("title").value;
            var explanation = document.getElementById("explanation").value;
            var dueDate = document.getElementById("dueDate").value;

            var taskList = document.getElementById("taskList");

            var taskDiv = document.createElement("div");
            taskDiv.classList.add("task");

            var titleHeading = document.createElement("h2");
            titleHeading.textContent = title;

            var explanationPara = document.createElement("p");
            explanationPara.textContent = explanation;

            var dueDatePara = document.createElement("p");
            dueDatePara.textContent = "Due Date: " + dueDate;

            taskDiv.appendChild(titleHeading);
            taskDiv.appendChild(explanationPara);
            taskDiv.appendChild(dueDatePara);

            taskList.appendChild(taskDiv);

            // Clear form fields
            document.getElementById("title").value = "";
            document.getElementById("explanation").value = "";
            document.getElementById("dueDate").value = "";
        }
