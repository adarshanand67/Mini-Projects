<!-- Adarsh Anand Gym Registration form -->
<!DOCTYPE html>
<html>

<head>
  <title>Gym Membership Form</title>
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
  <!-- Adding favicon -->
  <link rel="shortcut icon" href="./dumbbell-solid.svg" type="image/x-icon">
  <style>
    html,
    body {
      min-height: 50%;
      padding: 20px 320px;
      margin: 0px 50px;
      background-image: url(https://source.unsplash.com/random/?gym);
      background-size: cover;
      background-attachment: fixed;
    }

    body,
    div,
    form,
    input,
    select,
    p {
      padding: 0;
      margin: 0;
      outline: none;
      font-family: Roboto, Arial, sans-serif;
      font-size: 14px;
      color: #666;
      line-height: 22px;
    }

    h1 {
      /* position: absolute; */
      margin: 0;
      font-size: 36px;
      color: #fff;
      z-index: 2;
    }

    span.required {
      color: red;
    }

    .testbox {
      display: flex;
      justify-content: center;
      align-items: center;
      height: inherit;
      padding: 20px;
    }

    form {
      width: 100%;
      padding: 20px;
      border-radius: 6px;
      background: #fff;
      box-shadow: 0 0 30px 0 #095484;
    }

    .banner {
      position: relative;
      height: 580px;
      /* background-image: url("/uploads/media/default/0001/01/9e07ce3a601795a5ac09a66a0c1fc8978e0ee51a.jpeg"); */
      background-image: url(https://source.unsplash.com/random/1240x580/?fitness);
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .banner::after {
      content: "";
      background-color: rgba(0, 0, 0, 0.4);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    p.top-info {
      margin: 10px 0;
      color: black;
      font-size: 20px;
      text-align: center;
      font-weight: 10px;
    }

    input,
    select {
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }

    input {
      width: calc(100% - 10px);
      padding: 5px;
    }

    select {
      width: 100%;
      padding: 7px 0;
      background: transparent;
    }

    .item:hover p,
    .question:hover p,
    .question label:hover,
    input:hover::placeholder {
      color: #095484;
    }

    .item input:hover,
    .item select:hover {
      border: 1px solid transparent;
      box-shadow: 0 0 5px 0 #095484;
      color: #095484;
    }

    .item {
      position: relative;
      margin: 10px 0;
    }

    .question input {
      width: auto;
      margin: 0;
      border-radius: 50%;
    }

    .question input,
    .question span {
      vertical-align: middle;
    }

    .question label {
      display: inline-block;
      margin: 5px 20px 15px 0;
    }

    .btn-block {
      margin-top: 10px;
      text-align: center;
    }

    button {
      width: 150px;
      padding: 10px;
      border: none;
      border-radius: 5px;
      background-color: #095484;
      font-size: 16px;
      color: #fff;
      cursor: pointer;
    }

    button:hover {
      background: #0666a3;
    }

    @media (min-width: 568px) {

      .name-item,
      .city-item {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }

    footer {
      background-color: #095484;
      color: white;
      padding: 10px;
      text-align: center;
      font-size: 14px;
    }
  </style>
</head>

<body>
  <div class="testbox">