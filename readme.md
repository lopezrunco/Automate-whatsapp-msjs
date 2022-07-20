<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Automate-whatsapp-msjs</h3>

  <p align="center">
    From an Excel file, automate the sending of messages through Whatsapp web.
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is a simple solution for a client problem:
Automate the sending of dozen of reminders to customers, through Whatsapp.
This project extract a list of phone numbers from an Excel file, create a QR code to login from Whatsapp web and send a custom message to all the numbers.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

![image](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* node.js
* npm

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/lopezrunco/Automate-whatsapp-msjs.git
   ```
2. Create your .xlsx file, for example:
    ```sh
    | F Name | L Name    | Date       | Phone      |
    |--------|-----------|------------|------------|
    | Lenny  | Gomez     | 05-12-2020 | 1234567890 |
    | Carl   | Perez     | 12-07-2021 | 0987654321 |
    | Homer  | Rodriguez | 19-08-2021 | 1112223334 |
    | Moe    | Smith     | 01-02-2022 | 5556667778 |
    | Fred   | Rock      | 11-10-2022 | 9990001234 |
    ```
3. Install NPM packages
   ```sh
   npm i
   ```
4. Customize the message
    ```js
    const text = "This is a automated wapp message"
    ```
5. Start the app
    ```bash
    npm start
    ```
6. Scan the Whatsapp QR on the terminal with your phone.
    The messages will be sent automatically

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>
