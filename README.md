# Automated Essay Grading

Download the dataset from [here](https://www.kaggle.com/c/asap-aes/data) and place it in a dataset folder

The project is built on python 3, so you have to install python 3. Click [here](https://www.python.org/downloads/release/python-370/) for details on installation

Install the python modules need for the project by running the command

```bash
pip install -r requirement.txt
```

After, installing the needed modules, run the command

```bash
python read_dataset.py
```

Which creates a data folder of the extracted essays from the excel file placing them in their set folders

---

## Model Training

The model for the system has already been trained with the downloaded dataset from kaggle challenge. The model object was saved in the model.pickle file and loaded into the system for faster predictions and resolving memory issues to always re-train the model for any new input essay.

To re-train the nlp model for the automated essay grading, run the following command in the terminal

```bash
python model_train.py
```

After the model is trained, the object model is saved in the model.pickle file which can then be loaded back into the system using pickle.

In adding more feature selection and extraction for the model. It is recommended to use the extract class found in the utils/extract.py file. The extracted value must be added to the list of features such as

```python
class Extract():
    def __init__(self):
        # other extracted features
        self.feature_extract = extract_function(self.doc)

    def get_features(self):
        # some extracted values
        features.append(self.feature_extract)

        # more code
        return features
```

To test the trained model, run the model_test.py file in the terminal which has the code to test the model from the test dataset of essays

```bash
python model_test.py
```

---

## Application Development

### Backend server

The web application is built with react and es6 javascript transpiled with babel and bundled with webpack. The backend server is built with python Flask. To start development with the backend server, it is recommended to install all the modules required by running the pip install command above. After installing the required modules, run the python command

```bash
python app.py
```

Which starts the server running on port 4000. For the database setup, configuration and data import, please contact the developers. Or send an email to timdereaper1@gmail.com for more information.

### Frontend application

The frontend is built with react and es6, all the code is stored in the src folder and compiled to es5 then stored in the app/static folder, which is the build folder for the frontend. The system has already been configured to load the javascript files into the index.html when the home route is being served by the server.

To start with the app development, first must have node installed on your machine which you can follow the download link to [here](https://nodejs.org/). After installing node, install the node packages for the app by running the command

```bash
npm install
```

Inside the root directory of the project. This will install all the dependencies for the application. After installing the needed dependencies, run the script

```bash
npm run dev
```

Which start the webpack bundler to bundle up the code and save it in the app/static folder.

For production application, run the script, which bundles the code for a production server.

```bash
npm run build
```

---

Read on the information about the dataset [here](https://www.kaggle.com/c/asap-aes/data)
