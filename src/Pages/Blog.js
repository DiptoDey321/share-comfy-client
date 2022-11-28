import React from 'react'

function Blog() {
  return (
    <div className='mx-[10%] my-20'>
    <h2 className='text-[30px] font-bold text-[#270000] Yeseva'>Welcome to Share-Comfy </h2>
    <p className='text-xl mt-3 Roboto'>Have a look to our latest Blogs : </p>

    <div className="flex justify-center ">
        <div className='mt-10 mx-10 flex gap-10 flex-wrap'>
            <div className="max-w-[450px] border p-4 rounded">
                <h2 className='text-[25px] font-semibold'> What are the different ways to manage a state in a React application?</h2>
                <p className='text-gray-600 mt-5'>
                React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app
                <br />
                React's useState is the best option for local state management. If you need a global state solution, the most popular ones are Redux, MobX, and the built-in Context API. Your choice will depend on the size of your project, your needs, and your engineers' expertise.
                </p>
            </div>

            <div className="max-w-[450px] border p-4 rounded">
                <h2 className='text-[25px] font-semibold'>How does prototypical inheritance work?</h2>
                <p className='text-gray-600 mt-5'>
                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object<br />
                JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
                </p>
            </div>

            <div className="max-w-[450px] border p-4 rounded">
                <h2 className='text-[25px] font-semibold'>What is a unit test? Why should we write unit tests?</h2>
                <p className='text-gray-600 mt-5'>
                The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages. <br />
                When should you write unit tests?
                For Test-Driven Development (TDD), you write unit tests before writing any implementation. This makes your implementation details in your code shorter and easier to understand. In this instance, the best time to write unit tests is immediately. For others, most developers write unit tests after the code's been written.
                </p>
            </div>

            <div className="max-w-[450px] border p-4 rounded">
                <h2 className='text-[25px] font-semibold'>How does NodeJS handle multiple requests at the same time?</h2>
                <p className='text-gray-600 mt-5'>
                Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option <br />
                Popularity. According to a survey by Stack Overflow 40.13% of the developers believe that React is the most commonly used JavaScript Framework. Angular and Vue follow it with 22.96% and 18.97%, respectively.Is Angular or React better in 2022?
                For teams building an application out of a small learning curve, React is a go-to option. At the same time, when creating an enterprise-grade app with extensive development, Angular will fit best as a steeper learning curve is not a problem for these teams.
                </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Blog