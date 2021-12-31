interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required' 'positive']
  };
}

const registeredValiator: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValiator[target.constructor.name] = {
    //target.constructor.name = Course
    ...registeredValiator[target.constructor.name],
    [propName]: ["required"],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValiator[target.constructor.name] = {
    ...registeredValiator[target.constructor.name],
    [propName]: ["positive"],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValiator[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;

          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;

  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;
  const title = titleEl.value;
  const price = +priceEl.value;

  console.log(price);

  const createdCourse = new Course(title, price);
  if(!validate(createdCourse)){
      alert("qualcosa non è andato a buon fine");
  }

  console.log(createdCourse);
});
