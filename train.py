import os
import enchant
from nltk import pos_tag
from enchant.checker import SpellChecker
from utils import filter_document

# saving the absolute directory path to the train.py file
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# retrieving the path to the data directory from the current dir
DATA_DIR = os.path.join(BASE_DIR, 'data')

spell_checker = SpellChecker('en_UK', 'en_US')

# the id_ is used as a counter for the total number of essay sets
id_ = 0

# dictionary to store the essay sets ids
labels = {}

# the data with the extracted features used for the training
train_data = []

# list matching each value to an item in the train_data having its value
# as the set id of the essay
y_labels = []

# move through the data directory folder to retrieve the files
# and their directory name as label for the different essay sets
for dirpath, dirnames, filenames in os.walk(DATA_DIR):
    # taking the files returned from the directory walkthrough, and
    # iterating through to get the file path and label from its
    # directory name
    for file in filenames:
        if file.endswith('txt'):
            # path to the essay file, which will be used to read the file
            path = os.path.join(dirpath, file)

            # read the essay written in the file
            essay = open(path, 'r').read()

            # filter the essay, to remove unnecessay words such as the stopwords
            # and also tokenizing the essay words
            doc = filter_document(essay)
            text = ' '.join(doc)

            # extracting the word count feature from the essay by counting the total
            # number of words written in the essay
            word_count = len(doc)

            # extracting the sentence count feature from essay that's the total
            # number of sentences written
            sentence_count = text.count('.')

            # extracting the character count feature involving the total number of
            # individual letters written in the essay
            character_count = sum(len(word) for word in doc)

            # extracting the parts of speech from the essay as a proxy for vocabulary
            vocabulary = {}
            for tags in pos_tag(doc):
                word, tag = tags
                if not tag in vocabulary:
                    vocabulary[tag] = 1
                else:
                    vocabulary[tag] += 1

            # using PyEnchant to extract the total number of mispelt words in the essay
            # to determine the orthography or command over the language
            spell_checker.set_text(text)
            misspelt_words = len([err.word for err in spell_checker])

            # TODO: extract punctuation features using various RegExp

            # dictionary detailing the extract features values matching to each key
            analysis = {
                'word_count': word_count,
                'sentence_count': sentence_count,
                'character_count': character_count,
                'vocabulary': vocabulary,
                'misspelt_words': misspelt_words
            }

            print(analysis)

            break
