const numbers = [1,2,3,54, 1, 4,9];
for(const num of numbers){
    console.log(num)
}

const employee = {
  name: "Raja Rani",
  designation: "QA",
  salary: "20000",
  experience: 1,
  age: 22,
};

for(const key in employee){
    const value = employee[key];
    console.log(key, value);
}