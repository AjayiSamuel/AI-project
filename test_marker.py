import pandas as pd
import pickle
from sklearn.linear_model import LinearRegression
from sklearn.externals import joblib
from src.utils.extract import Extract

# load the validation set from the dataset valic_set.xls file using
# pandas
df = pd.read_excel('dataset/valid_set.xls')

# the essay set to be used to validate the essay
essays = df['essay']

# load the marker model
model = joblib.load('models/marker.joblib')

# an index counter to count the total number of essays whose scores
# have been predicted
index = 0

# validate the model with the validation set of essays
for essay in essays:
    # extract the features needed by the model from the essay
    features = Extract(essay)

    # predict score of the essay
    score = model.predict([features.get_features()])[0]
    result = {
        'score': score[0],
        'category': score[1]
    }
    print(features.get_raw_extract_values())
    print(result)

    # predict the score of the first 11 essays
    if index == 0:
        break

    index += 1