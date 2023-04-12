// Question no 1 

function AdditionNumber(AddNumber) {
    return function(num) {
      return num + AddNumber;
    }
  }
  const addFive = AdditionNumber(5);
  const result1= addFive(10);
  console.log(result1); 

// Question no 2  

function searchArray(arr, value) {
    if (arr.length === 0) {
      return false;
    }
    if (arr[0] === value) {
      return true;
    }
    return searchArray(arr.slice(1), value);
  }
  const myArray = [1, 2, 3, 4, 5];
  const valueToSearch = 5;
  const result = searchArray(myArray, valueToSearch);
  console.log(result);

// Question no 3 

function addParagraphToDocument(text) {
    const newParagraph = `<p>${text}</p>`;
    document.body.innerHTML += newParagraph;
  }
  addParagraphToDocument('This is printed using JavaScript') 
  
// Qurestion no 4 

function addListItemToUnorderedList(text) {
    const unorderedList = document.querySelector('ul');
    const newListItem = `<li>${text}</li>`;
    unorderedList.innerHTML += newListItem;
  }
  addListItemToUnorderedList('Item 3');

// Question no 5
  
function changeBackgroundColor(element, color) {
    const targetElement = document.querySelector(element);
    if (targetElement) {
      targetElement.style.backgroundColor = color;
    } else {
      console.error('Element not found:', element);
    }
  }

// Question no 6 

function saveObjectToLocalStorage(key, object) {
    const jsonString = JSON.stringify(object);
    localStorage.setItem(key, jsonString);
  }
  const myObject = {
    name: "Muhammad Salman",
    age: 25,
    city: "Lahore"
  };
  saveObjectToLocalStorage("myObject", myObject);

// Question no 7

function getObjectFromLocalStorage(key) {
    const jsonString = localStorage.getItem(key);
    const object = JSON.parse(jsonString);
    return object;
  }
const myObject1 = getObjectFromLocalStorage("myObject");
console.log(myObject.name); 
console.log(myObject.age); 
console.log(myObject.city); 

// Question no 8 

function saveObjectPropertiesToLocalStorage(object) {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const value = object[key];
        const jsonString = JSON.stringify(value);
        localStorage.setItem(key, jsonString);
      }
    }
    const retrievedObject = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const jsonString = localStorage.getItem(key);
      const value = JSON.parse(jsonString);
      retrievedObject[key] = value;
    }
    return retrievedObject;
  }
  const myObject2 = {
        name: "Huzaifa",
        age: 23,
        city: "Karachi"
      };
  
  saveObjectPropertiesToLocalStorage(myObject2);
  const retrievedObject = saveObjectPropertiesToLocalStorage();
  console.log(retrievedObject.name); 
  console.log(retrievedObject.age); 
  console.log(retrievedObject.city); 
  
