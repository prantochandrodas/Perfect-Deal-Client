import React from 'react';

const Blogs = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <div className='my-5' >
                <h1 className='text-2xl font-bold'>1. What are the different ways to manage a state in a React application? <br />
                    Ans:-
                </h1>
                <p>
                There are four main types of state you need to properly manage in your React apps: <br />
                1.Local state
                2.Global state
                3.Server state
                4.URL state
                </p>
            </div>
            <div className='my-5'>
                <h1 className='text-2xl font-bold'>How does prototypical inheritance work? <br /> Ans:-</h1>
                <p className='text-xl'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div className='my-5'>
                <h1 className='text-2xl font-bold'> What is a unit test?Why should we write unit tests?  <br /> Ans:-</h1>
                <p className='text-xl'>In computer programming, unit testing is a software testing method by which individual units of source code—sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures—are tested to determine whether they are fit for use. <br />
                They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.</p>

            </div>
            <div>
                <h1 className='text-2xl font-bold'>React vs. Angular vs. Vue? <br />Ans:-</h1>
                <p className='text-xl'>There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular. <br />
                React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework. <br />
                <br />
                They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences. <br /><br />
                Each framework is component-based and allows the rapid creation of UI features. <br /><br />
                However, they all have a different structure and architecture — so first, we’ll look into their architectural differences to understand the philosophy behind them.
                </p>
            </div>
        </div>
    );
};

export default Blogs;