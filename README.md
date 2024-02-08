
![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# lab-full-CRUD

<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>


  This exercise allows you to practice and apply the concepts and techniques taught in class. 

  Upon completion of this exercise, you will be able to:

  - Make requests to an API and handle the responses.
  - Use all 4 HTTP verbs to perform full CRUD on our resources.
  - Work with the JSON-server package to handle API functionality.

  <br>

  <hr> 


</details>

## Introduction



## Setup

- Fork this repo

- Clone the forked repo

- Open the LAB and start:

  ```bash
  cd lab-full-crud/frontend
  npm install
  npm run dev
  ```

- You can press O and hit enter on the terminal to launch the vite application on the browser
<br/>
<br/>
- In another terminal:

  ```bash
  cd lab-full-crud/json-server-backend
  npm install
  npm run dev
  ```

  That will start the mock backend for the lab

## Submission

- Upon completion, run the following commands:

  ```bash
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create a Pull Request and submit your assignment.

<br>


## Instructions

### Iteration 0 | test API endpoints

base URL of the API is:

**`https://localhost:5005/`**

The API provides the following endpoints:

| Method | Endpoint            | Response (200)                                         | Action                                                       |
| ------ | ------------------- | ------------------------------------------------------ | ------------------------------------------------------------ |
| `GET`  | `/beers`                 | [beers]                                                | Get all the beers from the DB                                |
| `GET`  | `/beers/:id`              | { beer }                                               | Get a single/specific beer                                   |
| `PUT`  | `/beers/:id`           | { beer }                                               | Update the value of a specific beer                                |
| `POST` | `/beers`              | { beer} | Create a new beer              | 
| `DELETE`  | `/beers/:id` |{}                                               | Delete a specific beer |


Test the endpoints provided for this API above in postman.



### Iteration 1 | BeersListPage component

First, create a component `BeersListPage.jsx` and the routing for it in the `App.jsx`

This component should make a request to the API through the endpoint that returns all the beers. Once the data is fetched display all the beers on the page



### Iteration 2 | Display a single beer

In this iteration, create a  `BeerDetailsPage` component and the routing for this component in the `App.jsx` .

When a user clicks on one of the beers in the list on the `AllBeersPage`, they should be navigated to the *Beer Details page* (`BeerDetailsPage`) where details of that specific beer should be shown.

<br>

#### 2.1 | Access URL Parameter

To access URL parameter `beerId` from the browser's URL bar, use the React Router hook `useParams`.

Check [this example](https://reactrouter.com/en/6.10.0/hooks/use-params) if you need a reminder of how to set up the useParams hook and access the URL parameters.

<br>



#### 2.2 | Make a request to the API

To get the beer details, you need to make a `GET` request to the Beers API endpoint `https://ih-beers-api2.herokuapp.com/beers/:id`, where `:id` should be replaced with the id of the selected beer. 

**Example:** [http://localhost:5005/beers/](http://localhost:5005/beers/)

Remember to **`console.log`** the response data to help you visualize the structure of the beer object and how the data is structured.

<br>



#### 2.3 | Display Beer Details

The `BeerDetailsPage` component should display the following information about the selected beer:

- `image`
- `name`
- `tagline`
- `first_brewed`
- `attenuation_level`
- `description`
- `contributed_by`

<br>



<details>


  <summary><b>See Expected Result</b></summary>



<div style="display: flex; justify-content: center">
  <img src="https://user-images.githubusercontent.com/23629340/40707269-84bedd78-63f0-11e8-86c3-b14efb9323a7.png" height="600px" />
</div>



  <br>

</details>



<br>

### Iteration 3 | Create a new beer

In this iteration, you will work on the `AddBeerPage` component in the `src/pages/AddBeerPage.jsx`.



When the user navigates to the `/new-beer` route in your react app, the `AddBeerPage` component should be rendered, displaying a `form` where the user can create new beers. 

<br>


The `form` should include the following:

- `input`:
  - Label: Name
  - Attributes: `name="name"` and `type="text"`
- `input`:
  - Label: Tagline
  - Attributes: `name="tagline"` and `type="text"`
- `textarea`:
  - Label: Description
  - Attributes: `name="description"` and `type="text"`
- `input`:
  - Label: First Brewed
  - Attributes: `name="first_brewed"` and `type="text"`
- `input`:
  - Label: Brewer's Tips
  - Attributes: `name="brewers_tips"` and `type="text"`
- `input`:
  - Label: Attenuation Level
  - Attributes: `name="attenuation_level"` and **`type="number"`**
- `input`:
  - Label: Contributed By
  - Attributes: `name="contributed_by"` and `type="text"`
- `button`:
  - Text: "Add Beer"
  - Attributes: `type="submit"`

<br>

**Note:** All inputs are of type `text` except `attenuation_level`, which is of type `number`. This is important because the API will only accept the request if all values have the correct data types.

<br>


Once you are done creating the form, make a `POST` request to the API endpoint `http://localhost:5005/beers/`, passing all the input values in the request `body` as an object. The fields of the request `body` should have exact **names** so that the API can create a new beer.

If everything goes well, you will receive a **200** response from the server. :beer:

The `attenuation_level` value must be set to the correct data type of `number`.  If a `string` is sent instead, the API will respond with a **500** error status code.

<br>



<details>


  <summary><b>See Expected Result</b></summary>



<div style="display: flex; justify-content: center">
  <img src="https://user-images.githubusercontent.com/23629340/40707877-3c9dad42-63f2-11e8-8c95-4881bbde64a2.png" height="600px" />
</div>





  <br>

</details>





<br>

### Iteration 4 | EditBeerPage component

Create a component `EditBeerPage.jsx` and the subsequent routing for it in the `App.jsx`

This component will handle the updating of the value of a single beer.

- Add a button in the previously created component `BeerDetailsPage` that will go to the `/beers/:id/edit` route.
- In the EditBeerPage.jsx component get the initial value of the beer to be edited using the id in the parameter
- Display the information of the beer to be edited in the form
- Finally add a function onSubmit that will take the information of the states represnting the beer information and send a put request to edit the beer

### Iteration 5 | Add Delete button

Now we have completed most of our CRUD operations with the previous iterations. The only action left is the deleting.

Lets add a button in the `BeerDetailsPage` component that when clicked will send a DELETE request to the API and then redirect to the BeersListPage.jsx




### Bonus: Iteration 6 | Filter the beers

As the final feature, we will implement a search functionality where users can filter beers based on keywords.

the package we are using for our API is called json-server. within this package we can add some extra information to the end of our GET request to narrow down the results of our get request. In this iteration 
check the documentation for the json-server package for filter **hint hint** the values we request from the API.

[json-server Official Documentation](https://github.com/typicode/json-server/tree/v0?tab=readme-ov-file#filter)


**We are done!** :trophy:



Awesome! If you're of legal drinking age and allowed to, feel free to celebrate with a beer! :wink: You've now become a **React Warrior**. Keep practicing, and soon you'll be a React Ninja!

<br>

Happy coding! :heart:

<br>
