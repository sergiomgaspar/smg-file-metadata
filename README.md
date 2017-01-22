# File Metadata Microservice

This api was created for the FreeCodeCamp exercice "File Metadata Microservice"

* [FreeCodeCamp] - Link to the exercice
* [Heroku] - Online deployed version

### API description

The API allows the upload of a file and returns a simple JSON with the file size (in Bytes).

  - **Use-case 1:** User can submit a FormData object that includes a file upload.
  - **Use-case 2:** When user submits something, He/She will receive the file size in bytes within the JSON response.

## Example usage:
Use the URL below and chose a local file then click "submit"
```sh
https://smg-file-metadata.herokuapp.com/
```

### JSON Response
```sh
{
  "fileSize": 15432
}
```

## Local Installation

You'll need to have the latest verison of node.js installed. Either use your OS's package manager or follow the installation instructions on the [official website](http://nodejs.org).

Next, [install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) if it is not already installed. To clone this repository to your local machine, open a command line interface and navigate to your projects directory. Then type

`$ git clone https://github.com/sergiomgaspar/smg-file-metadata.git`

Move to the `smg-file-metadata` subdirectory and type `npm install`. This installs all of the API dependencies.

Finally, type `npm start` to start the application. If all goes well, it will be available at `http://localhost:3000`.

## Instalation setup *(optional)*

After installing the API a set of environment variables can be setup:

  - **DEBUG** - Define if debug is active **YES** vs **NO** *(default = NO)*
  - **PORT** - Port Number of express APP *(default = 3000)*

## Technologies used
This is a very small example of an API created in NodeJS using the Express Framework and the multer package.

## License

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the author has waived all copyright and related or neighboring rights to this work.

[FreeCodeCamp]: <https://www.freecodecamp.com/challenges/file-metadata-microservice>
[Heroku]: <https://smg-file-metadata.herokuapp.com/>