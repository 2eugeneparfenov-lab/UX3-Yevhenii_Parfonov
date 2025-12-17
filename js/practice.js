const goToTask = document.querySelector(".little_button2");

goToTask.addEventListener("click", (e) => {
   window.location.href='task_pr.html';
});

const dropdownCards = document.querySelectorAll('.stat_card.dropdown');

/* відкриття */
dropdownCards.forEach(card => {
   const value = card.querySelector('.stat_value');
   const dropdown = card.querySelector('.lang_dropdown');
   const items = dropdown.querySelectorAll('.lang_item');
   const storageKey = card.dataset.storage; // ключ

   /* відновлення */
   const savedValue = localStorage.getItem(storageKey);
   if (savedValue) {
      value.textContent = savedValue;
   }

   card.addEventListener('click', (e) => {
      e.stopPropagation();

      document.querySelectorAll('.lang_dropdown').forEach(d => {
         if (d !== dropdown) d.style.display = 'none';
      });

      dropdown.style.display =
          dropdown.style.display === 'flex' ? 'none' : 'flex';
   });

   items.forEach(item => {
      item.addEventListener('click', (e) => {
         e.stopPropagation();

         const selected = item.textContent;
         value.textContent = selected;

         localStorage.setItem(storageKey, selected); // збереження

         dropdown.style.display = 'none';
      });
   });
});

document.addEventListener('click', () => {
   document.querySelectorAll('.lang_dropdown').forEach(d => {
      d.style.display = 'none';
   });
});

const taskInfo = document.querySelector('.task_info a');
const skipBtn = document.querySelector('.little_button');

const tasks = [
   `Develop a program in Python that works with
an array of integers. The program should read
a sequence of numbers from the keyboard, store
them in an array, find all even elements, calculate
their average value, and display the result on the
screen. If the array contains no even numbers, the
program should display the message
"No even elements".

Example of execution:
Enter numbers separated by spaces: 4 7 9 2 10 3
Average of even numbers: 5.33`,

   `Write a program that reads a list of numbers from the user
and outputs them in ascending order.
If the list is empty, output “Empty list”.

Example:
Enter numbers separated by spaces: 4 1 7 3
Sorted list: [1, 3, 4, 7]".

Example:
Enter numbers separated by spaces: 2 3 4 5
Sum of odd numbers: 8`,

    `Develop a Python program that reads a string and counts
how many times each letter appears in the string.
Output the result as a dictionary.

Example:
Enter a string: hello
Result: {‘h’: 1, ‘e’: 1, ‘l’: 2, ‘o’: 1}`,

`Write a program that outputs all prime numbers from 1 to N,
where N is entered by the user. If there are no prime numbers, output “No primes”.

Example:
Enter N: 10
Prime numbers: 2 3 5 7`,

   `Write a Python program that processes an array
of integers entered by the user. The program must
remove all duplicate elements and then print the
resulting array in ascending order. If the user enters
an empty input, the program should display the
message "No data provided".

Example of execution:
Enter numbers separated by spaces: 5 3 8 3 1 5 9
Result: [1, 3, 5, 8, 9]`
];

let currentTaskIndex = 0;

skipBtn.addEventListener('click', () => {
   currentTaskIndex = (currentTaskIndex + 1) % tasks.length; // перемикаємо по колу
   taskInfo.textContent = tasks[currentTaskIndex];
});



