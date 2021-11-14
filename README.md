### Movie Search App

This movie-search uses the OMDB api to show details from a movie search.


#### QUIZ Walkthrough

```

//#1
new Promise((resolve, reject) => {
  resolve(10);
  console.log('P');
  reject(new Error(20));
})
  .then(x => console.log('F', x))
  .catch(x => console.log('R', x));


Results: 
P
F 10

//#2
Promise.resolve(42)
  .then(x => console.log(x))
  .then(x => console.log(x))
  .then(x => console.log(x));


Results: 
42


//3
p = new Promise((resolve, reject) => {
  console.log('RUN');
  resolve(42);
});
p.then(x => console.log(x));
p.then(x => console.log(x));
p.then(x => console.log(x));

Results:
RUN
42
42
42


```