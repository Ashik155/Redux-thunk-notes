<h1> Why We Need to use the Redux-Thunk </h1>
 When you making an api call from the react app and specifically when you use the action creators
 to make and api call and setting responses to the payload property it may throw an error like you have to use plain js and need to use some middle or custom middleware.
 By not doing so we are just Breaking the rules of redux as <b> Action Creator Must Return Plain JS object as Action </b>

 So now we need to use Middlewar and <b> Redux Thunk <b> is fulfilling our needs. 


 <h1> but Why ?? </h1>

 becuase we are using async await calls !!!!

The converted code in to plain javascirpt might be look like diffrent and it cannot be same as what redux requires and hence our app won't be runing correctly. 

Alternate Syntax of ASYNC AWAIT may also not proper !!


<h2> Redux-Thunk To Solve the Issue !! </h2>
  <h3> it's middleware ! </h3>
  Refer The cycle: 
  <img src="https://cdn-images-1.medium.com/max/2000/1*QxZJEXWhsS-YuG5SZsRgjA.png"> </img>

  
    1. function 
    2. Stop Modify or do things with actions 
    3. more avail on Open Source and we can write our own
    4. Dealing with ASYNC Requests

<h1> What are the rules ? </h1> </br>
Normal rules for Redux
    1. Action Creator must returns Action Objects
    2. Action Must have type property
    3. Action Must have optionally "payload"

Normal Rules with Middleware (specific to Redux-Thunk)
    1. Action creator may return <b> action object or Function <b> as well.
    2. If action then must have type and optionally payload property.

Refer image for wht redux-thunk actually do !

<img src="https://ncoughlin.com/static/72d6eefb8e89d64a06528e597561e1f7/b9caf/reduxThunkCycle.jpg"/>

<h2> Some Production Level Rules for the reducers </h3>

<img src="https://user-images.githubusercontent.com/14003377/61179865-f443c580-a5fa-11e9-8bd0-cbafa0819d7b.png"/>
</br>
1. It must return any value instead returns "undefined"

</br>

2. Refer Images Below:

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--RuENszZT--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/qje901cs5ezw3ygr9vd8.png"/></br>

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--nQ4oHNpH--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/sx9yndandw37b3sgg3r9.png"/>

3.
reducer nothing doing other things like API calls, document.write function and anything else. It just uses two arguments A.previous state B.action doing some competition or calculation to decide what to show next. That's all the works of reducer.

4 Must not mutate its input 'state' argument 

Okay, that's not the worst thing in the world.

This rule is trying to say that we can't mutate state in the reducer.

actually in react it's recommended that don't use

array/obg.push()

array/obg.pop()

methods to react.

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfr3hzxNgIdE0ST-qldgnN48VgNTqyBhObPw&usqp=CAU"/>