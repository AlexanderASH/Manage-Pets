# **Manage-Pets**

## **Installation**
1. Clone the project.
2. Open the project in your favorite code editor.
3. Execute in the terminal the command "npm i" for installs the dependecies.
4. Execute npm run seeder, wait it until finalized.
6. Create a file .env and copy the defined variables in the file .env.copy and fill it.
5. Finally execute the command npm run dev.

> Note: If you have the error of ts-node command not recognized install the package of the next manner "npm i -g ts-node"

## **Defined Endpoints**
* __GET__ api/v1/pets
* __POST__ api/v1/pets
* __PUT__ api/v1/pets/:id
* __DELETE__ api/v1/pets/:id

## **Example of JSON for creating and updating**
```
{
    "name": "Pcua",
    "description": "Pet happy",
    "color": "black",
    "size": "small",
    "image": "www.aws.ol/pcua",
    "gender": "male",
    "typeId": 1
}
```

## **Description**
For the part of the endpoint search I used query params which are:

**URL?page={}&limit={}sort={name}&order={ASC|DESC}&{type}={value}&gender={value}...&{attribute}={value}**

The values page and limit have values by defect if it don't pass it for params. The page will be 0 and limit 100.

## **Examples of the endpoint search**
By name, sorted alphabetically
> **URL/api/v1/pets?sort=name&order=ASC**

By pet type (cat, dog, etc) sorting by date
> **URL/api/v1/pets?sort={id|created_at}&order=DESC&type={typeId}**

By gender and type (female dog) sorting by date, most recent to least recent.
> **URL/api/v1/pets?sort={id|created_at}&order=DESC&gender=female&type={typeId}**